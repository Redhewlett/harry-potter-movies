import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, shareReplay } from 'rxjs';
import { Movie } from '../../shared/interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movies$ = this.getMovies().pipe(shareReplay(1))

  constructor(private http:HttpClient) {}

  private getMovies() {
    return this.http.get<Movie>('/movies');
  }
}
