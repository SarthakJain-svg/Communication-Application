document.addEventListener("DOMContentLoaded", function () {
  const userDetails = localStorage.getItem("loggedInUser");
  if (!userDetails) {
    window.location.href = "../login/login.html";
  }
});
