
// Trocar tema
const body = document.body;
const themeToggleBtn = document.createElement('button');
themeToggleBtn.textContent = "🌙 Modo Escuro";
themeToggleBtn.classList.add("theme-toggle");
document.querySelector("header").appendChild(themeToggleBtn);

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "☀️ Modo Claro";
  } else {
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌙 Modo Escuro";
  }
});


// Usa localStorage para permanecer com o tema selecionado ao atualizar a página.
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggleBtn.textContent = "☀️ Modo Claro";
}
