import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName = 'John';
    lastName = 'Doe';
    age = 30;

    // Methods
    // Constructor will run when this class is initialized
    constructor() {
        console.log("Hello user...");
        this.sayHello();
        console.log(this.age);
        this.hasBirthday();
        console.log(this.age);
    }

    sayHello() {
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthday() {
        this.age += 1;
    }
}