//! Scope and Lexical Environment
// Scope is the region where the variable is accessible.
// Scope can be Function Scope or Block Scope.
// Lexical Environment is the context where the variable is declared. It is created when the function is called and destroyed when the function is executed.
// Lexical Environment consists of two components: Environment Record(local env) and Reference to the outer environment(parent env).
// Javascript engine goes from the innermost scope to the outermost scope to find the variable and this process is called 'Scope Chain'.
// example:
function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        let innerVariable = 'I am inside!';
        console.log(outerVariable); // Can access outerVariable
        console.log(innerVariable); // Can access innerVariable
    }

    innerFunction();
    console.log(outerVariable); // Can access outerVariable
    // console.log(innerVariable); // Error: innerVariable is not defined
}

outerFunction();
// innerFunction(); // Error: innerFunction is not defined

//! Closure
// Function + Lexical Environment = Closure
// Closure is a function that has access to its outer function scope even after the outer function has finished has been called.
// its used in module pattern, currying, and memoization.
// example: 
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer variable: ' + outerVariable);
        console.log('Inner variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');

// example 2 with fetch:
function outerFunction(url){
    fetch(url) // the inner function has access to the url variable which is lexically scoped to the outer function
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

const newFunc = outerFunction('https://jsonplaceholder.typicode.com/posts/1'); 
