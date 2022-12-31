//don't go to room two
console.log("don't go to room two")
for(let floor=1;floor<=4;floor++){
   for(let room=1;room<=4;room++){
     if(room==2){
       continue;
     }
     console.log(floor+"-"+room)
   }
}


//don't go on floor two
console.log("don't go on floor two")
for(let floor=1;floor<=4;floor++){
   for(let room=1;room<=4;room++){
     if(floor==2){
       break;//we can use continue but break will end inner loop in first time.
     }
     console.log(floor+"-"+room)
   }
}