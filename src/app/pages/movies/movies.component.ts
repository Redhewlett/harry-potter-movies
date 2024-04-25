import { Component } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieItemComponent, CommonModule, MovieFilterComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  constructor(public movieService: MovieService) {}
}
