import {Component, EventEmitter} from '@angular/core'
import {HTTP_PROVIDERS, Http} from '@angular/http'

@Component({
    selector: 'my-person',
    inputs: ['author', 'feed'],
    template: `
    <div>
      <span>{{author}}</span>
    </div>
  `
})
export class Person {
    author : any;
}
