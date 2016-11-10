/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var B = () =>{
  console.log(this.toString());
}
var c = {
  d:function D(){
    console.log(this.toString());
  },
  e:()=>{
   console.log(this.toString() + " " + this.constructor);
  },
}

function A(){
  console.log(this.toString());
  B();
  c.d();
  c.e();
}
c.e();
c.d();

A();




let E = function(){
  let a;
  this.setA = function (val = 0){
    a=val;
  };
  
  this.getA = function (){
    return a;
  }
};

var a = new E();
a.setA(5);
console.log(a.getA());
