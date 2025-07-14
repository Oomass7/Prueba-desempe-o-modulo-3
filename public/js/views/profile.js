const Profile = () => {
const session = JSON.parse(localStorage.getItem('session'));

if (!session) {
	window.location.hash = '#login';
	return '';
}

const { username, email, role } = session;

return `
	<section class="section">
	<div class="container is-flex is-justify-content-center">
		<div class="box" style="max-width: 500px; width: 100%; background-color: #1f1f1f; border-radius: 12px;">
		<h1 class="title has-text-success has-text-centered">My Profile</h1>

		<div class="content has-text-light">
			<p><strong>Username:</strong> ${username}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Role:</strong> ${role}</p>
		</div>

		${
			role === 'user'
			? `
				<div class="has-text-centered mt-5">
				<button class="button is-danger" id="delete-account-btn">Delete My Account</button>
				<p id="delete-error" class="has-text-danger mt-3"></p>
				</div>
			`
			: ''
		}
		</div>
	</div>
	</section>
`;
};

const setupProfile = () => {
const deleteBtn = document.getElementById('delete-account-btn');
const errorText = document.getElementById('delete-error');

if (deleteBtn) {
	deleteBtn.addEventListener('click', async () => {
	const session = JSON.parse(localStorage.getItem('session'));
	const confirmed = confirm('Are you sure you want to delete your account? This cannot be undone.');
	if (!confirmed) return;

	const passwordInput = prompt('Please confirm your password to delete your account:');
	if (passwordInput !== session.password) {
		errorText.textContent = 'Incorrect password. Account not deleted.';
		return;
	}

	try {
		// Search users by email to find the ID
		const res = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(session.email)}`);
		const users = await res.json();

		if (users.length === 1) {
		const userId = users[0].id;

			// Now delete by found ID
			const deleteRes = await fetch(`http://localhost:3000/users/${userId}`, {
				method: 'DELETE'
		});

		if (deleteRes.ok) {
			localStorage.removeItem('session');
			window.location.hash = '#login';
		} else {
			errorText.textContent = 'Failed to delete account.';
		}
		} else {
		errorText.textContent = 'User not found.';
		}
	} catch (err) {
		errorText.textContent = 'Server error.';
	}
	});
}
};

export default () => {
setTimeout(setupProfile, 0);
return Profile();
};
