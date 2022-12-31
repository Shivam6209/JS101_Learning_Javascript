//Given an array find unique item in an array
let arr=["luffy","gohan","gopi","gonu","somu","luffy","gohan","gopi","gonu","somu","luffy","shyam","babubhaiya","gohan","gopi","gonu","somu","luffy","gohan","gopi","gonu","somu",];
let obj={};
for(let i=0;i<arr.length;i++){
  obj[arr[i]]=1
}
console.log(obj)