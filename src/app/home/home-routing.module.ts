import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from '../books-page/books-page.component';
import { LearnPageComponent } from '../learn-page/learn-page.component';
import { NotePageComponent } from '../note-page/note-page.component';
import { QuizPageComponent } from '../quiz-page/quiz-page.component';
import { ReviewPageComponent } from '../review-page/review-page.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'books-page',
        component: BooksPageComponent
      },
      {
        path: 'note-page',
        component: NotePageComponent
      },
      {
        path: 'review-page',
        component: ReviewPageComponent
      },
      {
        path: 'quiz-page',
        component: QuizPageComponent
      },
      {
        path: 'learn-page',
        component: LearnPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
