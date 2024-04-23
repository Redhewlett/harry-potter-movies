import { Component } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieItemComponent, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  constructor(public movieService: MovieService) {}
}
