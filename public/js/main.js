import router from './router.js';
import Navbar from './components/navbar.js';

const root = document.getElementById('app');

const render = () => {
root.innerHTML = `
    ${Navbar()}
    <div class="mt-5">
    ${router()}
    </div>
`;
};

window.addEventListener('hashchange', render);
window.addEventListener('load', render);

