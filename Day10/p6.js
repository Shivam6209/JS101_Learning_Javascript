let newDetails={
  name: "Shivam kumar jha",
  age: 25,
  phoneNumber: 1234567,
  location: "Madhubani",
  drivingLicences: true,
  lunch: true,
}
console.log(newDetails);


newDetails.fatherName="Prem chnadra jha",
newDetails.sisterName="null";
newDetails["bestFriend"]="Null2"


console.log(newDetails);

newDetails.phoneNumber="34567890";
newDetails.age="21";
newDetails["drivingLicences"]=false;
newDetails["lunch"]=false;

console.log(newDetails); 

delete newDetails.drivingLicences;
delete newDetails["lunch"]

console.log(newDetails)
