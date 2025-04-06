/**
 * @return {Function}
 */
let createHelloWorld = function() {
    
  return (...args) => "Hello World";
};

console.log(createHelloWorld())

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/