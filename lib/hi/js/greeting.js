
document.observe("dom:loaded", function() {
    console.log('Hello World');
});

/*
var greeting = greeting || (function () {
    var counter = 0,
        sayHello = function () {
            console.log('Hello..');
        },
        incrementCounter = function () {
            counter++;
            console.log('counter = ' + counter);
        },
        decrementCounter = function () {
            counter--;
            console.log('counter = ' + counter);
        };

    return {

        greet: sayHello,
        increase: incrementCounter,
        decrease: decrementCounter
    };
}());
*/
