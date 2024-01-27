//Javascript execution context refers to the way the javascript code is executed

//Every time a JS code is executed a Global Execution context is made and stored in a variable this 

//the value of 'this' variable in browser is window object

//Another execution context is Function/Functional execution context. Third type is Eval Execution Context

/*The JS code is run in two phases:
   Memory Creation Phase: In this all the variable and other elements are assigned a space in the memory and the value stored in the variables is undefined, in function the value stored is function definition. This is also called First cycle

   Execution Phase: The code is executed in this phase, now the real values are assigned to the variables.
   
   
   In case where function is called, it creates a new variable environment and an execution thread everytime that function is called. For each new execution context the memory creation phase and execution phase will be done. When both the phase is succefully executed and the value is returned from the function, two things will happen:

   First the value will be returned to the global execution context
   Second the new execution phase created to execute the function will be automatically deleted
*/

/*
  While executing the code a call stack is created with Global Execution Context being the permanent part of the call stack

  Everytime a function is called that function comes inside the call stack, executed and removed from the callstack

  In case of nested functions, the removal of functions after execution follows LIFO Method(Last In First Out). As the name suggest whichever function is executed at last is removed from the call stack first and so on
*/