// js/images.js

export function renderImages() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    location.hash = "login";
    return;
  }

  document.getElementById("app").innerHTML = `
    <h1 class="title">Tus imágenes</h1>
    <form id="imageForm" class="mb-4">
      <div class="field">
        <label class="label">URL de la imagen</label>
        <div class="control">
          <input class="input" type="url" name="url" placeholder="https://..." required />
        </div>
      </div>
      <button class="button is-primary" type="submit">Agregar imagen</button>
    </form>
    <div id="imageList" class="columns is-multiline"></div>
  `;

  const imageForm = document.getElementById("imageForm");
  const imageList = document.getElementById("imageList");

  async function loadImages() {
    const res = await fetch("http://localhost:3000/events");
    const images = await res.json();
    const userImages = images.filter(img => img.userId === user.id);

    imageList.innerHTML = userImages.length
      ? userImages.map(img => `
        <div class="column is-one-quarter">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="${img.url}" alt="Imagen del usuario">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item has-text-danger delete-image" data-id="${img.id}">Eliminar</a>
            </footer>
          </div>
        </div>
      `).join("")
      : "<p>No has subido imágenes todavía.</p>";

    document.querySelectorAll(".delete-image").forEach(btn => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const id = btn.dataset.id;
        await fetch(`http://localhost:3000/images/${id}`, { method: "DELETE" });
        loadImages();
      });
    });
  }

  imageForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = e.target.url.value.trim();
    if (!url) return;

    await fetch("http://localhost:3000/images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, userId: user.id })
    });

    e.target.reset();
    loadImages();
  });

  loadImages();
}
