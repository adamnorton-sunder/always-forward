import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { BooksPageComponent } from '../books-page/books-page.component';
import { LearnPageComponent } from '../learn-page/learn-page.component';
import { NotePageComponent } from '../note-page/note-page.component';
import { QuizPageComponent } from '../quiz-page/quiz-page.component';
import { ReviewPageComponent } from '../review-page/review-page.component';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    BooksPageComponent,
    NotePageComponent,
    ReviewPageComponent,
    QuizPageComponent,
    LearnPageComponent
  ]
})
export class HomePageModule {}
