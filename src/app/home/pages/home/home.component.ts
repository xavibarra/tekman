import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  toggle: boolean = false;

  constructor(private readonly homeService: HomeService) {}

  ngOnInit(): void {
    this.subscription = this.homeService.toggleConfig$.subscribe(
      (toggle) => (this.toggle = toggle)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
