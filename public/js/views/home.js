const Home = () => {
const session = JSON.parse(localStorage.getItem('session'));

return `
    <section class="section">
    <div class="container has-text-centered">
        <h1 class="title has-text-success">Welcome${session ? `, ${session.username}` : ''}!</h1>
        <p class="subtitle has-text-light">
        Welcome to Home page
        </p>

        <div class="buttons is-centered mt-5">
        <a class="button is-success is-light" href="#products">Browse Events</a>
        ${session?.role === 'admin' ? `<a class="button is-warning" href="#admin">Admin Panel</a>` : ''}
        </div>
    </div>
    </section>
    <div class="columns is-gapless is-desktop desktop-layout is-centered">
        <main class="column section is-four-fifths main-content"> <div class="container">
                <h1 class="title is-2 mb-5">Welcome Admin</h1>
                <section class="section py-4">
                    <h2 class="title is-4 mb-4">Event Statistics</h2>
                    <div class="columns is-multiline">
                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="box has-text-centered">
                                <p class="title is-3" id="active-events"></p>
                                <p class="subtitle is-6">Active Events</p>
                            </div>
                        </div>
                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="box has-text-centered">
                                <p class="title is-3" id="cancelled-events"></p>
                                <p class="subtitle is-6">Cancelled Events</p>
                            </div>
                        </div>
                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="box has-text-centered">
                                <p class="title is-3" id="inactive-events"></p>
                                <p class="subtitle is-6">Inactive Events</p>
                            </div>
                        </div>
                        <div class="column is-half-tablet is-one-quarter-desktop">
                            <div class="box has-text-centered">
                                <p class="title is-3" id="total-events"></p>
                                <p class="subtitle is-6">Total Events</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section py-4">
                    <h2 class="title is-4 mb-4">Contact & Subscribers</h2>
                    <div class="columns is-multiline">
                        <div class="column is-half-tablet">
                            <div class="box has-text-centered">
                                <p class="title is-3" id="registered-emails"></p>
                                <p class="subtitle is-6">Registered Emails</p>
                            </div>
                        </div>
                        <div class="column is-half-tablet">
                            <div class="box has-text-centered">
                                <p class="title is-3" id="contact-messages-count"></p>
                                <p class="subtitle is-6">Contact Messages</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
    <script type="module" src="./js/components/logic.js"></script>
`;
};

export default Home;
