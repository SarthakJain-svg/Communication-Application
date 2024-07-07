document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const userList = JSON.parse(localStorage.getItem("users") ?? null) ?? [];

    const authenticatedUser = userList.find(
      (user) => user.email === email && user.password === password
    );

    if (!authenticatedUser) {
      alert("Wrong Email or Password.");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(authenticatedUser));
    localStorage.removeItem("isLoggedOut");

    this.reset();

    window.location.href = "../login-success/login-success.html";
  });
