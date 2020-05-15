import { createHeadingTab } from './heading.js';

const createInputAndLabel = (name, targetDiv) => {
    const formattedName = name.split(' ').join('-').toLowerCase();

    const input = document.createElement('input');
    input.id = `${formattedName}-input`;
    input.type = 'text';
    const label = document.createElement('label');
    label.setAttribute('for', input.id);
    label.textContent = `${name}: `;

    targetDiv.appendChild(label);
    targetDiv.appendChild(input);
}

const createButton = (text, id, targetDiv) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.id = `${id}-button`;
    targetDiv.appendChild(button);
}

const createReservationTab = () => {
    const reservationDiv = document.createElement('div');
    const formDiv = document.createElement('div');
    const contactDiv = document.createElement('div');
    const timeDiv = document.createElement('div');
    const requestDiv = document.createElement('div');
    const submitDiv = document.createElement('div');

    // Contact Info
    createInputAndLabel('Name', contactDiv);
    createInputAndLabel('Phone', contactDiv);
    createInputAndLabel('Email', contactDiv);

    // Calendar (fake button)
    createButton('Check Calendar', 'calendar', timeDiv);

    // Requests and Misc
    createInputAndLabel('Number of Guests', requestDiv);
    createInputAndLabel('Special Requests', requestDiv);

    // Submit Button
    createButton('Submit Reservation', 'submit', submitDiv);

    formDiv.appendChild(contactDiv);
    formDiv.appendChild(timeDiv);
    formDiv.appendChild(requestDiv);
    formDiv.appendChild(submitDiv);

    reservationDiv.appendChild(formDiv);
    reservationDiv.classList.add('tab', 'main-window');

    createHeadingTab('Make a Reservation', 'res', 'content');
    document.getElementById('content').appendChild(reservationDiv);
}

export { createReservationTab }