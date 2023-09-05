import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { StartingItem } from '../../models/starting.model';

@Component({
  selector: 'app-before-starting',
  templateUrl: './before-starting.component.html',
})
export class BeforeStartingComponent {
  INSTRUCTIONS_BEFORE_STARTING: Array<StartingItem>;

  constructor(
    private readonly _router: Router,
    private readonly _translate: TranslateService
  ) {
    this.INSTRUCTIONS_BEFORE_STARTING = [
      {
        id: 1,
        icon: '/assets/volume-notice.png',
        label: 'volume icon',
        description: this._translate.instant('beforeStartingVolume'),
      },
      {
        id: 2,
        icon: '/assets/stopwatch-start.png',
        label: 'watch icon',
        description: this._translate.instant('beforeStartingWatch'),
      },
      {
        id: 3,
        icon: '/assets/pause.png',
        label: 'pause icon',
        description: this._translate.instant('beforeStartingPause'),
      },
    ];
  }

  goHome(): void {
    this._router.navigate(['/home']);
  }
}
