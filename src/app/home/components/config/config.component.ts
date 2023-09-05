import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
})
export class ConfigComponent implements OnInit {
  selectedLanguage!: string;
  selectedCourse!: string;

  constructor(
    private readonly homeService: HomeService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    // Cargar el idioma seleccionado desde el localStorage o establecer 'es' como valor predeterminado
    this.selectedLanguage = localStorage.getItem('selectedLanguage') ?? 'es';
    this.selectedCourse = localStorage.getItem('selectedCourse') ?? '1';
  }

  close(): void {
    this.homeService.toggleConfig$.next(false);
  }

  switchLanguage(): void {
    // Guarda el idioma seleccionado en el localStorage
    localStorage.setItem('selectedLanguage', this.selectedLanguage);

    // Cambia el idioma de la aplicación
    this.translate.use(this.selectedLanguage);
  }
}
