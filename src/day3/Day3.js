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