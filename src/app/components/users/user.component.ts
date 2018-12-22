import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address;

    // Different 'types' in TypeScript
    foo: any;
    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusable: void;
    u: undefined;
    n: null;

    // Taking in 2 numbers and returning a number type
    addNumber(num1: number, num2: number): number {
        return num1 + num2;
    }


    // Methods
    // Constructor will run when this class is initialized
    constructor() {
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 30;
        this.address = {
            street: '50 Main St.',
            city: 'Boston',
            state: 'MA'
        };

    }
}