
const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click', function() {
    const nav = document.querySelector('.navegacion')
    nav.classList.toggle('mostrar')
});

const date = document.querySelector('.date')
const hora = new Date()

date.innerHTML = `Last Modification: <span>${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(hora)}</span>`;


// --------------------------------------------


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Arequipa Perú",
      location: "Arequipa, Perú",
      dedicated: "2019, September, 15",
      area: 26969,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
    },
    {
      templeName: "San Antonio Texas",
      location: "Texas, United States",
      dedicated: "2005, May, 22",
      area: 16800,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-antonio-texas-temple/san-antonio-texas-temple-48057-main.jpg"
    },
    {
      templeName: "Barranquilla Colombia",
      location: "Barranquilla, Colombia",
      dedicated: "2018, December, 9",
      area: 25349,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
    },
    {
      templeName: "Belém Brazil",
      location: "Belém, Brazil",
      dedicated: "2022, November, 20",
      area: 28675,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
    },
    {
      templeName: "Anchorage Alaska",
      location: "Alaska, United States",
      dedicated: "2004, February, 8",
      area: 25349,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg"
    },
  ];

// Filtrar templos según las opciones del menú de navegación
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('temple-container');
    const navLinks = document.querySelectorAll('.navegacion a');

    // Función para mostrar los templos en el contenedor
    function displayTemples(filteredTemples) {
        container.innerHTML = ''; // Limpiar el contenedor
        filteredTemples.forEach(temple => {
            const card = document.createElement('div');
            card.classList.add('temple-card');

            const img = document.createElement('img');
            img.src = temple.imageUrl;
            img.alt = `${temple.templeName}`;
            img.loading = 'lazy';

            const title = document.createElement('h2');
            title.textContent = temple.templeName;

            const location = document.createElement('p');
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

            const dedicated = document.createElement('p');
            dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

            const area = document.createElement('p');
            area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;

            card.append(title, location, dedicated, area, img);
            container.appendChild(card);
        });
    }

    // Mostrar todos los templos al cargar la página
    displayTemples(temples);

    // Agregar eventos a los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            const filter = link.textContent.trim(); // Obtener el texto del enlace
            let filteredTemples = []; 

            switch (filter) {
                case 'Home':
                    filteredTemples = temples;
                    break;
                case 'Old':
                    filteredTemples = temples.filter(temple => {
                        const year = parseInt(temple.dedicated.split(', ')[0]);
                        return year < 1900;
                    });
                    break;
                case 'New':
                    filteredTemples = temples.filter(temple => {
                        const year = parseInt(temple.dedicated.split(', ')[0]);
                        return year > 2000;
                    });
                    break;
                case 'Large':
                    filteredTemples = temples.filter(temple => temple.area > 90000);
                    break;
                case 'Small':
                    filteredTemples = temples.filter(temple => temple.area < 10000);
                    break;
            }

            // Actualizar la visualización con los templos filtrados
            displayTemples(filteredTemples);
        });
    });
});