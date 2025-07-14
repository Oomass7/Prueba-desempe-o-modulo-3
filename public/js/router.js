// Import views
import Home from './views/home.js';
import Login from './views/login.js';
import Register from './views/register.js';
import Profile from './views/profile.js';
import Products from './views/products.js';
import Admin from './views/admin.js';
import NotFound from './views/notfound.js';

// Routes map
const routes = {
  '#home': Home,
  '#login': Login,
  '#register': Register,
  '#profile': Profile,
  '#products': Products,
  '#admin': Admin
};

const isAuthenticated = () => {
  return !!localStorage.getItem('session');
};

const isAdmin = () => {
  const session = JSON.parse(localStorage.getItem('session'));
  return session?.role === 'admin';
};

const router = () => {
  const hash = window.location.hash.toLowerCase() || '#home';

  const publicRoutes = ['#login', '#register'];
  const protectedRoutes = ['#home', '#products', '#profile', '#admin'];

  // Redirigir si NO está logueado y quiere ir a ruta protegida
  if (protectedRoutes.includes(hash) && !isAuthenticated()) {
    window.location.hash = '#login';
    return '';
  }

  // Redirigir si SÍ está logueado y quiere ir a login/register
  if (publicRoutes.includes(hash) && isAuthenticated()) {
    window.location.hash = '#home';
    return '';
  }

  // Proteger ruta admin
  if (hash === '#admin' && !isAdmin()) {
    return NotFound();
  }

  const view = routes[hash];
  return view ? view() : NotFound();
};

export default router;
