import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeopleService {
    people : any;
    constructor(http:Http) {
        this.people = http.get('http://high.fi/uutiset/json')
            .map(response => response.json());
    }
}
// api/people.json
// [{"id": 1, "name": "Brad"}, ...]
