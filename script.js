/* Create the saved events section */
function createSavedEventsSection() {
    const savedSection = document.createElement("section");
    savedSection.classList.add("saved-events", "section");

    const savedWrap = document.createElement("div");
    savedWrap.classList.add("wrap");

    const savedHeading = document.createElement("h2");
    savedHeading.textContent = "Saved Events";

    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No events have been saved yet.";

    const savedList = document.createElement("ul");
    savedList.classList.add("saved-events-list");

    savedWrap.appendChild(savedHeading);
    savedWrap.appendChild(emptyMessage);
    savedWrap.appendChild(savedList);

    savedSection.appendChild(savedWrap);

    document.querySelector("main").appendChild(savedSection);
}


/* Add save event buttons to the cards */
function addSaveButtons() {
    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(function(card) {
        const button = document.createElement("button");

        button.textContent = "Save Event";
        button.classList.add("save-event-button");

        const cardBody = card.querySelector(".event-card__body");
        cardBody.appendChild(button);

        button.addEventListener("click", function() {
            saveOrRemoveEvent(card, button);
        });
    });
}


/* Save or remove an event */
function saveOrRemoveEvent(card, button) {
    if (card.classList.contains("event-saved")) {
        card.classList.remove("event-saved");
        button.textContent = "Save Event";
    }
    else {
        card.classList.add("event-saved");
        button.textContent = "Remove Event";
    }

    updateSavedEvents();
}


/* Update the saved events list */
function updateSavedEvents() {
    const savedList = document.querySelector(".saved-events-list");
    const emptyMessage = savedList.previousElementSibling;

    /* Remove the old list */
    while (savedList.firstChild) {
        savedList.removeChild(savedList.firstChild);
    }

    const savedCards = document.querySelectorAll(".event-card.event-saved");

    if (savedCards.length === 0) {
        emptyMessage.textContent = "No events have been saved yet.";
        return;
    }

    emptyMessage.textContent = "";

    savedCards.forEach(function(card) {
        const eventName = card.querySelector("h3").textContent;
        const eventDateTime = card.querySelector("time").textContent;
        const eventLocation =
            card.querySelector(".event-card__meta li:nth-child(2)").textContent;

        const listItem = document.createElement("li");

        const name = document.createElement("strong");
        name.textContent = eventName;

        const dateTime = document.createElement("span");
        dateTime.textContent = eventDateTime;

        const location = document.createElement("span");
        location.textContent = eventLocation;

        listItem.appendChild(name);
        listItem.appendChild(dateTime);
        listItem.appendChild(location);

        savedList.appendChild(listItem);
    });
}


/* Run the function when the page loads */
document.addEventListener("DOMContentLoaded", function() {
    createSavedEventsSection();
    addSaveButtons();
});