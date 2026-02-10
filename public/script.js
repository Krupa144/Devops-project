document.addEventListener('DOMContentLoaded', () => {
    fetchWelcomeMessage();
    fetchProducts();
});

async function fetchWelcomeMessage() {
    try {
        // Zmienione na /api/welcome zgodnie z Twoim server.js
        const response = await fetch('/api/welcome');
        const text = await response.text();
        document.getElementById('welcome-message').innerText = text;
    } catch (error) {
        console.error('Błąd:', error);
        document.getElementById('welcome-message').innerText = 'Nie udało się załadować powitania.';
    }
}

async function fetchProducts() {
    const container = document.getElementById('products-container');
    try {
        const response = await fetch('/products');
        const products = await response.json();

        container.innerHTML = ''; 

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p class="product-price">${product.price} PLN</p>
            `;
            container.appendChild(productCard);
        });
    } catch (error) {
        console.error('Błąd:', error);
        container.innerText = 'Błąd podczas ładowania produktów.';
    }
}