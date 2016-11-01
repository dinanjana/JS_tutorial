/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}
console.log('new loop');

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(outside(3));
result = fn_inside(5); // returns 8

result1 = outside(3)(5);

function outside(x) {
  return function inside(y) {
    return x + y;
  }
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(outside(3));
result = fn_inside(5); // returns 8
console.log(outside(3)(5));

function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = "12";
  temp += ((minute < 10) ? ":0" : ":") + minute;
  temp += ((second < 10) ? ":0" : ":") + second;
  temp += (hour >= 12) ? " P.M." : " A.M.";
  console.log(temp);
  return temp;
}
//setInterval(()=>JSClock(),1000);

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and\nnot ${2 * a + b}.`);//Template literals

console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");

//Internationalization example

var msPerDay = 24 * 60 * 60 * 1000;
 
// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

var options = { year: "2-digit", month: "2-digit", day: "2-digit",
                hour: "2-digit", minute: "2-digit", timeZoneName: "short" };
var americanDateTime = new Intl.DateTimeFormat("en-US", options).format;
 
console.log(americanDateTime(july172014));

// Sorting using internationalization API example

var names = ["Hochberg", "Hönigswald", "Holzman"];
 
var germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");
 
// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// logs "Hochberg, Hönigswald, Holzman"

var arr = [42];      // Creates an array with only one element:
                     // the number 42.

for (prop in arr) {
  console.log(prop);
}


var arr = Array(42); // Creates an array with no elements
                     // and arr.length set to 42; this is
                     // equivalent to:
for (prop in arr) {
  console.log(prop);
}
var arr = [];

arr.length = 42;

var array = ['first', 'second', , 'fourth'];

// returns ['first', 'second', 'fourth'];
array.forEach(function(element) {
  console.log(element);
})

if(array[2] === undefined) { console.log('array[2] is undefined'); } // true

var array = ['first', 'second', undefined, 'fourth'];

// returns ['first', 'second', undefined, 'fourth'];
array.forEach(function(element) {
  console.log(element);
});
console.log('-----multi dimensional arrays-----');
var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j + "]";
  }
}

a.forEach((elm)=>{
  console.log('-------Row-------');
  elm.forEach((elm1)=>console.log(elm1));
});
console.log('------Keyed collections examples---------');
var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
console.log('---');
for (var elm in sayings) {
  console.log(elm);
}

console.log('-----A clever code-------');
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function descendingOrder(n){
  var arr=(n.toString()).split('');
  return parseInt(arr.sort((a,b)=>{
                    a=parseInt(a);
                    b=parseInt(b);
                    if(a.length>b.length){
                      return 1;
                    }else if(a.length<b.length){
                      return -1;
                    }
                    else{
                      return 0;
                    }
                    }).reverse().toString());
}