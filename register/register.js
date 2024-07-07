document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    if (password !== confirmPassword) {
      alert("Confirm Password does not match with Password.");
      return;
    }

    const user = {
      id: Date.now(),
      fullName: fullName,
      email: email,
      password: password,
    };

    const userList = JSON.parse(localStorage.getItem("users") ?? null) ?? [];

    const existingUser = userList.find((user) => user.email === email);

    if (existingUser) {
      alert("User already exists with this email.");
      return;
    }

    userList.push(user);

    localStorage.setItem("users", JSON.stringify(userList));

    this.reset();
  });
