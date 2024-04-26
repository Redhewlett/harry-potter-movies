import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/movies/movies.component').then((m) => m.MoviesComponent),
  },
  {
    path: 'movies/:movieId',
    loadComponent: () =>
      import('./pages/movies/movie-details/movie-details.component').then((m) => m.MovieDetailsComponent),
  },
  // redirect to home page if route not found, bonus have a quick 404 page
  {
    path: '**',
    redirectTo: '',
  },
];
