import { createHeadingTab } from './heading.js';

const createAboutUsTab = () => {
    const aboutUsDiv = document.createElement('div');
    const bodyDiv = document.createElement('div');
    const textBody = document.createElement('p');

    textBody.textContent = `
        After 30 years in the restaurant business, we felt that there was something lacking.
        An undeniable passion to provide impeccable service to our guests without charging an arm and a leg.
        Our staff are trained to cater to your every need.
        Every time you visit us, we want you to walk out feeling like royalty.
        Don't believe us? Come on down and give us a shot. 
        If there's anything you didn't like, we're more than happy to give you back your hard-earned money.
    `
    bodyDiv.appendChild(textBody);
    aboutUsDiv.appendChild(bodyDiv);
    aboutUsDiv.classList.add('tab');

    createHeadingTab('Our Mission to Serve', 'content');
    document.getElementById('content').appendChild(aboutUsDiv);
}

export { createAboutUsTab }