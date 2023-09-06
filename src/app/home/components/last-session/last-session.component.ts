import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'; // Asegúrate de importar el servicio de traducción adecuado

@Component({
  selector: 'app-last-session',
  templateUrl: './last-session.component.html',
})
export class LastSessionComponent implements OnInit {
  lastSessionText: string = '';

  constructor(
    private readonly _router: Router,
    private readonly _translateService: TranslateService // Inyecta el servicio de traducción
  ) {}

  ngOnInit(): void {
    const lastSessionDataStr = localStorage.getItem('lastSession');

    if (lastSessionDataStr) {
      const lastSessionData = JSON.parse(lastSessionDataStr);
      const sessionName = this._translateService.instant(lastSessionData.name);
      const sessionId = lastSessionData.id;

      let trimesterNumber = '1º';
      if (sessionId >= 51 && sessionId <= 100) {
        trimesterNumber = '2º';
      } else if (sessionId > 100) {
        trimesterNumber = '3º';
      }

      this.lastSessionText = `${trimesterNumber} Trimestre - Sesión ${sessionId}, ${sessionName}`;
    } else {
      this._translateService
        .get('noLastSession')
        .subscribe((translation: string) => {
          this.lastSessionText = translation;
        });
    }
  }

  handleButtonClick(): void {
    this._router.navigate(['/home/before-starting']);
  }
}
