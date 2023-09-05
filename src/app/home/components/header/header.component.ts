import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HeaderItem } from '../../models/header.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private readonly homeService: HomeService) {}

  onButtonClick(item: HeaderItem): void {
    if (item.id === 2) {
      this.homeService.toggleConfig$.next(
        !this.homeService.toggleConfig$.value
      );
    }
  }

  readonly NAVBAR_ITEMS: Array<HeaderItem> = [
    {
      id: 1,
      label: 'Menú',
      icon: '/assets/menu.png',
    },
    {
      id: 2,
      label: 'Configuración',
      icon: '/assets/config.png',
    },
    {
      id: 3,
      label: 'Cerrar sesión',
      icon: '/assets/exit.png',
    },
  ];
}
