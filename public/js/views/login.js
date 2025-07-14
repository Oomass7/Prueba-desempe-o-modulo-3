const Login = () => {
return `
    <section class="section">
    <div class="container is-flex is-justify-content-center">
        <div class="box" style="max-width: 400px; width: 100%; background-color: #1f1f1f; border-radius: 12px;">
        <h1 class="title has-text-success has-text-centered">Login</h1>

        <form id="login-form">
            <div class="field">
            <label class="label has-text-light">Username or Email</label>
            <div class="control">
            <input class="input is-dark" type="text" id="identifier" placeholder="Enter your username or email" required>
            </div>
            </div>

            <div class="field">
            <label class="label has-text-light">Password</label>
            <div class="control">
                <input class="input is-dark" type="password" id="password" placeholder="Enter your password" required>
            </div>
            </div>

            <div class="field mt-4">
            <div class="control">
                <button class="button is-success is-fullwidth" type="submit">Login</button>
            </div>
            </div>

            <p id="login-error" class="has-text-danger has-text-centered mt-3"></p>

            <p class="has-text-light has-text-centered mt-4">
            Don't have an account?
            <a href="#register" class="has-text-success">Register here</a>
            </p>
        </form>
        </div>
    </div>
    </section>
`;
};

// After rendering the view, we need to attach the event listener
const setupLogin = () => {
const form = document.getElementById('login-form');
const errorText = document.getElementById('login-error');

if (form) {
    form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const identifier = document.getElementById('identifier').value.trim(); // username or email
    const password = document.getElementById('password').value.trim();

    try {
        const res = await fetch(`http://localhost:3000/users`);
        const users = await res.json();

        // Find user by username OR email AND password
        const user = users.find(u =>
        (u.username === identifier || u.email === identifier) && u.password === password
        );

        if (user) {
        localStorage.setItem('session', JSON.stringify(user));
        window.location.hash = '#home';
        } else {
        errorText.textContent = 'Invalid credentials.';
        }
    } catch (err) {
        errorText.textContent = 'Server error.';
    }
    });
}
};

// Export both HTML and setup logic
export default () => {
setTimeout(setupLogin, 0); // Allow DOM to render first
return Login();
};
