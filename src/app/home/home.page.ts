import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {}

  public appPages = [
    {
      title: 'Books',
      route: '/books-page',
      icon: 'books'
    },
    {
      title: 'Quiz',
      route: '/quiz-page',
      icon: 'books'
    },
    {
      title: 'Review',
      route: '/review-page',
      icon: 'books'
    },
    {
      title: 'Learn',
      route: '/learn-page',
      icon: 'books'
    },

  ]

  public processNavigateToPage(page: any) {
    this.router.navigateByUrl(page.route);
  }

}
