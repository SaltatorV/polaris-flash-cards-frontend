import { Component } from '@angular/core';
import { LandingPageHeader } from "../../headers/landing-page-header/landing-page-header";
import {Button} from '../../buttons/button/button';
import {BasicCard} from '../../cards/basic-card/basic-card';

@Component({
  selector: 'app-index-layout-component',
  imports: [LandingPageHeader, Button, BasicCard],
  templateUrl: './landing-page-layout.html',
  styleUrl: './landing-page-layout.css',
})
export class LandingPageLayout {

}
