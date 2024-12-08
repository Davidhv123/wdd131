const mobileMenu = document.querySelector('.mobile-menu')

mobileMenu.addEventListener('click', function() {
    const nav = document.querySelector('.navegacion')
    nav.classList.toggle('mostrar')
});

// Time 
const date = document.querySelector('.date')
const hora = new Date()

date.innerHTML = `Last Modification: <span>${new Intl.DateTimeFormat("en-US",{dateStyle: "full"}).format(hora)}</span>`;


