const Navbar = () => {
const session = JSON.parse(localStorage.getItem('session'));
const currentHash = window.location.hash.toLowerCase();
const isAuthPage = ['#login', '#register'].includes(currentHash);
const isAdmin = session?.role === 'admin';
const username = session?.username || 'user';

return `
    <nav class="navbar has-background-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item has-text-success" href="#home">🛒 SPA</a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    ${isAuthPage ? '' : `
        <div id="navbarBasic" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item has-text-light" href="#home">Home</a>
            <a class="navbar-item has-text-light" href="#products">Events</a>
            ${isAdmin ? `<a class="navbar-item has-text-warning" href="#admin">Admin</a>` : ''}
        </div>

        <div class="navbar-end">
            ${session
            ? `
                <div class="navbar-item has-text-light">
                <div class="navbar-item has-text-light">
                <span>Role:&nbsp;</span>
                <strong class="${isAdmin ? 'has-text-warning' : 'has-text-success'}">
                    ${isAdmin ? 'Admin 👑' : 'User 🙍‍♂️'}
                </strong>
                </div>

                </div>
                <a class="navbar-item has-text-light" href="#profile">Profile</a>
                <a class="navbar-item has-text-danger" href="#" id="logout-link">Logout</a>
            `
            : `
                <a class="navbar-item has-text-light" href="#login">Login</a>
                <a class="navbar-item has-text-light" href="#register">Register</a>
            `}
        </div>
        </div>
    `}
    </nav>
`;
};

// Event listener for logout button
const setupNavbar = () => {
// Logout logic
const logoutLink = document.getElementById('logout-link');
if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('session');
    window.location.hash = '#login';
    });
}

// Burger menu logic
const burger = document.querySelector('.navbar-burger');
const menu = document.getElementById('navbarBasic');

if (burger && menu) {
    burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    });
}
};

// Export as default component
export default () => {
setTimeout(setupNavbar, 0); // Wait for DOM to load before binding logout
return Navbar();
};
