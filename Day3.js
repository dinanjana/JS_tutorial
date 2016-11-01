/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
console.log('----Tutorial 7----');
assert( typeof canFly == "undefined", "canFly doesn't get that benefit." );
assert( typeof isDeadly == "undefined", "Nor does isDeadly." );
var canFly = function(){ return true; };
window.isDeadly = function(){ return true; };
assert( typeof isDeadly == "function", "Nor does isDeadly. " + typeof isDeadly);
assert( typeof canFly == "function", "canFly doesn't get that benefit." );

console.log('----Tutorial 8----');
function stealthCheck(){ 
  assert( stealth(), "We'll never get below the return, but that's OK!" ); 
 
  return stealth(); 
 
  function stealth(){ return true; } 
} 
 
console.log(stealthCheck());

console.log('-----Quiz 46-----');
function multiMax(multi){
  // Make an array of all but the first argument
  var allButFirst = Array.prototype.slice.call(arguments).slice(1,arguments.length);
  console.log(allButFirst);
  // Find the largest number in that array of arguments
  var largestAllButFirst = allButFirst.sort()[allButFirst.length-1]
  // Return the multiplied result
  return multi * largestAllButFirst;
}
assert( multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)"+multiMax(3, 1, 2, 3) );

console.log('----Sets----');
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);

console.log(-0===+0);
console.log('----Prototype chain----');

// Let's assume we have object o, with its own properties a and b:
var o= {a: 1, b: 2};
Object.setPrototypeOf(o,{b: 3, c: 4}); 
//has properties b and c:
// Finally, o.[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain as null,
// by definition, null has no [[Prototype]].
// Thus, the full prototype chain looks like:
// {a:1, b:2} ---> {b:3, c:4} ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited. 
// This is called "property shadowing"

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined






var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null
console.log(c.[[Prototype]]);

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); 
// undefined, because d doesn't inherit from Object.prototype



console.log('-----Inheritance example-----');
function A(a){
  this.varA = a;
}
// What is the purpose of including varA in the prototype when A.prototype.varA will always be shadowed by
// this.varA, given the definition of function A above?
A.prototype = {
  varA : null,  // Shouldn't we strike varA from the prototype as doing nothing?
      // perhaps intended as an optimization to allocate space in hidden classes?
      // https://developers.google.com/speed/articles/optimizing-javascript#Initializing instance variables
      // would be valid if varA wasn't being initialized uniquely for each instance
  doSomething : function(){
    // ...
  }
};

function B(a, b){
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB : {
    value: null, 
    enumerable: true, 
    configurable: true, 
    writable: true 
  },
  doSomething : { 
    value: function(){ // override
      A.prototype.doSomething.apply(this, arguments); // call super
      // ...
    },
    enumerable: true,
    configurable: true, 
    writable: true
  }
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();


console.log('----Setters and getters in Objects---');
var o = {
  a: 7,
  get b() { 
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25

console.log('----Adding a property year to already defined Date type---');
var d = Date.prototype;
Object.defineProperty(d, "year", {
  get: function() { return this.getFullYear() },
  set: function(y) { this.setFullYear(y) }
});