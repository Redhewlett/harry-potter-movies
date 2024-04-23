import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input({required:true}) movie: Movie;

}
