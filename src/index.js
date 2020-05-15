import { createNavBar } from './modules/navbar.js';
import { createHomeTab } from './modules/home.js';
import { createLocationTab } from './modules/location.js';
import { createMenuTab } from './modules/menu.js';
import { createAboutUsTab } from './modules/about-us.js';
import { createReservationTab } from './modules/reservation.js';
import { removeTab } from './modules/remove.js';
import { createFooterTab } from './modules/footer.js';

createNavBar();
createHomeTab();
createFooterTab();



document.getElementById('menu-nav').addEventListener('click', () => {
    removeTab();
    createMenuTab();
});

document.getElementById('location-nav').addEventListener('click', () => {
    removeTab();
    createLocationTab();
});

document.getElementById('about-us-nav').addEventListener('click', () => {
    removeTab();
    createAboutUsTab();
});

document.getElementById('res-nav').addEventListener('click', () => {
    removeTab();
    createReservationTab();
});