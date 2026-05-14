import { Component } from '@angular/core';
import { LandingPageHeader } from "../../headers/landing-page-header/landing-page-header";
import {Button} from '../../buttons/button/button';

@Component({
  selector: 'app-index-layout-component',
  imports: [LandingPageHeader, Button],
  templateUrl: './landing-page-layout.html',
  styleUrl: './landing-page-layout.css',
})
export class LandingPageLayout {

}
