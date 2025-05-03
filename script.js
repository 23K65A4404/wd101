function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function handleSubmit(event) {
  event.preventDefault();
  const dob = document.getElementById("dob").value;
  const errorMsg = document.getElementById("errorMsg");
  const age = calculateAge(dob);

  if (age < 18 || age > 55) {
    errorMsg.textContent = "Age must be between 18 and 55.";
    return false;
  }

  // ✅ Open your resume on successful submission
  window.open("C:\Users\seshu\Downloads\SESHU_RESUME(1.pdf", "_blank"); // ← Replace this with your actual link      "C:\Users\seshu\Downloads\SESHU_RESUME(1.pdf"
  return true;
}
