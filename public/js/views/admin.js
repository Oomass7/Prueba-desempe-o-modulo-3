const Admin = () => {
return `
    <section class="section">
    <div class="container">
        <h1 class="title has-text-danger">Admin Panel - Event Management</h1>
    </div>
    <div class="columns is-gapless is-desktop event-management-layout is-centered">
        <main class="column section is-four-fifths main-content">
            <div class="container">
                <section class="section py-4">
                    <div class="columns is-vcentered mb-4">
                        <div class="column is-half">
                            <h2 class="title has-text-light is-4 mb-0">Events List</h2>
                        </div>
                        <div class="column is-half has-text-right">
                            <button id="search-event" class="button is-primary m-2">Search by name</button>
                            <button id="new-event" class="button is-primary m-2">New Event</button>
                        </div>
                    </div>
                    <table class="table is-fullwidth is-striped is-hoverable">
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="events-table-body">
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    </div>

    <div id="new-event-modal" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h3 class="title is-4">Create New Event</h3>
                <div class="field">
                    <label class="label">Event Name</label>
                    <div class="control">
                        <input class="input" type="text" id="event-name" placeholder="e.g., Tech Conference">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Date</label>
                    <div class="control">
                        <input class="input" type="date" id="event-date">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Location</label>
                    <div class="control">
                        <input class="input" type="text" id="event-location"
                            placeholder="e.g., Virtual, Convention Center">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="textarea" id="event-description"
                            placeholder="A brief description of the event..."></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Price</label>
                    <div class="control">
                        <input class="input" type="number" id="event-price" placeholder="e.g., 100">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Image URL</label>
                    <div class="control">
                        <input class="input" type="url" id="event-image"
                            placeholder="e.g., https://example.com/image.jpg">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Status</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="event-status">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary" id="save-event-button">Save Event</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light" id="cancel-new-event-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>

    <div id="edit-event-modal" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h3 class="title is-4">Edit Event</h3>
                <input type="hidden" id="edit-event-id">
                <div class="field">
                    <label class="label">Event Name</label>
                    <div class="control">
                        <input class="input" type="text" id="edit-event-name" placeholder="e.g., Tech Conference">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Date</label>
                    <div class="control">
                        <input class="input" type="date" id="edit-event-date">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Location</label>
                    <div class="control">
                        <input class="input" type="text" id="edit-event-location"
                            placeholder="e.g., Virtual, Convention Center">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="textarea" id="edit-event-description"
                            placeholder="A brief description of the event..."></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Price</label>
                    <div class="control">
                        <input class="input" type="number" id="edit-event-price" placeholder="e.g., 100">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Image URL</label>
                    <div class="control">
                        <input class="input" type="url" id="edit-event-image"
                            placeholder="e.g., https://example.com/image.jpg">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Status</label>
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select id="edit-event-status">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary" id="update-event-button">Update Event</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light" id="cancel-edit-event-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
    </section>
    <script type="module" src="./js/components/logic.js"></script>
`;
};
export default Admin;


