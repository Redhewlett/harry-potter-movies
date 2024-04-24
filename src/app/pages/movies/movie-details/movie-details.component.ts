import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../core/services/movie.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../../shared/models/movie.model';
import { Subscription } from 'rxjs';
import { DurationPipe } from '../../../shared/pipe/duration.pipe';
import { normaliseBudget } from '../../../shared/utils/currency.utils';
@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterLink, DurationPipe],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  public movie: Movie | undefined;
  private subscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    public movieService: MovieService
  ) {}

  ngOnInit() {
    let id: string | undefined;
    this.route.params.subscribe((value) => {
      id = value['movieId'];
    });
    if (id) {
      const subscription = this.movieService.getMovie(id).subscribe((movie) => {
        this.movie = {...movie, budget: normaliseBudget(movie.budget)}
      });
      // lets store the subscription to unsubscribe later
      this.subscription = subscription;
    }
  }

  ngOnDestroy(): void {
    //lets unsubscribe to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
