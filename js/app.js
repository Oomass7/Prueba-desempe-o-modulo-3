import { renderLogin, renderRegister } from './auth.js';
import { renderHome } from './home.js';
import { renderProfile } from './profile.js';
import { renderNotes } from './notes.js';
import { renderImages } from './images.js';

function router() {
  const path = location.hash.slice(1);
  switch (path) {
    case 'login': renderLogin(); break;
    case 'register': renderRegister(); break;
    case 'home': renderHome(); break;
    case 'profile': renderProfile(); break;
    case 'notes': renderNotes(); break;
    case 'images': renderImages(); break;
    default: renderHome(); break;
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout");
  const authButtons = document.getElementById("auth-buttons");
  const userButtons = document.getElementById("user-buttons");
  const navProfile = document.getElementById("nav-profile");
  const navNotes = document.getElementById("nav-notes");
  const navImages = document.getElementById("nav-images");

  function updateNavbar() {
    const user = localStorage.getItem("user");

    if (user) {
      authButtons.style.display = "none";
      userButtons.style.display = "flex";

      navProfile?.classList.remove("is-hidden");
      navNotes?.classList.remove("is-hidden");
      navImages?.classList.remove("is-hidden");
    } else {
      authButtons.style.display = "flex";
      userButtons.style.display = "none";

      navProfile?.classList.add("is-hidden");
      navNotes?.classList.add("is-hidden");
      navImages?.classList.add("is-hidden");
    }
  }

  updateNavbar();
  window.addEventListener("hashchange", updateNavbar);

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      location.hash = "home";
      updateNavbar();
    });
  }
});
