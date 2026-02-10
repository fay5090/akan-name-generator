document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;
  const result = document.getElementById("result");

  result.classList.remove("show");

  if (!day || !month || !year || !gender) {
    result.textContent = "Please fill in all fields 💗";
    result.classList.add("show");
    return;
  }

  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    result.textContent = "Please enter a valid date 🌸";
    result.classList.add("show");
    return;
  }

  const dayOfWeek = date.getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  const akanName =
    gender === "male"
      ? maleNames[dayOfWeek]
      : femaleNames[dayOfWeek];

  result.textContent = 
    `✨ Your Akan name is ${akanName} because you were born on a ${days[dayOfWeek]} ✨`;

  result.classList.add("show");
});

