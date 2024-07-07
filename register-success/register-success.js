document.addEventListener("DOMContentLoaded", function () {
  const userList = JSON.parse(localStorage.getItem("users") ?? null) ?? [];
  if (!userList.length) {
    window.location.href = "../register/register.html";
  }
});
