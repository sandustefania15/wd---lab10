function validateForm() {
  let firstName = document.getElementById("first-name").value.trim();
  let lastName = document.getElementById("last-name").value.trim();
  let email = document.getElementById("email").value.trim();
  let address = document.getElementById("address").value.trim();
  let cv = document.getElementById("cv").files[0];

  let correct = true;

  if (firstName === "" || lastName === "" || email === "" || address === "") {
    alert("Please fill in all required fields.");
    correct = false;
  }

  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    correct = false;
  }

  if (cv) {
    let allowedExtensions = /(\.pdf)$/i;
    if (!allowedExtensions.test(cv.name)) {
      alert("Only PDF files are allowed for the CV.");
      correct = false;
    }
  }

  if (correct) {
    alert("Success! Form submitted.");
    return true;
  }

  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("country");

  const countries = [
    { code: "ROU", name: "Romania" },
    { code: "ES", name: "Spain" },
    { code: "IT", name: "Italy" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "GB", name: "United Kingdom" },
    { code: "US", name: "United States" },
  ];

  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });
});
