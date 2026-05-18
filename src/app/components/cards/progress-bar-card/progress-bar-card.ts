import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar-card',
  imports: [],
  templateUrl: './progress-bar-card.html',
  styleUrl: './progress-bar-card.css',
})
export class ProgressBarCard {
  @Input() label = 'Progress';
  @Input() title = 'Title';
  @Input() description = '';
  @Input() done = 0;
  @Input() total = 100;

  get progress(): number {
    if (this.total <= 0) {
      return 0;
    }

    return Math.round((this.done / this.total) * 100);
  }
}
