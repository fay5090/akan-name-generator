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
      (45 * YY) +
      Math.floor((1026 * (month + 1)) / 10) +
      day
    ) % 7;

  // Akan names
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // get Akan name
  let akanName;
  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  // display result
  result.textContent = `Your Akan name is ${akanName}`;
});
