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





        // Registration

        /* =========================================================
   REGISTRATION PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const registrationForm =
        document.getElementById("conferenceRegistrationForm");

    const successMessage =
        document.getElementById("successMessage");

    const ticketSelect =
        document.getElementById("ticketType");

    const ticketButtons =
        document.querySelectorAll(".ticket-btn");

    const navbar =
        document.querySelector(".conference-navbar");


    /* =====================================================
       1. SELECT TICKET AUTOMATICALLY
    ===================================================== */

    ticketButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedTicket =
                this.getAttribute("data-ticket");

            if (ticketSelect && selectedTicket) {

                ticketSelect.value = selectedTicket;

            }

        });

    });


    /* =====================================================
       2. REGISTRATION FORM VALIDATION
    ===================================================== */

    if (registrationForm) {

        registrationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            event.stopPropagation();


            /* Get Form Values */

            const fullName =
                document.getElementById("fullName");

            const email =
                document.getElementById("email");

            const phone =
                document.getElementById("phone");

            const country =
                document.getElementById("country");

            const ticketType =
                document.getElementById("ticketType");


            /* Remove Previous Validation */

            registrationForm
                .querySelectorAll(".is-invalid")
                .forEach(function (element) {

                    element.classList.remove("is-invalid");

                });


            let isValid = true;


            /* =================================================
               FULL NAME VALIDATION
            ================================================= */

            if (
                !fullName.value.trim() ||
                fullName.value.trim().length < 3
            ) {

                fullName.classList.add("is-invalid");

                isValid = false;

            }


            /* =================================================
               EMAIL VALIDATION
            ================================================= */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !email.value.trim() ||
                !emailPattern.test(email.value.trim())
            ) {

                email.classList.add("is-invalid");

                isValid = false;

            }


            /* =================================================
               PHONE VALIDATION
            ================================================= */

            if (
                !phone.value.trim() ||
                phone.value.trim().length < 7
            ) {

                phone.classList.add("is-invalid");

                isValid = false;

            }


            /* =================================================
               COUNTRY VALIDATION
            ================================================= */

            if (!country.value.trim()) {

                country.classList.add("is-invalid");

                isValid = false;

            }


            /* =================================================
               TICKET TYPE VALIDATION
            ================================================= */

            if (!ticketType.value) {

                ticketType.classList.add("is-invalid");

                isValid = false;

            }


            /* =================================================
               IF FORM IS INVALID
            ================================================= */

            if (!isValid) {

                const firstInvalid =
                    registrationForm.querySelector(".is-invalid");

                if (firstInvalid) {

                    firstInvalid.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    firstInvalid.focus();

                }

                return;

            }


            /* =================================================
               FORM SUCCESS
            ================================================= */

            successMessage.classList.remove("d-none");

            successMessage.innerHTML = `
                <i class="bi bi-check-circle-fill"></i>
                Thank you, ${fullName.value.trim()}!
                Your ${ticketType.value} registration has been
                successfully submitted.
            `;


            /* Scroll to Success Message */

            successMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            /* =================================================
               RESET FORM
            ================================================= */

            registrationForm.reset();


            /* =================================================
               HIDE SUCCESS MESSAGE AFTER 6 SECONDS
            ================================================= */

            setTimeout(function () {

                successMessage.classList.add("d-none");

            }, 6000);

        });

    }


    /* =====================================================
       3. REMOVE INVALID STATE WHILE USER TYPES
    ===================================================== */

    const formInputs =
        registrationForm.querySelectorAll(
            "input, select, textarea"
        );


    formInputs.forEach(function (input) {

        input.addEventListener("input", function () {

            if (this.value.trim() !== "") {

                this.classList.remove("is-invalid");

            }

        });

        input.addEventListener("change", function () {

            if (this.value !== "") {

                this.classList.remove("is-invalid");

            }

        });

    });


    /* =====================================================
       4. NAVBAR EFFECT ON SCROLL
    ===================================================== */

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            navbar.style.padding = "10px 0";

            navbar.style.boxShadow =
                "0 8px 30px rgba(47, 58, 64, 0.12)";

        } else {

            navbar.style.padding = "16px 0";

            navbar.style.boxShadow =
                "0 5px 25px rgba(47, 58, 64, 0.05)";

        }

    });


    /* =====================================================
       5. SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".ticket-card, .benefit-card, " +
            ".registration-form-card, .info-item, " +
            ".accordion-item"
        );


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        revealObserver.observe(element);

    });


    /* =====================================================
       6. ADD REVEAL ACTIVE STYLE USING JS
    ===================================================== */

    const revealStyle =
        document.createElement("style");


    revealStyle.innerHTML = `

        .reveal-active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

    `;


    document.head.appendChild(revealStyle);


    /* =====================================================
       7. TICKET CARD CLICK EFFECT
    ===================================================== */

    const ticketCards =
        document.querySelectorAll(".ticket-card");


    ticketCards.forEach(function (card) {

        card.addEventListener("click", function () {

            ticketCards.forEach(function (item) {

                item.classList.remove(
                    "selected-ticket"
                );

            });

            this.classList.add(
                "selected-ticket"
            );

        });

    });


    /* =====================================================
       8. SMOOTH SCROLL FOR ANCHOR LINKS
    ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    const navbarHeight =
                        navbar.offsetHeight;

                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        navbarHeight;

                    window.scrollTo({

                        top: targetPosition,

                        behavior: "smooth"

                    });

                }

            }

        });

    });


    /* =====================================================
       9. CLOSE MOBILE NAVBAR AFTER CLICK
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".navbar-nav .nav-link"
        );

    const navbarCollapse =
        document.getElementById(
            "mainNavbar"
        );


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {

                const bootstrapCollapse =
                    bootstrap.Collapse.getInstance(
                        navbarCollapse
                    );

                if (bootstrapCollapse) {

                    bootstrapCollapse.hide();

                }

            }

        });

    });


    /* =====================================================
       10. TICKET BUTTON HOVER EFFECT
    ===================================================== */

    ticketButtons.forEach(function (button) {

        button.addEventListener(
            "mouseenter",
            function () {

                this.innerHTML = `
                    Select This Ticket
                    <i class="bi bi-arrow-right"></i>
                `;

            }
        );


        button.addEventListener(
            "mouseleave",
            function () {

                this.innerHTML = `
                    Register Now
                `;

            }
        );

    });

});
