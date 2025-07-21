document.addEventListener("DOMContentLoaded", function () {
  const greetBtn = document.getElementById("greetBtn");
  const greeting = document.getElementById("greeting");

  if (greetBtn && greeting) {
    greetBtn.addEventListener("click", function () {
      greeting.textContent = "Hello, welcome to Selam Berhanu responsive  site, we are developing a website project and will keep it more interactive and stylish and more functions: Calculator, games for kids!";
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const greetBtn = document.getElementById("greetBtn");
  const greeting = document.getElementById("greeting");
  const nameInput = document.getElementById("nameInput");
  const themeToggle = document.getElementById("toggleTheme");

  // Greeting Button
  if (greetBtn && greeting) {
    greetBtn.addEventListener("click", function () {
      const savedName = localStorage.getItem("userName") || "visitor";
      greeting.textContent = `Hello, ${savedName}! Welcome to the site.`;
    });
  }

  // Contact Form Name Save
  if (nameInput) {
    nameInput.addEventListener("input", () => {
      localStorage.setItem("userName", nameInput.value);
    });

    // Load previous name
    const storedName = localStorage.getItem("userName");
    if (storedName) nameInput.value = storedName;
  }

  // Dark mode toggle
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const theme = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", theme);
    });
  }
});
