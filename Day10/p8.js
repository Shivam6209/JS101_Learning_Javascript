let detailsarr={
  name: "Shivam kumar jha",
  age: 25,
  phoneNumber: 1234567,
  location: {
    city: "madhubani",
    state: "bihar",
    pincode: 847408,
    landMark: "Near madhepur"
  },
  hobbies: ["anime","pcgame","cricket","coading"]
}
console.log(detailsarr.location);

console.log(detailsarr["location"]);

console.log(detailsarr.location.city);

console.log(detailsarr["location"]["city"]);
