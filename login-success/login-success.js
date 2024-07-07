document.addEventListener("DOMContentLoaded", function () {
  const userDetails = JSON.parse(localStorage.getItem("loggedInUser")) || {};
  document.getElementById("userEmail").textContent = userDetails.email;
});

function navigateTo(url) {
  window.location.href = url;
}

function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.setItem("isLoggedOut", true);
  window.location.href = "../welcome/welcome.html";
}
