// js/notes.js

export function renderNotes() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    location.hash = "login";
    return;
  }

  document.getElementById("app").innerHTML = `
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
                            <h2 class="title has-text-dark is-4 mb-0">Events List</h2>
                        </div>
                        <div class="column is-half has-text-right">
                            <button id="new-event" class="button is-primary m-2 js-modal-trigger data-target="modal-js-example"">New Event</button>
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
    </section>

    <div id="modal-js-example" class="modal">
    <div class="modal-background"></div>

    <div class="modal-content">
        <div class="box">
            <p>Modal JS example</p>
            <!-- Your content -->
        </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
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
  `;

  const APP_URL = "http://localhost:3000";

  // Events Management elements (specific to eventManagement.html)
  // --------------------------
  const eventsTableBody = document.getElementById('events-table-body'); // For displaying events
  const newEventButton = document.getElementById('new-event');
  const searchEventButton = document.getElementById('search-event');

  const newEventModal = document.getElementById('new-event-modal');
  const saveEventButton = document.getElementById('save-event-button');
  const eventNameInput = document.getElementById('event-name');
  const eventDateInput = document.getElementById('event-date');
  const eventLocationInput = document.getElementById('event-location');
  const eventPriceInput = document.getElementById('event-price');
  const eventStatusSelect = document.getElementById('event-status');
  const eventImageInput = document.getElementById('event-image'); // NEW: Image URL input
  const eventDescriptionInput = document.getElementById('event-description'); // NEW: Description input

  const editEventModal = document.getElementById('edit-event-modal');
  const editEventIdInput = document.getElementById('edit-event-id');
  const editEventNameInput = document.getElementById('edit-event-name');
  const editEventDateInput = document.getElementById('edit-event-date');
  const editEventLocationInput = document.getElementById('edit-event-location');
  const editEventPriceInput = document.getElementById('edit-event-price');
  const editEventStatusSelect = document.getElementById('edit-event-status');
  const editEventImageInput = document.getElementById('edit-event-image'); // NEW: Image URL edit input
  const editEventDescriptionInput = document.getElementById('edit-event-description'); // NEW: Description edit input
  const updateEventButton = document.getElementById('update-event-button');
  

  // Index.html Events container (now targeting the existing #events div in index.html)
  const activeEventsContainer = document.getElementById('events');

  showEvents();

  // Open new event modal
  if (newEventButton) {
    newEventButton.addEventListener('click', () => {
      if (newEventModal) {
        newEventModal.classList.add('is-active');
      }
    });
  }

  // Close new event modal
  if (newEventModal) { // Check if the new event modal exists
    document.querySelectorAll('.modal-background, .modal-close, #cancel-new-event-button').forEach(button => {
      button.addEventListener('click', () => {
        newEventModal.classList.remove('is-active');
        clearEventForm(); // Clear the form when closing
      });
    });
  }

  // Save new event
  if (saveEventButton) {
    saveEventButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const name = eventNameInput.value.trim();
      const date = eventDateInput.value;
      const location = eventLocationInput.value.trim();
      const price = parseFloat(eventPriceInput.value);
      const status = eventStatusSelect.value;
      const image = eventImageInput ? eventImageInput.value.trim() : ''; // NEW: Get image URL
      const description = eventDescriptionInput ? eventDescriptionInput.value.trim() : ''; // NEW: Get description

      if (!name || !date || !location || isNaN(price)) {
        alert("Please fill in all event fields correctly.");
        return;
      }

      await storeEvent(name, date, location, price, status, image, description); // NEW: Pass image and description
      if (newEventModal) {
        newEventModal.classList.remove('is-active');
      }
      clearEventForm();
      if (eventsTableBody) {
        await showEvents(); // Refresh the events list in eventManagement
      }
      if (activeEventsContainer) { // Refresh active events on index page
        await showActiveEvents();
      }
    });
  }

  // Open edit event modal and populate with data & Handle delete button click (general listener for dynamic buttons)
  document.addEventListener('click', async (event) => {
    // Check if the clicked element has the 'edit-event-button' class
    if (event.target.classList.contains('edit-event-button')) {
      const eventId = event.target.dataset.id;
      if (editEventModal) { // Only attempt to populate and show if modal exists
        await populateEditEventModal(eventId);
        editEventModal.classList.add('is-active');
      }
    }
    // Handle delete button click
    if (event.target.classList.contains('delete-event-button')) {
      const eventId = event.target.dataset.id;
      if (confirm('Are you sure you want to delete this event?')) {
        await deleteEvent(eventId);
        if (eventsTableBody) { // Refresh table only if it exists
          await showEvents(); // Refresh the events list in eventManagement
        }
        if (activeEventsContainer) {
          await showActiveEvents(); // Refresh active events on index page
        }
      }
    }
  });

  // Close edit event modal
  if (editEventModal) {
    document.querySelectorAll('#edit-event-modal .modal-background, #edit-event-modal .modal-close, #cancel-edit-event-button').forEach(button => {
      button.addEventListener('click', () => {
        editEventModal.classList.remove('is-active');
      });
    });
  }

  // Update event
  if (updateEventButton) {
    updateEventButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const eventId = editEventIdInput.value;
      const name = editEventNameInput.value.trim();
      const date = editEventDateInput.value;
      const location = editEventLocationInput.value.trim();
      const price = parseFloat(editEventPriceInput.value);
      const status = editEventStatusSelect.value;
      const image = editEventImageInput ? editEventImageInput.value.trim() : ''; // NEW: Get image URL
      const description = editEventDescriptionInput ? editEventDescriptionInput.value.trim() : ''; // NEW: Get description

      if (!name || !date || !location || isNaN(price)) {
        alert("Please fill in all event fields correctly.");
        return;
      }

      await updateEvent(eventId, name, date, location, price, status, image, description); // NEW: Pass image and description
      if (editEventModal) {
        editEventModal.classList.remove('is-active');
      }
      if (eventsTableBody) {
        await showEvents(); // Refresh the events list in eventManagement
      }
      if (activeEventsContainer) {
        await showActiveEvents(); // Refresh active events on index page
      }
    });
  }

  // Search event by name
  if (searchEventButton) {
    searchEventButton.addEventListener('click', async () => {
      const query = prompt("Enter event name to search:").trim();
      if (query) {
        await searchEventsByName(query);
      } else if (query === "" && eventsTableBody) { // If search box is empty, show all events
        await showEvents();
      }
    });
  }

  // Function to display events in the table
  async function showEvents(eventsToDisplay = null) {
    try {
      if (!eventsTableBody) return; // Exit if the table body element doesn't exist

      const events = eventsToDisplay || await (await fetch(APP_URL + "/events")).json();
      eventsTableBody.innerHTML = ''; // Clear existing table rows

      const res = await fetch(APP_URL + "/users")
      const users = await res.json();
      const user = users.find(u => u.rol === "admin")
      const view = true

      if (user) {
        view = true
      } else {
        view = false
      }


      if (events.length === 0) {
        eventsTableBody.innerHTML = '<tr><td colspan="5" class="has-text-centered">No events found.</td></tr>';
        return;
      }



      

      events.forEach(event => {
        const row = document.createElement('tr');
        if (view === true) {
          row.innerHTML = `
                  <td>${event.name}</td>
                  <td>${event.date}</td>
                  <td>${event.location}</td>
                  <td>${event.status}</td>
                  <td>
                      <button class="button is-small is-info mr-1 edit-event-button" data-id="${event.id}">Edit</button>
                      <button class="button is-small is-danger delete-event-button" data-id="${event.id}">Delete</button>
                  </td>
              `;
          eventsTableBody.appendChild(row);
        } else {
          row.innerHTML = `
                  <td>${event.name}</td>
                  <td>${event.date}</td>
                  <td>${event.location}</td>
                  <td>${event.status}</td>
                  <td>
                      <button class="button is-small is-info mr-1 edit-event-button" data-id="${event.id}">Edit</button>
                  </td>
              `;
          eventsTableBody.appendChild(row);
        }
          
      });
    } catch (error) {
      console.error(`Error fetching or displaying events: ${error}`);
    }
  }


  // Function to store a new event
  async function storeEvent(name, date, location, price, status, image, description) { // NEW: Add image, description parameters
    try {
      const res = await fetch(APP_URL + "/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          date: date,
          location: location,
          price: price,
          status: status,
          image: image,       // NEW: Include image
          description: description // NEW: Include description
        })
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const newEvent = await res.json();
      console.log('New event added:', newEvent);
    } catch (error) {
      console.error(`Error storing event: ${error}`);
    }
  }

  // Function to populate the edit event modal with data
  async function populateEditEventModal(eventId) {
    try {
      if (!editEventIdInput || !editEventNameInput || !editEventDateInput || !editEventLocationInput || !editEventPriceInput || !editEventStatusSelect || !editEventImageInput || !editEventDescriptionInput) { // NEW: Check new elements
        console.warn("Edit event modal elements not found.");
        return; // Exit if elements are missing
      }

      const res = await fetch(`${APP_URL}/events/${eventId}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const eventData = await res.json();

      editEventIdInput.value = eventData.id;
      editEventNameInput.value = eventData.name;
      editEventDateInput.value = eventData.date;
      editEventLocationInput.value = eventData.location;
      editEventPriceInput.value = eventData.price;
      editEventStatusSelect.value = eventData.status;
      editEventImageInput.value = eventData.image || '';       // NEW: Populate image
      editEventDescriptionInput.value = eventData.description || ''; // NEW: Populate description

    } catch (error) {
      console.error(`Error fetching event data for edit: ${error}`);
    }
  }

  // Function to update an event
  async function updateEvent(id, name, date, location, price, status, image, description) { // NEW: Add image, description parameters
    try {
      const res = await fetch(`${APP_URL}/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          date: date,
          location: location,
          price: price,
          status: status,
          image: image,        // NEW: Include image
          description: description // NEW: Include description
        })
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const updatedEvent = await res.json();
      console.log('Event updated:', updatedEvent);
    } catch (error) {
      console.error(`Error updating event: ${error}`);
    }
  }

  // Function to delete an event
  async function deleteEvent(id) {
    try {
      const res = await fetch(`${APP_URL}/events/${id}`, {
        method: "DELETE"
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      console.log('Event deleted successfully.');
    } catch (error) {
      console.error(`Error deleting event: ${error}`);
    }
  }

  // Function to clear the new event form fields (eventManagement.html)
  function clearEventForm() {
    if (eventNameInput) eventNameInput.value = '';
    if (eventDateInput) eventDateInput.value = '';
    if (eventLocationInput) eventLocationInput.value = '';
    if (eventPriceInput) eventPriceInput.value = '';
    if (eventStatusSelect) eventStatusSelect.value = 'active'; // Reset to default
    if (eventImageInput) eventImageInput.value = '';         // NEW: Clear image input
    if (eventDescriptionInput) eventDescriptionInput.value = ''; // NEW: Clear description input
  }
}
