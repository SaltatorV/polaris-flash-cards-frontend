import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {
  constructor(private router: Router) {}

  goToLanding() {
    this.router.navigate(['/landing']);
  }
}
