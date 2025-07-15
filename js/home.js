export function renderHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    document.getElementById("app").innerHTML = `
      <div class="box has-text-centered">
        <h1 class="title">¡Bienvenido de nuevo, ${user.name}!</h1>
        <p class="subtitle">Este es tu inicio personalizado</p>
        <p>¡Explora, publica y conecta con otros usuarios!</p>
      </div>
    `;
  } else {
    document.getElementById("app").innerHTML = `
      <section class="hero is-info">
        <div class="hero-body has-text-centered">
          <p class="title">Bienvenido a RedSocial</p>
          <p class="subtitle">Regístrate o inicia sesión para empezar</p>
          <div class="buttons is-centered mt-4">
            <a href="#register" class="button is-primary">Registrarse</a>
            <a href="#login" class="button is-light">Iniciar sesión</a>
          </div>
        </div>
      </section>
    `;
  }
}
