import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [
  {
    // path: 'country', // If component loaded using eager loading
    path: '', // If component loaded using lazy loading
    component: CountryComponent,
    children: [
      {
        path: 'country-list',
        component: CountryListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
