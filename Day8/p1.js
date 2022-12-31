let arr=[1,2,3,4,5,6,7,8];
let evensum=0
let oddsum=0
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    evensum+=arr[i]
  }
  else {
    oddsum+=arr[i]
  }
}
if(evensum>oddsum){
  console.log("Even")
}
else{
  console.log("odd")
}