import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // share replay
  public movies$ = this.getMovies().pipe(shareReplay(1))

  constructor(private http:HttpClient) {}

  private getMovies() {
    return this.http.get('/movies');
  }
}
