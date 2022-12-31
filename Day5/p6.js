//Syntax of ternary operator
//condition? true statement :false statement
let a="shivam"
let b="satyam"
let c="satyam"

if((a===b)&&(b===c)&&(c===a)){
  console.log("all same")
}
else if((a===b)||(b===c)||(c===a)){
  console.log("two are SAME")
}
else{console.log("all are diffrent")}