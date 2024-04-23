import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',
    loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule),
  },
];
