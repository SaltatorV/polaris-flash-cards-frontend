import { Component } from '@angular/core';
import { LandingPageHeader } from "../../headers/landing-page-header/landing-page-header";
import {ButtonPrimary} from '../../buttons/button-primary/button-primary';

@Component({
  selector: 'app-index-layout-component',
  imports: [LandingPageHeader, ButtonPrimary],
  templateUrl: './landing-page-layout.html',
  styleUrl: './landing-page-layout.css',
})
export class LandingPageLayout {

}
