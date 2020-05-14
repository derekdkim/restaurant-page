const createHomeTab = () => {

    const homeDiv = document.createElement('div');
    const heroDiv = document.createElement('div');
    const title = document.createElement('h1');

    const titleText = document.createTextNode('Real Place');
    // Reminder to add background img to heroDiv

    title.appendChild(titleText);
    heroDiv.appendChild(title);
    homeDiv.appendChild(heroDiv);
    
    homeDiv.classList.add('tab');

    document.getElementById('content').appendChild(homeDiv);
}

export { createHomeTab }