function checkMark() {
let name = document.forms["gradeForm"]["name"].value;
let mark = document.forms["gradeForm"]["mark"].value;

if (name.trim() === "") {
  alert("Name must be filled out.");
  return false;
}

if (mark === ""){
	alert("Mark field cannot be empty.");
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
	resultColor = "green";
  } else if (mark >= 65) {
    grade = "B";
	resultColor = "green";
  } else if (mark >= 50) {
    grade = "C";
	resultColor = "orange";
  } else {
    grade = "F";
	resultColor = "red";
  }
  document.getElementById("result").innerHTML =
    name + " got grade " + grade;
  document.getElementById("result").style.color = resultColor;

	checkedTimeEl = document.getElementById("checkedTime");
	checkedTimeEl.textContent = "Checked on: " + new Date().toString();
	checkedTimeEl.style.color = resultColor;
  return false;
}

//Generate random whole number from 0 to 100
function generateRandomMark(){
	var randomMark = Math.floor(Math.random()*101);
	document.getElementById("mark").value = randomMark;
}



function showTable() {
  const grades = ["A", "B", "C", "F"];
  const ranges = ["80-100", "65-79", "50-64", "0-49"];
  var tableHTML = "<table><tr><th>Grade</th><th>Mark range</th></tr>";

  for (var i = 0; i < grades.length; i++) {
    tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
  }

  tableHTML += "</table>";
  document.getElementById("tableContainer").innerHTML = tableHTML;
}