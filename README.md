## What is Signal 

--> Signals in Angular provide a way to manage and react to state changes in a more declarative and efficient manner.

--> A signal is a reactive primitive that represents a value and that allows us to change that same value in a controlled way and track its changes over time.

Example - 

    let x = 5;
    let y = 3;
    let z = x + y;
    console.log(z);

    --> The output will be 8
    but what happened if later change the value of x and make it 10 ?

    let x = 5;
    let y = 3;
    let z = x + y;
    console.log(z);
    x = 10;

    z will be still 8
    
    ** That's because a value is assigned to z when the expression is first evaluated. The z variable does not react to changes in x or y

    ** But using signal we can easily solve this problem. 

## Advantage

    signals are providing us the following advantages:

    1. Reactive State Management:  Signals allow for a more reactive approach to state management, enabling components to automatically update when the state changes, reducing the need for manual event handling.

    2. Improved performance: Angular can optimize change detection, making applications faster and more efficient. Signals can help minimize unnecessary re-renders and improve overall performance

    3. Simplified code:  Signals can simplify codes by reducing boilerplate and making state mamagement more intuitive. This leads to cleaner and more maintainable code.

    4. Integration with Angular ecosystem: Signals are well-integrated with angular's exisiting tools and libraries, making it easier to adopt them in existing projects and benefit from the angular ecosystems.

## Implementations

    In this code, I have implemented -

    1. Signal with primitive value i.e. Number
    2. Signal with non primitive value i.e. Object and Array
    3. Set(), update(), compute()
    4. Use signal in api calls and render the value in html and so on.

    ** Additionally routing in angular 18, services.

