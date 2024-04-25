import { Component, CreateEffectOptions, effect, signal } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css',
})
export class MovieFilterComponent {
  //the two form inputs
  public title: FormControl<string | null> = new FormControl('');
  public releaseYear: FormControl<number | null> = new FormControl(null);

  constructor(private movieService: MovieService) {
    //subscribe to the form inputs
    this.title.valueChanges.pipe(debounceTime(100)).subscribe((title) => {
      this.movieService.filterMovies(title, this.releaseYear.value);
    });

    this.releaseYear.valueChanges
      .pipe(debounceTime(100))
      .subscribe((releaseYear) => {
        this.movieService.filterMovies(this.title.value, releaseYear);
      });
  }
}
