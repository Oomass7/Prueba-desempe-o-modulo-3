export function renderLogin() {
  document.getElementById("app").innerHTML = `
    <h1 class="title">Iniciar sesión</h1>
    <form id="loginForm">
      <div class="field">
        <label class="label">Correo</label>
        <div class="control">
          <input class="input" type="email" name="email" required />
        </div>
      </div>
      <div class="field">
        <label class="label">Contraseña</label>
        <div class="control">
          <input class="input" type="password" name="password" required />
        </div>
      </div>
      <div class="control">
        <button class="button is-link" type="submit">Entrar</button>
      </div>
    </form>
  `;

  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    const res = await fetch("http://localhost:3000/users");
    const users = await res.json();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      location.hash = "home";
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  });
}

export function renderRegister() {
  document.getElementById("app").innerHTML = `
    <h1 class="title">Registro</h1>
    <form id="registerForm">
      <div class="field">
        <label class="label">Nombre completo</label>
        <div class="control">
          <input class="input" type="text" name="name" required minlength="3" />
        </div>
      </div>

      <div class="field">
        <label class="label">Nombre de usuario</label>
        <div class="control">
          <input class="input" type="text" name="username" required minlength="3" />
        </div>
      </div>

      <div class="field">
        <label class="label">Edad</label>
        <div class="control">
          <input class="input" type="number" name="age" required min="10" max="120" />
        </div>
      </div>

      <div class="field">
        <label class="label">Correo electrónico</label>
        <div class="control">
          <input class="input" type="email" name="email" required />
        </div>
      </div>

      <div class="field">
        <label class="label">Contraseña</label>
        <div class="control">
          <input class="input" type="password" name="password" required minlength="6" />
        </div>
      </div>

      <div class="control">
        <button class="button is-success" type="submit">Registrarse</button>
      </div>
    </form>
  `;

  document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const username = e.target.username.value.trim();
    const age = parseInt(e.target.age.value.trim());
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (name.length < 3) return alert("El nombre debe tener al menos 3 letras.");
    if (username.length < 3) return alert("El nombre de usuario debe tener al menos 3 letras.");
    if (isNaN(age) || age < 10 || age > 120) return alert("Edad inválida.");
    if (!email.includes("@") || !email.includes(".")) return alert("Correo no válido.");
    if (password.length < 6) return alert("Contraseña muy corta.");

    const res = await fetch("http://localhost:3000/users");
    const users = await res.json();

    if (users.find(u => u.email === email)) return alert("Este correo ya está registrado.");
    if (users.find(u => u.username === username)) return alert("Este nombre de usuario ya existe.");

    const newUser = { name, username, age, email, password, avatar: "" };

    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    });

    localStorage.setItem("user", JSON.stringify(newUser));
    location.hash = "home";
  });
}

