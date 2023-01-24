import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
 user : Developer = new Developer (
  'John',
  'Doe',
   30,
  'male',
  'A developer with 10 years of experience',
  [ new Skill ( 'Angular', 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg', 'https://angular.io' ) ]
  );
}
