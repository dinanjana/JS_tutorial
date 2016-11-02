/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

console.log('---Inheritance---');
var ClassA = function() {
    this.name = "class A";
}

ClassA.prototype.print = function() {
    console.log(this.name);
}

var a = new ClassA();

a.print();

var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

var ClassB = function() {
    this.name = "class B";
    this.surname = "I'm the child";
}

inheritsFrom(ClassB, ClassA);

var b = new ClassB();
b.print();

ClassB.prototype.print = function() {
    ClassA.prototype.print.call(this);
    console.log(this.surname);
}

b.print();

var ClassC = function () {
    this.name = "class C";
    this.surname = "I'm the grandchild";
}

inheritsFrom(ClassC, ClassB);

ClassC.prototype.foo = function() {
    // Do some funky stuff here...
}

ClassC.prototype.print = function () {
    ClassB.prototype.print.call(this);
    console.log("Sounds like this is working!");
}
var c = new ClassC();
c.print();
console.log(c);

console.log('---Inheritance more----');

function Employee() {
  this.name = "";
  this.dept = "general";
}
function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
   WorkerBee.call(this);
   this.dept = "sales";
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
   WorkerBee.call(this);
   this.dept = "engineering";
   this.machine = "";
}
Engineer.prototype = Object.create(WorkerBee.prototype);

var jim = new Employee;
// jim.name is ''
// jim.dept is 'general'

var sally = new Manager;
// sally.name is ''
// sally.dept is 'general'
// sally.reports is []

var mark = new WorkerBee;
// mark.name='Jim'
// mark.dept is 'general'
// mark.projects is []
console.log(mark);
console.log(jim);
console.log(mark.prototype);

var fred = new SalesPerson;
// fred.name is ''
// fred.dept is 'sales'
// fred.projects is []
// fred.quota is 100

var jane = new Engineer;
// jane.name is ''
// jane.dept is 'engineering'
// jane.projects is []
// jane.machine is ''

console.log('----Iterators and Generators----');
function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

console.log('-----Advanced Generators-----');
function* fibonacci(){
  var fn1 = 0;
  var fn2 = 1;
  while (true){  
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset){
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2

console.log('----Proxies----');
var handler = {
  get: function(target, name){
    return name in target ? target[name] : 42;
}};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42

/*
Exception: TypeError: console.log(...) is undefined
@Scratchpad/1:110:1
*/