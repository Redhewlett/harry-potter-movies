import { Component, Input } from '@angular/core';
import { Movie } from '../../../../shared/models/movie.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../../../../shared/pipe/duration.pipe';
import { normaliseBudget } from '../../../../shared/utils/currency.utils';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule, DurationPipe],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input({ required: true }) movie: Movie;

  constructor(private router: Router) {}

  goToMovie(id: string) {
    this.router.navigate(['/movies', id]);
  }
}
