import {Component, enableProdMode} from '@angular/core'
import {bootstrap} from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS, Http} from '@angular/http'
import 'rxjs/Rx'
import {PeopleService} from './peopleService'
import {Person} from './person'

enableProdMode();

@Component({
  selector: 'my-app',
  providers: [PeopleService],
  template: `<my-person *ngFor="let person of people" 
            [name]="person.name"
            (hello)="saidHello($event)"></my-person>`,
  directives: [Person]
})

export class App {
  people : any;
  constructor(peopleService:PeopleService) {
    peopleService.people
        .subscribe(
            people => this.people = people,
            error => console.error('Error: ' + error),
            () => console.log(this.people)
        );
  }
  saidHello($event){
    alert(`You said hello to ${$event}`)
  }
}

bootstrap(App, HTTP_PROVIDERS)
    .catch(err => console.error(err));