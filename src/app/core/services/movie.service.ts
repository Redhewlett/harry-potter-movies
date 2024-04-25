import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';
import { Movie } from '../../shared/models/movie.model';
import { normaliseBudget } from '../../shared/utils/currency.utils';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies: WritableSignal<Movie[]> = signal([]);
  private moviesCache: Movie[] = [];

  constructor(private http: HttpClient) {}

  public getMovies(): void {
    this.http.get<Movie[]>('/movies').subscribe((movies) => {
      const moviesWithBudget = movies.map((movie) => ({
        ...movie,
        budget: normaliseBudget(movie.budget),
      }));
      this.movies.set(moviesWithBudget);
      this.moviesCache = moviesWithBudget;
    });
  }

  public getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`/movies/${id}`);
  }

  public filterMovies(title: string | null, releaseYear: number|null): void {
    //filter the movies based on the title and release year
    //this method will be called whenever the title or release year changes
    const movies = this.moviesCache;
    const filteredMovies = movies.filter(
      (movie) => {
        const titleMatch = title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true;
        const movieYear = new Date(movie.release_date).getFullYear();
        const releaseYearMatch = releaseYear ? movieYear === releaseYear : true;
        return titleMatch && releaseYearMatch;
      }
    );
    this.movies.set(filteredMovies);
  }
}
