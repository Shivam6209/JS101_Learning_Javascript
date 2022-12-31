let str="Shivam";
let new_str=""
for(let i=0;i<str.length;i++){
  if(str[i]=="S"){
    new_str+="p"
  }
  else{
    new_str+=str[i]
  }
}
console.log(new_str)