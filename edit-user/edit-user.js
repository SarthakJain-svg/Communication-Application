document.addEventListener("DOMContentLoaded", function () {
  const userDetails =
    JSON.parse(localStorage.getItem("loggedInUser") ?? null) ?? {};
  document.getElementById("fullName").value = userDetails.fullName;
  document.getElementById("email").value = userDetails.email;
});

document
  .getElementById("editForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();

    const userList = JSON.parse(localStorage.getItem("users") ?? null) ?? [];
    const existingUser = userList.find((user) => user.email === email);
    existingUser.fullName = fullName;
    existingUser.email = email;

    localStorage.setItem("users", JSON.stringify(userList));
    localStorage.setItem("loggedInUser", JSON.stringify(existingUser));

    window.location.href = "../user-list/user-list.html";
  });

function navigateTo(url) {
  window.location.href = url;
}

function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.setItem("isLoggedOut", true);
  window.location.href = "../welcome/welcome.html";
}
