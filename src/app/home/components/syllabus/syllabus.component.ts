import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { HomeService } from '../../services/home.service';
import { Trimester } from '../../models/trimester.model';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
})
export class SyllabusComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  trimesters: Array<Trimester> = [];

  constructor(
    private readonly _router: Router,
    private readonly homeService: HomeService
  ) {}

  ngOnInit(): void {
    const trimesters = JSON.parse(localStorage.getItem('trimesters') ?? '{}');

    if (Object.keys(trimesters)?.length) {
      this.trimesters = trimesters;
    } else {
      this.subscription = this.homeService
        .getTrimesters()
        .subscribe((trimesters) => {
          this.trimesters = trimesters;
          localStorage.setItem('trimesters', JSON.stringify(this.trimesters));
        });
    }
  }

  goToTrimester(trimester: Trimester): void {
    this._router.navigate([`/home/trimester/${trimester.id.toString()}`]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
