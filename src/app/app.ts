import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageHeader } from "./components/headers/landing-page-header/landing-page-header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPageHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('polaris-flash-cards-frontend');
}
