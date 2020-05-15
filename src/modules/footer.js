const createFooterTab = () => {
    const footerDiv = document.createElement('div');
    const leftDiv = document.createElement('div');
    const centerDiv = document.createElement('div');
    const rightDiv = document.createElement('div');

    const phoneText = document.createElement('p');
    phoneText.textContent = '(204) 123 - 4567';
    leftDiv.appendChild(phoneText);

    const infoText = document.createElement('p');
    infoText.textContent = 'Real Place';
    centerDiv.appendChild(infoText);

    const addressText = document.createElement('p');
    addressText.textContent = '123 Real Street, Winnipeg, MB';
    rightDiv.appendChild(addressText);

    footerDiv.appendChild(leftDiv);
    footerDiv.appendChild(centerDiv);
    footerDiv.appendChild(rightDiv);
    footerDiv.classList.add('footer');

    document.getElementById('footer-content').appendChild(footerDiv);
}

export { createFooterTab }