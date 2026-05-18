import {Component, Input} from '@angular/core';
import {Button} from "../../buttons/button/button";

@Component({
  selector: 'app-button-card',
    imports: [
        Button
    ],
  templateUrl: './button-card.html',
  styleUrl: './button-card.css',
})
export class ButtonCard {
  @Input() header?: string;
  @Input() supportText?: string;
  @Input() btnText: string = "";
  @Input() btnRoute: string = "/";
}
