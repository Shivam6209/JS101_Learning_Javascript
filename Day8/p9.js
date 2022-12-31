//if u find %==>h;
//if u find .==>remove;
//if u find $==>n;
let str="go%.a$.";
let res=""
for(let i=0;i<str.length;i++){
  if(str[i]=="%"){
    res+="h"
  }
  else if(str[i]=="."){
    continue;
  }
  else if(str[i]=="$"){
    res+="n"
  }
  else{
    res+=str[i]
  }
 }
console.log(res)