import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private readonly _translate: TranslateService) {}

  ngOnInit() {
    // Comprobar si hay un idioma guardado en el almacenamiento local
    const selectedLanguage = localStorage.getItem('selectedLanguage');

    if (selectedLanguage) {
      // Si se encontró un idioma en el almacenamiento local, úsalo
      this._translate.use(selectedLanguage);
    } else {
      // Si no se encontró un idioma en el almacenamiento local, usa 'es' como idioma predeterminado
      this._translate.setDefaultLang('es');
      this._translate.use('es');
    }
  }
}
