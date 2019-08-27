import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';

const routes: Routes = [
  {
    // path: 'person',
    path: '', // This is for lazy loading
    component: PersonComponent,
    children: [
      {
        path: 'person-list',
        component: PersonListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
