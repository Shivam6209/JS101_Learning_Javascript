// let arr=[-1,-2,3,-3,-4];
// let new_arr=[];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]<0){
//    new_arr.push(0)
//   }
//     else{
//     new_arr.push(arr[i])
//     }
//   }
// console.log(new_arr)
//or
// let arr1=[-1,-2,3,-3,-4,-6];
// for(let i=0;i<arr1.length;i++){
//   if(arr1[i]<0){
//   arr1[i]=0;
    
//   }}
// console.log(arr1);
let arr=["a","k","c","k","f"];
for(let i=0;i<arr.length;i++){
  if(arr[i]!=="k"){
    continue;
  }
  else{console.log("Yes")
      break;}
}