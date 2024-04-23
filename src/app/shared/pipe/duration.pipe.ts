import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(duration: string): string {
    // no arguments for now but eventually we could have argument to specify input format and output format
    // for now we assume duration is in minutes
    const hours = Math.floor(+duration / 60);
    const minutes = +duration % 60;
    // lets check if we have hours and minutes
    if (hours && minutes) {
      return `${hours}h ${minutes}min`;
    } else if (hours) {
      return `${hours}h`;
    }
    return `${minutes}min`;
  }
}
