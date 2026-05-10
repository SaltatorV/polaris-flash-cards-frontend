import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';

@Component({
  selector: 'app-landing-page-header',
  imports: [Logo, MatToolbar, MatToolbarRow],
  templateUrl: './landing-page-header.html',
  styleUrl: './landing-page-header.css',
})
export class LandingPageHeader {

}
