const removeTab = () => {
    const tabElem = document.getElementsByClassName('tab');
    while (tabElem.length > 0) {
        tabElem[0].remove();
    }
}

export { removeTab }