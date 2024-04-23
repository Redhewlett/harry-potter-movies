import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DurationPipe } from '../../../shared/pipe/duration.pipe';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule, DurationPipe],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input({ required: true }) movie: Movie;
  public normalizedBudget = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.normalizedBudget = this.normaliseBudget(this.movie.budget);
  }

  goToMovie(id: string) {
    this.router.navigate(['/movies', id]);
  }

  normaliseBudget(budget: string): string {
    // since we know we get 111 or 111-111
    const parsedBudget = budget.split('-');
    return parsedBudget.length > 1
      ? `$${parsedBudget[0]} - ${parsedBudget[1]}`
      : `$${parsedBudget[0]}`;
  }
}
