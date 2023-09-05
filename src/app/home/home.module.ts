import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { LastSessionComponent } from './components/last-session/last-session.component';
import { HomeComponent } from './pages/home/home.component';
import { BeforeStartingComponent } from './pages/before-starting/before-starting.component';
import { HomeService } from './services/home.service';
import { SharedModule } from '../shared/shared.module';
import { ConfigComponent } from './components/config/config.component';
import { TrimesterComponent } from './components/trimester/trimester.component';

@NgModule({
  declarations: [
    HomeComponent,
    BeforeStartingComponent,
    SyllabusComponent,
    HeaderComponent,
    LastSessionComponent,
    ConfigComponent,
    TrimesterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    TranslateModule,
    FormsModule,
  ],
  providers: [HomeService],
})
export class HomeModule {}
