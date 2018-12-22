import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName = 'John';
    lastName = 'Smith';
    age = 30;
    address = {
        street: '50 Main St.',
        city: 'Boston',
        state: 'MA'
    }

    // Methods
    // Constructor will run when this class is initialized
    constructor() {

    }
}