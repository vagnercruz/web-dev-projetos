const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const loginForm = document.getElementById("loginForm");

openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const errors = document.querySelectorAll(".error");
  
  let valid = true;

  errors.forEach(err => err.textContent = "");

  if (email.value.trim() === "") {
    errors[0].textContent = "Digite o e-mail.";
    valid = false;
  }
  if (password.value.trim() === "") {
    errors[1].textContent = "Digite a senha.";
    valid = false;
  }

  if (valid) {
    alert("Login realizado com sucesso!");
    modalOverlay.classList.add("hidden");
    loginForm.reset();
  }
});
