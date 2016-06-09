import {Component, EventEmitter} from '@angular/core'
import {HTTP_PROVIDERS, Http} from '@angular/http'

@Component({
    selector: 'my-person',
    inputs: ['name'],
    outputs: ['hello'],
    template: `
    <div>
      <span>{{name}}</span>
      <button (click)="sayHello()">Say Hello</button>
    </div>
  `
})
export class Person {
    name : any;
    hello = new EventEmitter();
    sayHello(e) {
        this.hello.next(this.name);
    }
}