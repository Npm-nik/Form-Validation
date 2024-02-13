const username = document.querySelector("#username");
const password = document.querySelector("#password");
const userError = document.querySelector("#userError");
const passError = document.querySelector("#passError");
const form = document.querySelector("form");
let flag = 1;

const validateForm = () => {
  if (username.value == "") {
    userError.innerText = "*Invalid username";
    flag = 0;
  } else if (username.value.length < 4) {
    userError.innerText = "*Required minimum 4 characters";
    flag = 0;
  } else {
    userError.innerText = "";
    passError.innerText = "";
    flag = 1;
  }

  if (password.value == "") {
    passError.innerText = "Enter password";
    flag = 0;
  } else {
    console.log(username.value);
  }

  if (flag == 1) {
    return true;
  } else {
    return false;
  }

  return false;
};
