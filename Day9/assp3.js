//Print Box
let res="";
let res2="*";
let horizontal=5;
let vertical=7;
for(let i=1;i<=horizontal;i++){
  res+="*"
  if(i==horizontal-1){
     res2+="*";
   }else{
     res2+=" ";
   }
}

console.log(res);
  
for(let j=1;j<=vertical-2;j++){
  console.log(res2);
 
}
console.log(res);

// let upDown="";
// let middle=[]

// let horizontal=10;
// let vertical=10;

// for(let i=0;i<horizontal;++i){
//   upDown+="*";
//   middle.push(" ");
// }

// middle[0]="*";
// middle[middle.length-1]="*";
// middle=middle.join("");

// console.log(upDown);
// for(let i=0;i<vertical-2;++i){
//   console.log(middle);
// }
// console.log(upDown);


