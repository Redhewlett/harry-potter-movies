import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'movies/:movieId',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesModule),
  },
  // redirect to home page if route not found, bonus have a quick 404 page
  {
    path: '**',
    redirectTo: '',
  },
];
