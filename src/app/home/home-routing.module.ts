import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BeforeStartingComponent } from './pages/before-starting/before-starting.component';
import { TrimesterComponent } from './components/trimester/trimester.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'trimester/:id',
    component: TrimesterComponent,
  },
  {
    path: 'before-starting',
    component: BeforeStartingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
