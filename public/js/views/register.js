const Register = () => {
return `
    <section class="section">
    <div class="container is-flex is-justify-content-center">
        <div class="box" style="max-width: 400px; width: 100%; background-color: #1f1f1f; border-radius: 12px;">
        <h1 class="title has-text-success has-text-centered">Register</h1>

        <form id="register-form">
            <div class="field">
            <label class="label has-text-light" for="username">Username</label>
            <div class="control">
                <input class="input is-dark" type="text" id="username" placeholder="Choose a username" required>
            </div>
            </div>

            <div class="field">
            <label class="label has-text-light" for="email">Email</label>
            <div class="control">
                <input class="input is-dark" type="email" id="email" placeholder="Enter your email" required>
            </div>
            </div>

            <div class="field">
            <label class="label has-text-light" for="password">Password</label>
            <div class="control">
                <input class="input is-dark" type="password" id="password" placeholder="Create your password" required>
            </div>
            </div>

            <div class="field mt-4">
            <div class="control">
                <button class="button is-success is-fullwidth" type="submit">Create Account</button>
            </div>
            </div>

            <p id="register-error" class="has-text-danger has-text-centered mt-3"></p>

            <p class="has-text-light has-text-centered mt-4">
            Already have an account?
            <a href="#login" class="has-text-success">Log in</a>
            </p>
        </form>
        </div>
    </div>
    </section>
`;
};

const setupRegister = () => {
const form = document.getElementById('register-form');
const errorText = document.getElementById('register-error');

if (form) {
    form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = 'user';

    try {
        // Check if username already exists
        const checkRes = await fetch(`http://localhost:3000/users?username=${username}`);
        const existing = await checkRes.json();

        if (existing.length > 0) {
        errorText.textContent = 'Username is already taken.';
        return;
        }

        // Create new user
        const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role })
        });

        if (res.ok) {
        const newUser = await res.json();
        localStorage.setItem('session', JSON.stringify(newUser));
        window.location.hash = '#home';
        } else {
        errorText.textContent = 'Failed to register.';
        }
    } catch (err) {
        errorText.textContent = 'Server error.';
    }
    });
}
};

export default () => {
setTimeout(setupRegister, 0);
return Register();
};
