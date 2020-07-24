function theForm() {
  let arrows = document.querySelectorAll(".fa-arrow-right");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      input = arrow.previousElementSibling;
      parent = arrow.parentElement;
      nextField = parent.nextElementSibling;

      // Cheking form validations, moving forward and error animation
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextField);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextField);
      } else if (input.type === "password" && validatePassword(input)) {
        nextSlide(parent, nextField);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }

      // Getting rid of Animation for Loop
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

// Username Validation
function validateUser(user) {
  if (user.value.length < 6) {
    error("rgb(222, 110, 98)", "whitesmoke");
  } else {
    error("rgb(186, 240, 125", "rgb(43, 87, 63)");
    return 1;
  }
}

// Email Validation
function validateEmail(email) {
  let validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validate.test(email.value)) {
    error("rgb(186, 240, 125)", "rgb(43, 87, 63)");
    return 1;
  } else {
    error("rgb(222, 110, 98)", "whitesmoke");
  }
}

// Password Validation
function validatePassword(pas) {
  if (pas.value.length < 8) {
    error("rgb(222, 110, 98)", "whitesmoke");
  } else {
    error("rgb(245, 213, 88)", "rgb(245, 213, 88)");
    return 1;
  }
}

// For the background transition
function error(color, col) {
  document.body.style.backgroundColor = color;
  let head = document.querySelector("#register");
  head.style.color = col;
}

// For moving to the next input
function nextSlide(parent, nextField) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextField.classList.add("active");
}

theForm();
