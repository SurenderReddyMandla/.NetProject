import { Component } from '@angular/core';
import {QuestionComponent} from './question.component';

import {AuthService} from './auth.service';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html'
                            })
export class navComponent {

  constructor(private auth:AuthService){}

}
