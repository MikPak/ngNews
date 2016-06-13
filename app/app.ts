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
  template: `<my-person *ngFor="let person of generateArray(people)">
            </my-person>`
})

export class App {
  public people = {};
  constructor(peopleService:PeopleService) {
    peopleService.people
        .subscribe(
            people => this.people = people,
            error => console.error('Error: ' + error),
            () => console.log('Completed')
        );
  }

  generateArray(obj){
    //console.log(obj.responseData);
    //console.log('generateArray: ' + obj);
    //console.log(Object.keys(obj.responseData).map((key)=>{ return obj[key]}));

    let tmp = Object.keys(obj).map((key)=>{ return obj[key]});
    console.log(tmp);
    return tmp;
  }
}

bootstrap(App, HTTP_PROVIDERS)
    .catch(err => console.error(err));
