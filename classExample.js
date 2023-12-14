
// Create a class that accepts two numbers. Create another class that fetches the last digit of those two numbers. 
// Create a third class that multiplayer that last two digits.
// Example: Class A: Accept two numbers.
// 		    Class B: Fetches the last digits of the numbers
// 		    Class C: Multiplay the last two digits.

class A{
    constuctor(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
    }
}

class B{
    constuctor(num1, num2) {
        this.Digit1 = num1 % 10;
        this.Digit2 = num2 % 10;
    }
}

class C{
    constructor(num1, num2) {
        this.result =  (num1 % 10 ) *  (num2 % 10);
    }
}