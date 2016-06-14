import {Component, enableProdMode} from '@angular/core'
import {bootstrap} from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS, Http} from '@angular/http'
import 'rxjs/Rx'
import {PeopleService} from './peopleService'

enableProdMode();

@Component({
  selector: 'my-app',
  providers: [PeopleService],
  template: `<style>
                h2.newsTitle {
                  font-weight: bold;
                  margin-bottom: 0;
                }
                h2.newsTitle a {
                  color: #000;
                  text-decoration: none;
                }
                p.newsMetaData {
                  margin-top: 0.5em;
                }
             </style>
            <div *ngFor="let person of generateArray(people)">
              <div *ngFor="let b of generateArray(person)">
                <div *ngFor="let a of generateArray(b)[5]">
                  <h2 class='newsTitle'>
                    <a href='{{a.link}}' onclick='myFunction()'>{{a.title}}</a>
                  </h2>
                  <p class="newsMetaData">{{a.author}} - {{a.publishedDate}}</p>
                </div>
              </div>
            </div>`
})

export class App {
  public people = {};
  constructor(peopleService:PeopleService) {
    peopleService.people
        .subscribe(
            people => this.people = people,
            error => console.error('Error: ' + error),
            () => console.log('YOLO')
        );
  }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
  }
}

bootstrap(App, HTTP_PROVIDERS)
    .catch(err => console.error(err));
