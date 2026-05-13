import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-header-button',
  imports: [],
  templateUrl: './section-header-button.html',
  styleUrl: './section-header-button.css',
})
export class SectionHeaderButton {
  @Input() href: string = '#';
  @Input() text: string = 'Link';
}
