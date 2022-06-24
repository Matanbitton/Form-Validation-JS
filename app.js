const form = document.querySelector(".form");
const emailInput = document.getElementById("email");
const zipCodeInput = document.getElementById("zip-code");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const passwordValidateInput = document.getElementById("password2");

const emailPattern = "/S+@S+.S+/";

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

const validateEmail = (email) => {
  return email.match(emailPattern);
};

function setErrorMessagesOnInputs(formInput, errorMessage) {
  formInput.addEventListener("input", () => {
    formInput.setCustomValidity("");
    formInput.checkValidity();
  });

  formInput.addEventListener("invalid", () => {
    if (formInput.value === "") {
      formInput.setCustomValidity(errorMessage);
    }
  });
}
