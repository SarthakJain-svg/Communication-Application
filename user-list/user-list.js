document.addEventListener("DOMContentLoaded", function () {
  function showDeleteModal(userId) {
    const modal = new bootstrap.Modal(
      document.getElementById("deleteUserModal"),
      {
        keyboard: false,
        backdrop: "static",
      }
    );

    document
      .querySelector("#deleteUserModal .btn-delete")
      .addEventListener("click", function () {
        deleteUser(userId);
        modal.hide();
      });

    modal.show();
  }

  function createUserRow(user) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${user.fullName}</td>
    <td>${user.email}</td>
    <td>
    <button type="button" id="${user.id}" class="btn btn-link link-primary link-underline-opacity-0 btn-user-edit">Edit</button>
    <span>|</span>
    <button type="button" id="${user.id}" class="btn btn-link link-danger link-underline-opacity-0 delete-user">Delete</button>
    </td>
    `;

    tr.querySelector(".btn-user-edit").addEventListener("click", function () {
      window.location.href = "../edit-user/edit-user.html";
    });
    tr.querySelector(".delete-user").addEventListener("click", function () {
      showDeleteModal(user.id);
    });

    return tr;
  }

  const tbody = document.querySelector("#userTable tbody");
  const userList = JSON.parse(localStorage.getItem("users") ?? null) ?? [];

  function renderUsers() {
    tbody.innerHTML = "";
    userList.forEach(function (userDetails) {
      const row = createUserRow(userDetails);
      tbody.appendChild(row);
    });
  }
  renderUsers();

  function deleteUser(userId) {
    const userIndex = userList.findIndex((userInfo) => userInfo.id === userId);
    userList.splice(userIndex, 1);
    localStorage.setItem("users", JSON.stringify(userList));
    renderUsers();
  }
});

function navigateTo(url) {
  window.location.href = url;
}

function logout() {
  localStorage.removeItem("loggedInUser");
  localStorage.setItem("isLoggedOut", true);
  window.location.href = "../welcome/welcome.html";
}
