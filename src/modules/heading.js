const createHeadingTab = (text, targetID) => {
    const splashDiv = document.createElement('div');
    const title = document.createElement('h1');

    title.textContent = text;
    splashDiv.appendChild(title);
    splashDiv.classList.add('tab');

    document.getElementById(targetID).appendChild(splashDiv);
}

export { createHeadingTab }