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

