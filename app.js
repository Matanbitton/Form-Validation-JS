const form = document.querySelector(".form");
const emailInput = document.getElementById("email");
const zipCodeInput = document.getElementById("zip-code");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const passwordValidateInput = document.getElementById("password2");

const emailPattern = "/S+@S+.S+/";
const countryPattern = "[a-zA-Z'-'s]*";
const zipCodePattern = "[0-9]{1,5}";
const passwordPattern =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$";

zipCodeInput.setAttribute("minlength", "4");
zipCodeInput.setAttribute("pattern", zipCodePattern);
countryInput.setAttribute("pattern", countryPattern);
passwordInput.setAttribute("pattern", passwordPattern);
passwordInput.setAttribute("minlength", "8");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

emailInput.addEventListener("input", (e) => {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity(
      "Please enter a valid email address for example: myname@gmail.com"
    );
    emailInput.reportValidity();
  } else {
    emailInput.setCustomValidity("");
    emailInput.checkValidity();
  }
});

zipCodeInput.addEventListener("input", (e) => {
  if (zipCodeInput.validity.tooShort) {
    zipCodeInput.setCustomValidity("Zip-code should be logner than 4 numbers");
    zipCodeInput.reportValidity();
  } else {
    zipCodeInput.setCustomValidity("");
    zipCodeInput.checkValidity();
  }
});
zipCodeInput.addEventListener("input", () => {
  if (zipCodeInput.validity.patternMismatch) {
    zipCodeInput.setCustomValidity("Zip-code can only contain numbers");
    zipCodeInput.reportValidity();
  } else {
    zipCodeInput.setCustomValidity("");
    zipCodeInput.checkValidity();
  }
});

countryInput.addEventListener("input", () => {
  if (countryInput.validity.patternMismatch) {
    countryInput.setCustomValidity(
      "Country name can contain only English characters"
    );
    countryInput.reportValidity();
  } else {
    countryInput.setCustomValidity("");
    countryInput.checkValidity();
  }
});

passwordInput.addEventListener("input", () => {
  passwordValidateInput.setAttribute("pattern", passwordInput.value);
  if (passwordInput.validity.patternMismatch) {
    passwordInput.setCustomValidity(
      "Password must be 8 characters long. Contain 1 Uppercase letter, 1 Lowercase letter, a number, and a symbol."
    );
    passwordInput.reportValidity();
  } else {
    passwordInput.setCustomValidity("");
    passwordInput.checkValidity();
  }
});

passwordValidateInput.addEventListener("input", () => {
  if (passwordValidateInput.validity.patternMismatch) {
    passwordValidateInput.setCustomValidity("Please make sure passwords match");
    passwordValidateInput.reportValidity();
  } else {
    passwordValidateInput.setCustomValidity("");
    passwordValidateInput.checkValidity();
  }
});

const validateEmail = (email) => {
  return email.match(emailPattern);
};
