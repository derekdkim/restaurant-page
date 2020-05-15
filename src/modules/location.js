import { createHeadingTab } from './heading.js';

const createLocationTab = () => {
    const locationDiv = document.createElement('div');
    const hoursContainer = document.createElement('div');
    const infoContainer = document.createElement('div');

    hoursContainer.innerHTML = `
        <h3>When are we open?</h3>
        <p>Weekdays: 12PM - 10PM</p>
        <p>Saturday: 10AM - 10PM</p>
        <p>Sunday: Closed</p>
    `;
    infoContainer.innerHTML = `
        <h3>Where to find us</h3>
        <p>123 Real Street</p>
        <p>Winnipeg, MB</p>
        <p>A0B 1C2</p>
        <p>204-123-4567</p>
    `;

    locationDiv.appendChild(infoContainer);
    locationDiv.appendChild(hoursContainer);
    locationDiv.classList.add('tab', 'main-window');

    createHeadingTab('Come Visit Us!', 'location', 'content');
    document.getElementById('content').appendChild(locationDiv);
}

export { createLocationTab }