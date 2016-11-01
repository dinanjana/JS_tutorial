/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function Car (model,make){
  this.model=model;
  this.make=make;
 
}
var obj = new Car('mustang','Ford')
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}

console.log(dump_props(obj,'Car'));
console.log(dump_props({model:'Toyota',name:'Corolla',}, 'Cars'));



function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
console.log(A(1));


function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
console.log(outside()(20) ); 

// scopes inside -> outside -> global

var x = 10;
{
  var x = 30;  
}
console.log(x);



var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
console.log(pet("Vivie")());
//myPet();       

var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex === "string" && (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")) {
        sex = newSex;
      }
    }
  }
}

//Creating a class with methods, using
//function constructor 
function Pet(name){
   this.name=name;
  
   this.setName=function(newName) {
      this.name = newName;
    },
    
    this.getName=function() {
      return this.name;
    },
    
    this.getSex=function() {
      return this.sex;
    },
    
    this.setSex=function(newSex) {
      if(typeof newSex === "string" && (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")) {
        sex = newSex;
      }
    }
}
var pet = createPet("Vivie");
pet.getName();                  // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex());                   // male
console.log(pet.getName());                  // Oliver

var pet = new Pet ('Ollie');
console.log(pet.getName());


//functions has an array like argument list 
//function is actually an Function object
function myConcat(separator) {
   var result = ""; // initialize list
   var i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   console.log(result);
}

// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");

function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a*b;
}
console.log(multiply(5));

function multiply(a, b=5) {
  return a*b;
}
console.log(multiply(5));

var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryl­lium"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s => s.length );

console.log(a2,a3);

function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age = 5;
    console.log(this.age++);
  }, 10000000);
}

//var p = new Person();

function am(x){
  function b(y){
    function c(z){
       return x+y+z;  
    }
    c(5);
  }
  b(2);
}

console.log(am(8))

// 4 uses of this
//1 Global scoping
console.log(this.word='hello!');
console.log(window.word);
function test(){
  return this.word;
}
console.log(test());

//explicitly attaching objects
// 2 innermost object scoping
var obj = {word:'world!'};
console.log(test.apply(obj));

obj.func=test;
console.log('inner scoping ' + obj.func());

//3 Object scoping 
function Test(){this.word='Good bye!'}
console.log(new Test());

6 & 9;
6 | 9;
~6; 
6 >> 1

x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
console.log(myobj);
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
console.log(myobj);
delete myobj;