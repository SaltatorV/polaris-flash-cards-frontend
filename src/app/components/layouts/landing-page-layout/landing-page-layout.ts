import { Component } from '@angular/core';
import { LandingPageHeader } from "../../headers/landing-page-header/landing-page-header";
import {Button} from '../../buttons/button/button';
import {BasicCard} from '../../cards/basic-card/basic-card';
import {BasicCardGrid} from '../../cards/basic-card-grid/basic-card-grid';
import {ButtonCard} from '../../cards/button-card/button-card';
import {ProgressBarCard} from '../../cards/progress-bar-card/progress-bar-card';

@Component({
  selector: 'app-index-layout-component',
  imports: [LandingPageHeader, Button, BasicCard, BasicCardGrid, ButtonCard, ProgressBarCard],
  templateUrl: './landing-page-layout.html',
  styleUrl: './landing-page-layout.css',
})
export class LandingPageLayout {
  protected readonly LandingPageLayout = LandingPageLayout;
  static readonly CARDS = [
    {
      header: 'Create Decks',
      text: 'Organize your study material into clean and structured flashcard collections.'
    },
    {
      header: 'Review Daily',
      text: 'Build long-term memory with quick and distraction-free review sessions.'
    },
    {
      header: 'Track Progress',
      text: 'Monitor your learning progress and focus on topics that need improvement.'
    }
  ];

  protected readonly LandingPageHeader = LandingPageHeader;
}
