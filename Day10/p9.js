//for in loop only for the object;
//If u want to iterate overall the elements inside the object u need to use for...in..loop.
let detailsarr={
  name: "Shivam kumar jha",
  age: 25,
  phoneNumber: 1234567,
  location: "Madhubani",
  hobbies: "cricket"
}
for(let x in detailsarr){//x is an variable we can choose anything.
//Inside the for in loop we only use bracket notation and inside bracket notation we will not use string
  console.log(x)//It will give the key in the object
  console.log(detailsarr[x]);//It will give the value of key in the oject
  
}