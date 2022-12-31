let str="I am a iron";
let count=0;
let sum=0;
for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    count++
    count=count*count
    sum+=count
  }
}
console.log(sum)