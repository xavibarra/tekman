import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  constructor(private readonly _router: Router) {}

  goHome(): void {
    this._router.navigate(['/']);
  }
}
