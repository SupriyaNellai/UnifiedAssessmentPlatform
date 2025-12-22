const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    mobileMenu.classList.toggle("hidden");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.add("hidden");
  }
});

const signupPopup = document.getElementById("signup-popup");
const loginPopup = document.getElementById("login-popup");
const forgotPopup = document.getElementById("forgot-popup");

document.getElementById("open-signup").addEventListener("click", () => {
  signupPopup.classList.remove("hidden");
  mobileMenu.classList.add("hidden");
});

document.getElementById("open-login-mobile").addEventListener("click", () => {
  loginPopup.classList.remove("hidden");
  mobileMenu.classList.add("hidden");
});

document.getElementById("open-signup-mobile").addEventListener("click", () => {
  signupPopup.classList.remove("hidden");
  mobileMenu.classList.add("hidden");
});

document
  .querySelector("section:nth-of-type(1) .flex.items-center button:first-child")
  .addEventListener("click", () => {
    signupPopup.classList.remove("hidden");
  });

document
  .querySelector("section:nth-of-type(1) .flex.items-center button:last-child")
  .addEventListener("click", () => {
    loginPopup.classList.remove("hidden");
  });

document.getElementById("open-login").addEventListener("click", () => {
  loginPopup.classList.remove("hidden");
  mobileMenu.classList.add("hidden");
});

document.getElementById("close-signup").addEventListener("click", () => {
  signupPopup.classList.add("hidden");
});

document.getElementById("close-login").addEventListener("click", () => {
  loginPopup.classList.add("hidden");
});

document.getElementById("close-forgot").addEventListener("click", () => {
  forgotPopup.classList.add("hidden");
});

signupPopup.addEventListener("click", () =>
  signupPopup.classList.add("hidden")
);
loginPopup.addEventListener("click", () => loginPopup.classList.add("hidden"));
forgotPopup.addEventListener("click", () =>
  forgotPopup.classList.add("hidden")
);

document
  .querySelectorAll(
    "#signup-popup > div, #login-popup > div, #forgot-popup > div"
  )
  .forEach((box) => {
    box.addEventListener("click", (e) => e.stopPropagation());
  });

document
  .getElementById("open-signup-from-login")
  .addEventListener("click", () => {
    loginPopup.classList.add("hidden");
    signupPopup.classList.remove("hidden");
  });

document
  .querySelector("#signup-popup button:last-child")
  .addEventListener("click", () => {
    signupPopup.classList.add("hidden");
    loginPopup.classList.remove("hidden");
  });

document.getElementById("open-forgot").addEventListener("click", () => {
  loginPopup.classList.add("hidden");
  forgotPopup.classList.remove("hidden");
});

document.getElementById("back-to-login").addEventListener("click", () => {
  forgotPopup.classList.add("hidden");
  loginPopup.classList.remove("hidden");
});

function showError(id, msg) {
  let el = document.getElementById(id);
  el.textContent = msg;
  el.classList.remove("hidden");
}

document.getElementById("signup-btn").addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm-password");
  let role = document.getElementById("role");
  let inst = document.getElementById("inst-code");

  document
    .querySelectorAll("p[id$='error']")
    .forEach((p) => p.classList.add("hidden"));

  let valid = true;

  if (name.value.trim() === "") {
    showError("name-error", "Name is required");
    valid = false;
  }
  if (email.value.trim() === "") {
    showError("email-error", "Email is required");
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    showError("email-error", "Enter a valid email");
    valid = false;
  }
  if (password.value.trim() === "") {
    showError("password-error", "Password is required");
    valid = false;
  }
  if (confirmPassword.value.trim() === "") {
    showError("confirm-error", "Confirm your password");
    valid = false;
  } else if (confirmPassword.value !== password.value) {
    showError("confirm-error", "Passwords do not match");
    valid = false;
  }
  if (role.value === "") {
    showError("role-error", "Please select your role");
    valid = false;
  }
  if (inst.value.trim() === "") {
    showError("inst-error", "Institution code is required");
    valid = false;
  }

  if (valid) alert("Signed up Successfully");
});

document.getElementById("login-submit").addEventListener("click", function (e) {
  e.preventDefault();

  let email = document.getElementById("login-email");
  let password = document.getElementById("login-password");

  document.getElementById("login-email-error").classList.add("hidden");
  document.getElementById("login-password-error").classList.add("hidden");

  let valid = true;

  if (email.value.trim() === "") {
    showError("login-email-error", "Email is required");
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    showError("login-email-error", "Enter a valid email");
    valid = false;
  }
  if (password.value.trim() === "") {
    showError("login-password-error", "Password is required");
    valid = false;
  }

  if (valid) alert("Loggedin Successfully");
});

document
  .querySelector("#forgot-popup button:nth-of-type(1)")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let email = document.getElementById("forgot-email");
    document.getElementById("forgot-email-error").classList.add("hidden");

    if (email.value.trim() === "") {
      showError("forgot-email-error", "Email is required");
      return;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      showError("forgot-email-error", "Enter a valid email");
      return;
    }

    alert("Verification code sent!");
  });
