import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';
import { Movie } from '../../shared/models/movie.model';
import { normaliseBudget } from '../../shared/utils/currency.utils';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies$ = this.getMovies().pipe(
    map((movies) =>
      movies.map((movie) => ({
        ...movie,
        budget: normaliseBudget(movie.budget),
      }))
    ),
    catchError((error) => {
      console.error('Error fetching movies', error);
      return of([]);
    }),
    shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  private getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies')
  }

  public getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`/movies/${id}`);
  }
}
