let horizontal=30;
let vertical=25;
for(let i=1; i<=horizontal;i++){
  let a= "";
  for(let j=1; j<=vertical;j++){
    if(i==1 ||i==horizontal){
      a+="*";
    }
    else if(j==1 || j==vertical){
      a+="*";
    }
    else{
      a+=" ";
    }
  }
  console.log(a);
}