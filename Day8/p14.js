//Check Prime Or Not
let count=0;
let N=5
for(let i=0;i<=N;i++){
  if(N%i==0){
    count++
  }
}
if(count>2){
  console.log("No")
}
else{
  console.log("Yes")
}