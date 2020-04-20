import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {navComponent} from './nav.component';
import { QuestionsComponent } from './questions.component';
import {MatListModule} from '@angular/material/list';
import {HomeComponent} from './home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {QuizComponent} from './quiz.component';
import {QuizListComponent} from './quizList.component';
import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';
import {PlayComponent} from './play.component';
import {PlayquizComponent} from './playquiz.component';
import {FinishedComponent} from  './finished.component'
import {AuthInterceptor} from './auth.interceptor';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';

const routes =[
  {path : 'question',component:QuestionComponent},
  {path : 'question/:quizId',component:QuestionComponent},
  {path: 'questions',component:QuestionsComponent},
  {path: '',component:HomeComponent},
  {path: 'quiz',component:QuizComponent},
  {path: 'quizlist',component:QuizListComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'play', component:PlayComponent},
  {path: 'playquiz/:quizId', component:PlayquizComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    QuizComponent,
    QuizListComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayquizComponent,
    FinishedComponent
 
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
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule

  ],
  providers: [ApiService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents: [FinishedComponent]
})
export class AppModule { }
