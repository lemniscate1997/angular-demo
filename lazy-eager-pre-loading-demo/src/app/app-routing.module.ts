import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppCustomPreloader } from './app-custom-preloader';

/**
 *  eager loading for load all module before app module
 */
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/country',
//     pathMatch: 'full'
//   }
// ];

/**
 * lazy loading
 */
const routes: Routes = [
  {
    path: 'country',
    loadChildren: './country/country.module#CountryModule'
  },
  {
    path: 'person',
    loadChildren: './person/person.module#PersonModule',
    data: {
      preload: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    /**
     *  preloading for preload all the modules after app module
     */
    // {
    //   preloadingStrategy: PreloadAllModules
    // }

    /**
     * custom preloading strategy
     */
    {
      preloadingStrategy: AppCustomPreloader
    }
  )],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule { }
