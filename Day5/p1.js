//1.Logical AND(&&)
//2.logical OR(||)
//find out the gender can get mairred or not
//male,21
//female,18
let gender ="female";
let age=17;

if((gender=="male")&&(age>=21)||(gender=="female")&&(age>=18)){
  console.log(gender,"can get mairred");
}
else{
  console.log(gender,"can't get mairred");
}