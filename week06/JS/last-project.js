
// date
const date = document.querySelector('.date')
const hora = new Date()

date.innerHTML = `Last Modification: <span>${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(hora)}</span>`;
const span = date.querySelector('span');
span.style.fontSize = "13px"

// mobile menu

const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click', function() {
    const nav = document.querySelector('.nav-links')
    nav.classList.toggle('mostrar')
});

// array products interface

const products = [
    // Mouse
    {
        id: 1,
        productName: "Mouse gaming logitech G203 lightsync RGB black",
        brand: "Logitech",
        price: "$24.99",
        pricePe: "S/93.25",
        status: "New",
        imageUrl: "week06/images/g203-black.jpg",
    },
    {
        id: 2,
        productName: "Mouse gaming logitech G203 lightsync RGB white",
        brand: "Logitech",
        price: "$27.99",
        pricePe: "S/104.44",
        status: "New",
        imageUrl: "week06/images/g203-white.jpg"
    },
    {
        id: 3,
        productName: "Mouse gaming logitech G203 lightsync RGB blue",
        brand: "Logitech",
        price: "$27.99",
        pricePe: "S/104.44",
        status: "New",
        imageUrl: "week06/images/g203-blue.jpg"
    },
    {
        id: 4,
        productName: "Mouse gaming logitech G203 lightsync RGB purple",
        brand: "Logitech",
        price: "$24.99",
        pricePe: "S/104.44",
        status: "New",
        imageUrl: "week06/images/g203-purple.jpg"
    },
    // Printers
    {
        id: 5,
        productName: "IMPRESORA MULTIFUNCIONAL EPSON ECO TANK L3250, USB, WIFI",
        brand: "Epson",
        price: "$179.99",
        pricePe: "S/671.60",
        status: "New",
        imageUrl: "week06/images/epson-L3250.jpg"
    },
    {
        id: 6,
        productName: "IMPRESORA MULTIFUNCIONAL EPSON ECO TANK L4260, USB, WIFI",
        brand: "Epson",
        price: "$229.99",
        pricePe: "S/858.17",
        status: "New",
        imageUrl: "week06/images/epson-L4260.png"
    },
    // Laptops
    {
        id: 7,
        productName: 'LAPTOP LENOVO V15 G4 AMN, AMD RYZEN 5 7520U, 16GB DDR5, SSD 512GB, 15.6" FHD',
        brand: "Lenovo",
        price: "$449.99",
        pricePe: "S/1679.06",
        status: "New",
        imageUrl: "week06/images/laptopRyzen5.webp"
    },
    {
        id: 8,
        productName: 'LAPTOP LENOVO LOQ 15IAX9. Ci5-12450HX, 24GB DDR5, SSD 512GB, RTX 3050, 15.6" FHD',
        brand: "Lenovo",
        price: "$499.99",
        pricePe: "S/1679.06",
        status: "New",
        imageUrl: "week06/images/laptopCorei5.webp"
    },
    {
        id: 9,
        productName: 'LAPTOP LENOVO V15 G4 AMN, AMD RYZEN 3 7320U, 8GB DDR5, SSD 256GB, 15.6" FHD',
        brand: "Lenovo",
        price: "$299.99",
        pricePe: "S/1119.36",
        status: "New",
        imageUrl: "week06/images/laptopRyzen3.webp"
    },
    // Computers
    {
        id: 10,
        productName: 'Pc Gaming Plus, AMD Ryzen 5 5500, 16GB DDR4, SSD 512GB, RTX 3050, F/550W, CASE RGB',
        brand: "AMD",
        price: "$569.99",
        pricePe: "S/2126.82",
        status: "New",
        imageUrl: "week06/images/pc-ryzen5.jpg"
    },
    {
        id: 11,
        productName: 'Pc Gaming Plus, AMD Ryzen 5 5600G, 16GB DDR4, SSD 500GB, F/500W, CASE Rainbow',
        brand: "AMD",
        price: "$320.99",
        pricePe: "S/1197.72",
        status: "New",
        imageUrl: "week06/images/pc-ryzen5cheap.jpg"
    },
    {
        id: 12,
        productName: 'Pc Powered By Asus, Intel Core i7-12700F, 32GB DDR5, SSD 1TB, RTX 4070 SUPER, F/750W, CASE',
        brand: "Intel",
        price: "$2,700.99",
        pricePe: "S/10,339.49",
        status: "New",
        imageUrl: "week06/images/pc-corei5plus.jpg"
    }
];

// Filtrar productos según las opciones del menú de navegación
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('product-container');
    const navLinks = document.querySelectorAll('.nav-links li a');

    // Función para mostrar los productos en el contenedor
    function displayProducts(filteredProducts) {
        container.innerHTML = ''; // Limpiar el contenedor
        filteredProducts.forEach(product => {
            const card = document.createElement('a');
            card.href = `week06/product.html?id=${product.id}&urlImage=${encodeURIComponent(product.imageUrl)}&nombre=${encodeURIComponent(product.productName)}&brand=${encodeURIComponent(product.brand)}&status=${encodeURIComponent(product.status)}&price=${encodeURIComponent(product.price)}&pricePe=${encodeURIComponent(product.pricePe)}`
            card.classList.add('product-card');

            const img = document.createElement('img');
            img.src = product.imageUrl;
            img.alt = `${product.productName}`;
            img.loading = 'lazy';

            const title = document.createElement('h2');
            title.textContent = product.productName;

            const price = document.createElement('p');
            price.textContent = product.price;

            card.append(img, title, price);
            container.appendChild(card);
        });
    }

    // Mostrar todos los productos al cargar la página
    displayProducts(products);

    // Agregar eventos a los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            const filter = link.textContent.trim(); // Obtener el texto del enlace
            let filteredProducts = []; 

            switch (filter) {
                case 'Home':
                    filteredProducts = products;
                    break;
                case 'Offers':
                    filteredProducts = products.filter(product => product.productName.toLowerCase().includes('mouse'));
                    break;
                case 'Printers':
                    filteredProducts = products.filter(product => product.productName.toLowerCase().includes('impresora'));
                    break;
                case 'Laptops':
                    filteredProducts = products.filter(product => product.productName.toLowerCase().includes('laptop'));
                    break;
                case 'Computers':
                    filteredProducts = products.filter(product => product.productName.toLowerCase().includes('pc'));
                    break;
                case 'Under $500':
                    filteredProducts = products.filter(product => parseFloat(product.price.replace('$', '').replace(',', '')) < 500);
                    break;
            }

            // Actualizar la visualización con los productos filtrados
            displayProducts(filteredProducts);
        });
    });
});


