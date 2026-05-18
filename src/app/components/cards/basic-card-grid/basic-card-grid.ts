import {Component, Input} from '@angular/core';
import {BasicCardItem} from './basic-card-item';
import {BasicCard} from '../basic-card/basic-card';

@Component({
  selector: 'app-basic-card-grid',
  imports: [
    BasicCard
  ],
  templateUrl: './basic-card-grid.html',
  styleUrl: './basic-card-grid.css',
})
export class BasicCardGrid {
  @Input() cards: BasicCardItem[] = [];
}
