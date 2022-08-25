const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));






const sr = ScrollReveal({
    origin: 'left',
    distance: '700px',
    duration: 1000,

});


sr.reveal('.vone', { delay: 200 });
sr.reveal('.vthree', { delay: 200 });
sr.reveal('.vfive', { delay: 200 });


const srr = ScrollReveal({
    origin: 'right',
    distance: '300px',
    duration: 1000,
});


srr.reveal('.vtwo', { delay: 400 });
srr.reveal('.vfour', { delay: 400 });


const srf = ScrollReveal({
    opacity: 0.2,
    distance: '0px',
    duration: 1000,

});

srf.reveal('.aboutLeft', { delay: 200 });
srf.reveal('.aboutRight', { delay: 200 });
srf.reveal('.expertises', { delay: 200 });
srf.reveal('.fullService', { delay: 200 });
srf.reveal('.contactUs', { delay: 200 });
srf.reveal('.map', { delay: 200 });
srf.reveal('.cartesDescript', { delay: 200 });