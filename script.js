// Akan names for each day of the week
const maleNames = [
  "Kwasi", "Kwadwo", "Kwabena",
  "Kwaku", "Yaw", "Kofi", "Kwame"
];

const femaleNames=[
  "Akosua", "Adwoa", "Abenaa",
  "Akua", "Yaa", "Afua", "Ama"
];


//listen-to-form-submittion 
document.getElementById("akanForm").addEventListener("submit", function (e){
e.preventDefault();

  // Get user input
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked'); 

  // Validate input
  if (!dob || !gender) {
    alert("Please fill in all fields");
    return;
  }
  function calculateDayOfWeek(year, month, day) {
    // Split the year into century and year parts
    let CC = Math.floor(year / 100);   // e.g., 2026 -> 20
    let YY = year % 100;               // e.g., 2026 -> 26

    // Apply the formula
    let D = ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (month + 1)) + day) % 7;

    // Make sure D is non-negative (mod in JS can be negative)
    if (D < 0) {
        D += 7;
    }

    return D; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
}

// Example usage
let dayIndex = calculateDayOfWeek(2026, 2, 3); // February 3, 2026
console.log(dayIndex); // prints number 0–6


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
  //Displaying results
  document.querySelector("#akanNameDisplay").innerText='${akanName}'
})
