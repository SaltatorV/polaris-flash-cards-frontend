import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-basic-card',
  imports: [],
  templateUrl: './basic-card.html',
  styleUrl: './basic-card.css',
})
export class BasicCard {
  @Input()
  header?: string;
  @Input()
  text?: string;

}
