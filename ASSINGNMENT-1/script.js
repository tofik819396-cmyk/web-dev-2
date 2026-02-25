// Target HTML elements
const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearallBtn"); // make sure id matches HTML
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

// Sample Events
let sampleEvent = [
    {
        title: "Web Dev",
        date: "2026-04-06",
        category: "Workshop",
        description: "Introduction to Web Development"
    },
    {
        title: "Web Dev 2",
        date: "2026-04-07",
        category: "Conference",
        description: "Advanced JavaScript Concepts"
    }
];

// Create Event Card
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div><strong>Date:</strong> ${eventData.date}</div>
        <div><strong>Category:</strong> ${eventData.category}</div>
        <p>${eventData.description}</p>
    `;

    return card;
}

// Add Event
function addEvent(eventData) {
    const emptyState = document.querySelector(".empty");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}

// Form Submit
eventForm.addEventListener("submit", function (e) {
    e.preventDefault();   // VERY IMPORTANT

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);
    eventForm.reset();
});

// Delete Event (Event Delegation)
eventContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const card = event.target.closest(".event-card");
        card.remove();
    }

    if (!eventContainer.querySelector(".event-card")) {
        eventContainer.innerHTML =
            `<div class="empty">No Events yet. Add your first Event!</div>`;
    }
});

// Add Sample Events
addSampleBtn.addEventListener("click", function () {
    sampleEvent.forEach(addEvent);
});

// Clear All Events
clearAllBtn.addEventListener("click", function () {
    eventContainer.innerHTML =
        `<div class="empty">No Events yet. Add your first Event!</div>`;
});
