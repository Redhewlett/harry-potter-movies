import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';
import { Movie } from '../../shared/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies$ = this.getMovies().pipe(shareReplay(1))

  constructor(private http: HttpClient) {}

  private getMovies() {
    return this.http.get<Movie[]>('/movies');
  }
}
