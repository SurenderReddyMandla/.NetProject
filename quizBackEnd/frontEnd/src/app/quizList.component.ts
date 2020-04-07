import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'quizList',
    templateUrl: './quizList.component.html'  
  })

export class QuizListComponent {

    quiz={};
    quizzes

    constructor(private api: ApiService){ }
    ngOnInit(){
        this.api.getQuizzes().subscribe(res=>{
            this.quizzes=res;
        });
    }

   post(quiz) {
        this.api.postQuiz(quiz);
    }

}