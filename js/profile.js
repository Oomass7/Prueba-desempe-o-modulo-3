export function renderProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    location.hash = "login";
    return;
  }

  document.getElementById("app").innerHTML = `
    <h1 class="title">Tu perfil</h1>
    <div class="box">
      <p><strong>Nombre:</strong> ${user.name}</p>
      <p><strong>Correo:</strong> ${user.email}</p>
      <p><strong>Correo:</strong> ${user.rol}</p>
    </div>
  `;
}
