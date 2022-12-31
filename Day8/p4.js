//Count word ;
let str="A quick brown fox jumps over the lazy dog"
let count=0;
for(let i=0;i<str.length;i++){
  if(str[i]==" "){
    count++
  }
}
console.log("Words",count+1)//(+1) because word is one more than space;