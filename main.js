var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Front-End", "Back-End"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});


document.getElementById('verMasBtn').addEventListener('click', function () {
    var hiddenProjects = document.querySelectorAll('.hidden');
    var isHidden = hiddenProjects[0].style.display === 'none' || hiddenProjects[0].style.display === ''; 

    hiddenProjects.forEach(function (project) {
        project.style.display = isHidden ? 'block' : 'none'; 
    });

    this.textContent = isHidden ? 'Ver menos' : 'Ver más'; 
});


    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.getElementById('navbar');

    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

const navLinksMobile = document.querySelectorAll('.navbar a');

navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});


