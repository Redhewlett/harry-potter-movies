import { Component, signal } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css',
})
export class MovieFilterComponent {
  //the two form inputs
  public title = signal('');
  public releaseYear = signal(0);

  constructor(private movieService: MovieService) {}
}
