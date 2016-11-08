/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

console.log('---Inheritance---');
var person = {
  kind: 'person'
}

// creates a new object which prototype is person
var zack = Object.create(person);
  
console.log(zack);

/**

 * Created by nethmik on 2/11/16.

 */



class Employee {
  
  constructor(name,dept){
    this.name = name || "";
    this.dept = dept || "general";
  }

  sayHello(){
    return "Hi! I`m " + this.name;
  }

};

class WorkerBee extends Employee {

  constructor(name,dept,projs){
    super(name,dept);
    this.projs = projs || [];
  }

};

class Engineer extends WorkerBee{

  constructor(name,projs,mach){
    super(name,"Engineering",projs);
    this.mach = mach || "";
  }

  sayHello(){
    return "Hi! I`m " + this.name + " from Emgineering Department";
  }
  
};

var jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");
var mark = new WorkerBee("Doe, Mark","training",["javaScript"]);

console.log(jane.sayHello());
console.log(mark.sayHello());

var ninja = {
  yell: function(n){
    return n > 0 ? ninja.yell(n-1) + "a" : "hiy";
  }
};
console.log( ninja.yell(4) == "hiyaaaa", "A single object isn't too bad, either." );

var samurai = { yell: ninja.yell };
var ninja = null;

try {
  samurai.yell(4);
} catch(e){
  console.log( e, "Uh, this isn't good! Where'd ninja.yell go?" );
}

console.log('-----Tutorial 14-----');
var ninja = { 
  yell: function yell(n){ 
    return n > 0 ? yell(n-1) + "a" : "hiy"; 
  } 
}; 
console.log( ninja.yell(4) == "hiyaaaa", "Works as we would expect it to!" ); 
 
var samurai = { yell: ninja.yell }; 
var ninja = {}; 
assert( samurai.yell(4) == "hiyaaaa", "The method correctly calls itself." );
var ninja = { 
  yell: function yell(n){ 
    return n > 0 ? yell(n-1) + "a" : "hiy"; 
  } 
}; 
console.log( ninja.yell(4) == "hiyaaaa", "Works as we would expect it to!" ); 
 
var samurai = { yell: ninja.yell }; 
var ninja = {}; 
console.log(samurai.yell(4) == "hiyaaaa", "The method correctly calls itself." );
console.log(ninja.__proto__);

console.log('----Quiz 32----');
function Ninja(name){
  // Implement!
  this.name = name;
  this.changeName=function (name){
    this.name = name;
  }
}

var ninja = new Ninja("John");
assert( ninja.name == "John", "The name has been set on initialization" );

ninja.changeName("Bob");

console.log('-----Quiz 36----');

function User(first, last){ 
  if ( !(this instanceof User) ) 
    return new User(first, last); 
   
  this.name = first + " " + last; 
} 
 
var name = "Resig"; 
var user = User("John", name); 
 
assert( user, "This was defined correctly, even if it was by mistake." ); 
assert( name == "Resig", "The right name was maintained." );
Run « Prev Next » 
function User(first, last){
  
  this.name = first + " " + last;
}

var name = "Resig";
var user = User("John", name);

console.log( user, "This was defined correctly, even if it was by mistake." );
console.log( name == "Resig", "The right name was maintained." );




/*
Exception: SyntaxError: redeclaration of let Employee
@Scratchpad/1:11:5
*/