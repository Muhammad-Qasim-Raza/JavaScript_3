// Declare an empty array using JS literal notation to store student names in the future
var studentNamesLiteral = [];

// Declare an empty array using JS object notation to store student names in the future
var studentNamesObject = new Array();

// Declare and initialize a strings array
var stringsArray = ["apple", "banana", "cherry"];

// Declare and initialize a numbers array
var numbersArray = [1, 2, 3, 4, 5];

// Declare and initialize a boolean array
var booleanArray = [true, false, true, false];

// Declare and initialize a mixed array
var mixedArray = ["John", 25, true, "Alice", 30, false];







document.write("<br>");







// Declare and initialize an array with education qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display the qualifications in the browser
document.write("Qualifications:<br>");
document.write("1) " + qualifications[0] + "<br>");
document.write("2) " + qualifications[1] + "<br>");
document.write("3) " + qualifications[2] + "<br>");
document.write("4) " + qualifications[3] + "<br>");
document.write("5) " + qualifications[4] + "<br>");
document.write("6) " + qualifications[5] + "<br>");
document.write("7) " + qualifications[6] + "<br>");
document.write("8) " + qualifications[7] + "<br>");







document.write("<br>");







// Declare and initialize arrays for student names and scores
var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];

// Assuming total marks are 500 for each student
var totalMarks = 500;

// Display scores and percentages for each student
document.write("Score of " + studentNames[0] + " is " + scores[0] + ". Percentage: " + ((scores[0] / totalMarks) * 100).toFixed(2) + "%<br>");
document.write("Score of " + studentNames[1] + " is " + scores[1] + ". Percentage: " + ((scores[1] / totalMarks) * 100).toFixed(2) + "%<br>");
document.write("Score of " + studentNames[2] + " is " + scores[2] + ". Percentage: " + ((scores[2] / totalMarks) * 100).toFixed(2) + "%<br>");







document.write("<br>");







// Initialize an array with color names
let colorArray = ["Red", "Green", "Blue"];

// Display the array elements in the browser
document.write("Original Array: " + colorArray.join(", ") + "<br>");

// Ask the user what color to add to the beginning and add it
let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colorArray.unshift(colorToAddAtBeginning);

// Display the updated array in the browser
document.write("Array after adding color to the beginning: " + colorArray.join(", ") + "<br>");

// Ask the user what color to add to the end and add it
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colorArray.push(colorToAddAtEnd);

// Display the updated array in the browser
document.write("Array after adding color to the end: " + colorArray.join(", ") + "<br>");

// Add two more colors to the beginning of the array
colorArray.unshift("Purple", "Orange");

// Display the updated array in the browser
document.write("Array after adding two colors to the beginning: " + colorArray.join(", ") + "<br>");

// Delete the first color in the array
colorArray.shift();

// Display the updated array in the browser
document.write("Array after deleting the first color: " + colorArray.join(", ") + "<br>");

// Delete the last color in the array
colorArray.pop();

// Display the updated array in the browser
document.write("Array after deleting the last color: " + colorArray.join(", ") + "<br>");

// Ask the user at which index to add a color and the color name
let indexToAdd = prompt("Enter the index to add a color:");
let colorToAdd = prompt("Enter the color to add:");
colorArray.splice(indexToAdd, 0, colorToAdd);

// Display the updated array in the browser
document.write("Array after adding color at a user-defined position: " + colorArray.join(", ") + "<br>");

// Ask the user at which index to delete color(s) and how many colors to delete
let indexToDelete = prompt("Enter the index to delete color(s):");
let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
colorArray.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array in the browser
document.write("Array after deleting color(s) from a user-defined position: " + colorArray.join(", ") + "<br>");







document.write("<br>");







// Array to store student scores
var studentScores = [320, 230, 480, 120];

// Display the original array
document.write("Scores of Students: " + studentScores.join(", ") + "<br>");

// Sort the array in ascending order using the sort method
var orderedScores = studentScores.slice().sort(function (a, b) {
    return a - b;
});

// Display the ordered array
document.write("Ordered Scores of Students: " + orderedScores.join(", ") + "<br>");







document.write("<br>");







// Initialize an array with city names
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Display the original cities array
document.write("Cities list: " + cities.join(", ") + "<br>");

// Copy 3 array elements to selectedCities array
var selectedCities = cities.slice(2, 5);

// Display the selectedCities array
document.write("Selected cities list: " + selectedCities.join(", ") + "<br>");







document.write("<br>");







// Given array
var arr = ["This", "is", "my", "cat"];

// Display the original array
document.write("Array: " + arr.join(",") + "<br>");

// Use the join method to create a single string
var resultString = arr.join(" ");

// Display the resulting string
document.write("String: " + resultString + "<br>");






document.write("<br>");






// Create a new array to store devices
var devices = [];

// Add values to the array (FIFO order)
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

// Display the devices in a single line
document.write("Devices: " + devices.join(", ") + "<br><br>");

// Display and remove values in FIFO order
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");







document.write("<br>");







// Create a new array to store devices
var devices = [];

// Add values to the array
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

// Display the devices in a single line
document.write("Devices: " + devices.join(", ") + "<br><br>");

// Display and remove values in LIFO order
document.write("Out: " + devices.pop() + "<br>");
document.write("Out: " + devices.pop() + "<br>");
document.write("Out: " + devices.pop() + "<br>");
document.write("Out: " + devices.pop() + "<br>");







document.write("<br>");







// Array to store phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Create the dropdown HTML 
var dropdownHTML =
  "<select>" +
    "<option>" + manufacturers[0] + "</option>" +
    "<option>" + manufacturers[1] + "</option>" +
    "<option>" + manufacturers[2] + "</option>" +
    "<option>" + manufacturers[3] + "</option>" +
    "<option>" + manufacturers[4] + "</option>" +
    "<option>" + manufacturers[5] + "</option>" +
  "</select>";

// Display the dropdown in the browser
document.write(dropdownHTML);







document.write("<br> <br>");







// Array to store phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Create the dropdown HTML by backtick
var dropdownHTML =
  `<select>
    <option>${manufacturers[0]}</option>
    <option>${manufacturers[1]}</option>
    <option>${manufacturers[2]}</option>
    <option>${manufacturers[3]}</option>
    <option>${manufacturers[4]}</option>
    <option>${manufacturers[5]}</option>
  </select>`;

// Display the dropdown in the browser
document.write(dropdownHTML);