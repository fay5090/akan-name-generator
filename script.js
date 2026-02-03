document.getElementById("akanForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;
  const result = document.getElementById("result");

  if (!birthdate || !gender) {
    result.textContent = "Please fill in all fields.";
    return;
  }

  const date = new Date(birthdate);
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

  result.textContent = `Your Akan name is ${akanName}`;
});

