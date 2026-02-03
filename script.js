<<<<<<< HEAD
document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // get user input
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;
  const result = document.getElementById("result");

  if (birthdate === "" || gender === "") {
    result.textContent = "Please fill in all fields.";
    return;
  }

  // split the date input (YYYY-MM-DD)
  const parts = birthdate.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  // calculate century and year
  const CC = Math.floor(year / 100);
  const YY = year % 100;

  // apply the formula
  const d =
    ( (4 * CC - 2 * CC - 1) +
      (5 * YY) +
      Math.floor((26 * (month + 1)) / 10) +
      day
    ) % 7;

  // Akan names
  const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena",
    "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  const femaleNames = [
    "Akosua", "Adwoa", "Abenaa",
    "Akua", "Yaa", "Afua", "Ama"
  ];

  let akanName;

  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  result.textContent = "Your Akan name is " + akanName + ".";
});
=======
// Akan names for each day of the week
const maleNames = [
  "Kwasi",   // Sunday
  "Kwadwo",  // Monday
  "Kwabena", // Tuesday
  "Kwaku",   // Wednesday
  "Yaw",     // Thursday
  "Kofi",    // Friday
  "Kwame"    // Saturday
];

const femaleNames = [
  "Akosua",  // Sunday
  "Adwoa",   // Monday
  "Abenaa",  // Tuesday
  "Akua",    // Wednesday
  "Yaa",     // Thursday
  "Afua",    // Friday
  "Ama"      // Saturday
];

// Listen to form submission
document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get user input
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  // Validate input
  if (!dob || !gender) {
    alert("Please fill in all fields");
    return;
  }

  // Get day of the week
  const date = new Date(dob);
  const day = date.getDay(); // 0–6

  // Pick Akan name
  let akanName;
  if (gender.value === "male") {
    akanName = maleNames[day];
  } else {
    akanName = femaleNames[day];
  }

  // Display result
  document.querySelector("#akanNameDisplay").innerText = akanName;
});

>>>>>>> 9a43266d039ce9f2be935da377338b3ac08fe443
