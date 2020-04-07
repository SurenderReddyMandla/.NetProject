import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {navComponent} from './nav.component';
import { QuestionsComponent } from './questions.component';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {QuizComponent} from './quiz.component';
import {QuizListComponent} from './quizList.component';

const routes =[
  {path : 'question',component:QuestionComponent},
  {path: 'questions',component:QuestionsComponent},
  {path: '',component:HomeComponent},
  {path: 'quiz',component:QuizComponent},
  {path: 'quizlist',component:QuizListComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    QuizComponent,
    QuizListComponent
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatToolbarModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
