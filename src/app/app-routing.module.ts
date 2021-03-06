import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RatesComponent} from './components/rates/rates.component';


const routes: Routes = [
  {
    path: 'rates',
    component: RatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
