import { createHeadingTab } from './heading.js';

const createMenuTab = () => {
    const menuDiv = document.createElement('div');
    const appetizerDiv = document.createElement('div');
    const burgerDiv = document.createElement('div');
    const pizzaDiv = document.createElement('div');
    const drinkDiv = document.createElement('div');

    appetizerDiv.classList.add('menu-category');
    appetizerDiv.innerHTML = `
        <h2>Appetizers</h2>
        <p>French Fries - $5.99</p>
        <p>Onion Rings - $6.99</p>
        <p>Macaroni and Cheese - $3.99</p>
        <p>Mozzarella Sticks - $8.99</p>
        <p>Deluxe Nachos Platter - $12.99</p>
    `;

    burgerDiv.classList.add('menu-category');
    burgerDiv.innerHTML = `
        <h2>Burgers</h2>
        <p id="disclaimer">Comes with a serving of French Fries</p>
        <p>Classic Patty - $12.99</p>
        <p>Double Burger - $14.99</p>
        <p>The Heartstopper  - $16.99</p>
        <p>Black Bean Burger - $15.99</p>
        <p>Crispy Chicken Burger  - $14.99</p>
        <p>Zesty Pulled Pork Burger  - $14.99</p>
    `;

    pizzaDiv.classList.add('menu-category');
    pizzaDiv.innerHTML = `
        <h2>Pizza</h2>
        <p id="disclaimer">All of our pizzas come in personal servings</p>
        <p>Traditional Pepperoni - $9.99</p>
        <p>Mushroom Lover's - $12.99</p>
        <p>Hawaiian  - $10.99</p>
        <p>BBQ Chicken - $12.99</p>
        <p>Spicy Italian  - $12.99</p>
        <p>Just Trust Us  - $19.99</p>
    `;

    drinkDiv.classList.add('menu-category');
    drinkDiv.innerHTML = `
        <h2>Drinks</h2>
        <p id="disclaimer">We can only refill soda.</p>
        <p>Soda - $4.99</p>
        <p>Local Draught - $4.99</p>
        <p>Imported Beer  - $6.99</p>
        <p>Apple Cider - $6.99</p>
        <p>"Feeling Fancy" Cocktail Special  - $12.99</p>
    `;

    menuDiv.appendChild(appetizerDiv);
    menuDiv.appendChild(burgerDiv);
    menuDiv.appendChild(pizzaDiv);
    menuDiv.appendChild(drinkDiv);
    menuDiv.classList.add('tab', 'main-window');

    createHeadingTab('Our Menu', 'menu', 'content');
    document.getElementById('content').appendChild(menuDiv);
}

export { createMenuTab }