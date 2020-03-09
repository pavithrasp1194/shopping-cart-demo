import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CartsummaryComponent } from './modules/cartsummary/cartsummary.component';

const routes: Routes = [
  { path: 'cart', component: CartsummaryComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
