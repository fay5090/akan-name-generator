// Akan names for each day of the week
const maleNames = [
  "Kwasi", "Kwadwo", "Kwabena",
  "Kwaku", "Yaw", "Kofi", "Kwame"
];

const femaleNames = [
  "Akosua", "Adwoa", "Abenaa",
  "Akua", "Yaa", "Afua", "Ama"
];


/listen-to-form-submittion 
document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get user input
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked');checked');

  // Validate input
  if (!dob || !gender) {
    alert("Please fill in all fields");
    return;
  }
  // Calculate day of birth
  const date = new Date(dob);
  const day = date.getDay();
 // Pick Akan name based on gender
  let akanName;
  if (gender.value === "male") {
    akanName = maleNames[day];
  } else {
    akanName = femaleNames[day];
  }
