// delete a key and value in object,
let details={
  name: "Shivam Kumar Jha",
  age: 20,
  address: "Madhubani",
  phoneNumber: 123456,
  fatherName : "Prem Chandra Jha",
  motherName: "Madhavi Devi"
}


delete details["phoneNumber"];//Bracket notation
delete details.age;//Dot notation
console.log(details);