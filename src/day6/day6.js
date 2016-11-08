/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

console.log('-----37 Quiz----');

function User(first, last){
  if ( !(this instanceof arguments.callee) )
    return new User(first, last);
  
  this.name = first + " " + last;
}

var name = "Resig";
var user = User("John", name);

assert( user, "This was defined correctly, even if it was by mistake." );
assert( name == "Resig", "The right name was maintained." );

"use strict";
                       // Assuming a global variable mistypedVariable exists
mistypedVaraible = 17;

function smallest(){ 
  return Math.min.apply( Math, arguments ); 
} 
function largest(){ 
  return Math.max.apply( Math, arguments ); 
} 
console.log(smallest(0, 1, 2, 3) == 0 + " Locate the smallest value."); 
console.log(largest(0, 1, 2, 3) == 3, + " Locate the largest value.");

var a = 5;
function runMe(a){
 assert( a == 6, "Check the value of a." );

 function innerRun(){
   assert( b == 7, "Check the value of b." );
   assert( c == undefined, "Check the value of c." );
 }

 var b = 7;
 innerRun();
 var c = 8;
}
runMe(6);

for ( var d = 0; d < 3; d++ ) {
 setTimeout(function(){
   assert(d==3, "Check the value of d." );
 }, 100);
}


for ( var d = 0; d < 3; d++ ) (function(d){ 
 setTimeout(function(){ 
   log( "Value of d: ", d ); 
   assert( d == d, "Check the value of d." ); 
 }, d * 200); 
})(d)

var count = 0;
for ( var i = 0; i < 4; i++ ) {
  (function(i){
    setTimeout(function(){
    assert( i == count++, "Check the value of i." );
  }, i * 200);
  })(i); 
}

function Ninja(){
  this.swung = true;
}

var ninjaA = new Ninja();
var ninjaB = new Ninja();

// Add a method to the Ninja prototype which
// returns itself and modifies swung
Ninja.prototype.swing=function(){
  this.swung=!this.swung;
  return this;
}

assert( !ninjaA.swing().swung, "Verify that the swing method exists and returns an instance." );
assert( !ninjaB.swing().swung, "and that it works on all Ninja instances." );

var ninja = (function(){
 function Ninja(){}
 return new Ninja();
})();

// Make another instance of Ninja
var ninjaB = new ninja.constructor();

assert( ninja.constructor == ninjaB.constructor, "The ninjas come from the same source." );

function Person(){}
Person.prototype.getName = function(){
  return this.name;
};

function Me(){
  this.name = 'dinanjana';
  Person.call(this);
}

Me.prototype=Object.create(Person.prototype);
// Implement a function that inherits from Person
// and sets a name in the constructor

var me = new Me();
assert( me.getName(), "A name was set." );