//Updating an key value in object;
let details={
  name: "Shivam Kumar Jha",
  age: 20,
  address: "Madhubani",
  phoneNumber: 123456,
  fatherName : "Prem Chandra Jha",
  motherName: "Madhavi Devi"
}
details.phoneNumber=98765432;//Dot Notation
details["address"]="Bahera";//Bracket Notation
console.log(details)
//if the key and value was present we can update already present key and value;
//If there is no key and value present in the object we can add new key and value into object;
//Keys are unique.
