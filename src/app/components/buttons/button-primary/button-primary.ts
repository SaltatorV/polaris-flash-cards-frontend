import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-button-primary',
  imports: [
    RouterLink
  ],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.css',
})
export class ButtonPrimary {
  @Input() routerLink: string = '#';
  @Input() text: string = 'Link';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() fullWidth = false;
}
