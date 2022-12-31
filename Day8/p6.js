//count thw words whose character start with "g";
let arr=["goku","gopal","gonu","goman","shivam","satyam","goma"];
let count=0;
for(let i=0;i<arr.length;i++){
  if(arr[i][0]=="g"){
    count++
  }
}
console.log(count)