const createHeadingTab = (text, id, targetID) => {
    const splashDiv = document.createElement('div');
    const title = document.createElement('h1');

    title.textContent = text;
    title.id = 'title';
    splashDiv.appendChild(title);
    splashDiv.id = `${id}-heading`;
    splashDiv.classList.add('tab', 'heading');

    document.getElementById(targetID).appendChild(splashDiv);
}

export { createHeadingTab }