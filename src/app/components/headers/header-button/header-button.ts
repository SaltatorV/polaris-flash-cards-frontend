import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header-button',
  imports: [
    RouterLink
  ],
  templateUrl: './header-button.html',
  styleUrl: './header-button.css',
})
export class HeaderButton {
  @Input() routerLink: string = '#';
  @Input() text: string = 'Link';
}
