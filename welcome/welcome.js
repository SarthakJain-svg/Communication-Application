document.addEventListener("DOMContentLoaded", function () {
  const userNotExists = !localStorage.getItem("loggedInUser");
  const userLoggedOut = localStorage.getItem("isLoggedOut");
  if (userNotExists && userLoggedOut) {
    document.getElementById("logoutMessage").classList.remove("d-none"); // Remove 'd-none' class to display the message
  }
});
