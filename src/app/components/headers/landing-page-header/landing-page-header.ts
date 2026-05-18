import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import {SectionHeaderButton} from '../section-header-button/section-header-button';
import {HeaderButton} from '../header-button/header-button';

@Component({
  selector: 'app-landing-page-header',
  imports: [Logo, SectionHeaderButton, HeaderButton],
  templateUrl: './landing-page-header.html',
  styleUrl: './landing-page-header.css',
})
export class LandingPageHeader {

}
