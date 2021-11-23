// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

var allCategoriesUrl =
  "https://davids-restaurant.herokuapp.com/categories.json";
  
function chooseRandomCategory (categories) {
  // Choose a random index into the array (from 0 inclusively until array length (exclusively))
  var randomArrayIndex = Math.floor(Math.random() * categories.length);

  // return category object with that randomArrayIndex
  return categories[randomArrayIndex];
}

var myArray = ["L", "A", "B", "SP", "C", "F", "V", "DK", "VG","CU", "NL", "NF", "PF", "FR", "CM","FY","SO","DS", "D", "SR"]; 



var randChoice = myArray[(Math.random() * myArray.length) | 0]
console.log("randChoice : " + randChoice)
console.log("function chooseRandomeCategory :" , chooseRandomCategory(myArray))




function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }
}