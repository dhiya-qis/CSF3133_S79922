function checkMark() {
let name = document.forms["gradeForm"]["name"].value;
let mark = document.forms["gradeForm"]["mark"].value;

if (name.trim() === "") {
  alert("Name must be filled out.");
  return false;
}
if (isNaN(mark)) {
  alert("Please enter a valid numeric value.");
return false;
}
mark = parseInt(mark);
if (mark < 0 || mark > 100) {
  alert("Mark must be between 0 and 100.");
  return false;
}
let grade;
  if (mark >= 80) {
    grade = "A";
  } else if (mark >= 65) {
    grade = "B";
  } else if (mark >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }
  document.getElementById("result").innerHTML =
    name + " got grade " + grade;
  document.getElementById("result").style.color = "green";
  return false;
}

function showTable() {
  let grades = ["A", "B", "C", "F"];
  let ranges = ["80-100", "65-79", "50-64", "0-49"];
  let tableHTML = "<table>";
  for (let i = 0; i < grades.length; i++) {
    tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] +
    "</td></tr>";
}
  tableHTML += "</table>";
  document.getElementById("tableContainer").innerHTML = tableHTML;
}

// Error 1 (grade.html, Line 9): missing return that make the form doesn't erase
// Error 2 (grade.html, Line 17): should be showTable() and not showtable()
// Error 3 (grade.html, Line 19): name doesn't match with grade.js
// Error 4 (grade.js, Line 5): change name = "" to name.trim() ===""
// Error 6 (grade.js, Line 9): isNan should be isNaN
// Error 7 (grade.js, Line 14): should use || or else the if statement stay false and the alert wont happen
// Error 8 (grade.js, Line 38): should start i with 0 and not with 1 in For loops
// Error 9 (grade.js, Line 43): .innerHtml cannot be lowercase and should be .innerHTML
// Error 10 (grade.js, Line 28-31): getElementID is capatilized, should be style.color and return false
