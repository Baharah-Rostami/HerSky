// =============================
// COUNTER ANIMATION
// =============================


const counters = document.querySelectorAll(".info-box h4");


counters.forEach(counter => {


counter.innerText = "0";


const updateCounter = () => {


const target = +counter.getAttribute("data-target");


const current = +counter.innerText;


const increment = target / 100;



if(current < target){


counter.innerText = Math.ceil(current + increment);


setTimeout(updateCounter,20);


}

else{


counter.innerText = target + "+";


}


};



updateCounter();


});




// =============================
// SCROLL REVEAL ANIMATION
// =============================


const revealElements = document.querySelectorAll(
".why-card, .mission-item, .theme-item, .flip-card, .gallery-item"
);



const reveal = () =>{


revealElements.forEach(element=>{


const windowHeight = window.innerHeight;


const elementTop = element.getBoundingClientRect().top;


const visible = 100;



if(elementTop < windowHeight - visible){


element.classList.add("show");


}


});


};



window.addEventListener("scroll", reveal);


reveal();

  const nav = document.querySelector(".navbar-nav");
        const pill = document.querySelector(".nav-pill");
        const links = document.querySelectorAll(".nav-link");

        function movePill(element) {
            if (!element || window.innerWidth < 992) return;

            const navRect = nav.getBoundingClientRect();
            const linkRect = element.getBoundingClientRect();

            pill.style.width = `${linkRect.width}px`;
            pill.style.left = `${linkRect.left - navRect.left}px`;
        }

        const activeLink = document.querySelector(".nav-link.active");

        movePill(activeLink);

        links.forEach(link => {

            link.addEventListener("mouseenter", () => {

                movePill(link);

            });

        });


        nav.addEventListener("mouseleave", () => {

            movePill(activeLink);

        });


        // Navbar glass effect on scroll

        const navbar = document.querySelector(".hersky-navbar");

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        });


        // Update pill when screen changes

        window.addEventListener("resize", () => {

            movePill(activeLink);

        });
