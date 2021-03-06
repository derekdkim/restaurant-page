const createNavBar = () => {
    
    const navBarContainer = document.createElement('div');
    const navBarList = document.createElement('ul');
    
    const navBarMenu = document.createElement('li');
    navBarMenu.id = 'menu-nav';
    navBarMenu.textContent = 'Our Menu';
    navBarList.appendChild(navBarMenu);

    const navBarLocation = document.createElement('li');
    navBarLocation.id = 'location-nav';
    navBarLocation.textContent = 'Find Us';
    navBarList.appendChild(navBarLocation);

    const navBarHome = document.createElement('li');
    navBarHome.id = 'home-nav';
    navBarHome.textContent = 'Real Place';
    navBarHome.classList.add('title');
    navBarList.appendChild(navBarHome);

    const navBarAboutUs = document.createElement('li');
    navBarAboutUs.id = 'about-us-nav';
    navBarAboutUs.textContent = 'Our Story';
    navBarList.appendChild(navBarAboutUs);

    const navBarRes = document.createElement('li');
    navBarRes.id = 'res-nav';
    navBarRes.textContent = 'Make A Reservation';
    navBarList.appendChild(navBarRes);

    navBarContainer.appendChild(navBarList);
    navBarContainer.classList.add('nav');
    document.getElementById('content').appendChild(navBarContainer);
}

export { createNavBar }