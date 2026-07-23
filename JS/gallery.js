document.addEventListener("DOMContentLoaded", function () {
    /* =========================
       Elements
    ========================= */

    const galleryBackground =
        document.getElementById("galleryBackground");

    const mainImage =
        document.getElementById("mainImage");

    const leftImage =
        document.getElementById("leftImage");

    const rightImage =
        document.getElementById("rightImage");


    const imageCategory =
        document.getElementById("imageCategory");

    const currentNumber =
        document.getElementById("currentNumber");


    const galleryDate =
        document.getElementById("galleryDate");

    const galleryTitle =
        document.getElementById("galleryTitle");

    const galleryDescription =
        document.getElementById("galleryDescription");


    const profileImage =
        document.getElementById("profileImage");

    const profileLabel =
        document.getElementById("profileLabel");

    const profileName =
        document.getElementById("profileName");

    const profileRole =
        document.getElementById("profileRole");

    const profileDescription =
        document.getElementById("profileDescription");


    const paginationDots =
        document.querySelectorAll(".pagination-dot");


    const nextBtn =
        document.getElementById("nextBtn");

    const prevBtn =
        document.getElementById("prevBtn");


    const mainSlide =
        document.getElementById("mainSlide");


    let currentIndex = 0;

    let autoSlide;



    /* =========================
       Gallery Data
    ========================= */


    const galleryData = [

        {
            image:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",

            category:
            "Opening Ceremony",

            date:
            "July 20, 2026",

            title:
            "Conference Opening Ceremony",

            description:
            "Participants from different countries gather together for the opening ceremony of our international conference.",

            profileImage:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=85",

            profileLabel:
            "Conference Host",

            profileName:
            "Sarah Johnson",

            profileRole:
            "International Conference Coordinator",

            profileDescription:
            "Bringing professionals and inspiring minds together to create meaningful conversations."
        },


        {
            image:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",

            category:
            "Workshop",

            date:
            "July 21, 2026",

            title:
            "Creative Workshop Session",

            description:
            "A collaborative workshop where participants shared ideas and innovative solutions.",

            profileImage:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=85",

            profileLabel:
            "Workshop Leader",

            profileName:
            "Emma Wilson",

            profileRole:
            "Innovation Specialist",

            profileDescription:
            "Helping participants explore creativity and develop new perspectives."
        }

    ];
        /* =========================
       Update Gallery
    ========================= */

    function updateGallery(index) {

        currentIndex = index;

        const current = galleryData[currentIndex];


        if (galleryBackground) {

            galleryBackground.style.backgroundImage =
                `url("${current.image}")`;

        }


        if (mainImage) {

            mainImage.src =
                current.image;

        }


        if (imageCategory) {

            imageCategory.textContent =
                current.category;

        }


        if (currentNumber) {

            currentNumber.textContent =
                String(currentIndex + 1).padStart(2, "0");

        }


        if (galleryDate) {

            galleryDate.textContent =
                current.date;

        }


        if (galleryTitle) {

            galleryTitle.textContent =
                current.title;

        }


        if (galleryDescription) {

            galleryDescription.textContent =
                current.description;

        }


        if (profileImage) {

            profileImage.src =
                current.profileImage;

        }


        if (profileLabel) {

            profileLabel.textContent =
                current.profileLabel;

        }


        if (profileName) {

            profileName.textContent =
                current.profileName;

        }

        if (profileRole) {

            profileRole.textContent =
                current.profileRole;

        }


        if (profileDescription) {

            profileDescription.textContent =
                current.profileDescription;

        }

        /* Update side images */

        const previousIndex =
            (currentIndex - 1 + galleryData.length) %
            galleryData.length;


        const nextIndex =
            (currentIndex + 1) %
            galleryData.length;



        if (leftImage) {

            leftImage.src =
                galleryData[previousIndex].image;

        }


        if (rightImage) {

            rightImage.src =
                galleryData[nextIndex].image;

        }


        /* Pagination */

        paginationDots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });



        /* Animation */

        if (mainSlide) {

            mainSlide.classList.remove(
                "gallery-slide-animation"
            );


            void mainSlide.offsetWidth;


            mainSlide.classList.add(
                "gallery-slide-animation"
            );

        }

    }


    /* =========================
       Slide Controls
    ========================= */

    function nextSlide() {

        const nextIndex =
            (currentIndex + 1) %
            galleryData.length;


        updateGallery(nextIndex);

    }



    function previousSlide() {

        const previousIndex =
            (currentIndex - 1 + galleryData.length) %
            galleryData.length;


        updateGallery(previousIndex);

    }



    /* =========================
       Buttons
    ========================= */

    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            function () {

                nextSlide();

                restartAutoSlide();

            }
        );

    }



    if (prevBtn) {

        prevBtn.addEventListener(
            "click",
            function () {

                previousSlide();

                restartAutoSlide();

            }
        );

    }

    /* =========================
       Pagination
    ========================= */

    paginationDots.forEach(function (dot) {

        dot.addEventListener(
            "click",
            function () {

                const index =
                    Number(
                        this.dataset.index
                    );


                updateGallery(index);

                restartAutoSlide();

            }
        );

    });


    /* =========================
       Auto Slide
    ========================= */

    function startAutoSlide() {

        autoSlide =
            setInterval(
                nextSlide,
                5000
            );

    }



    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }



    startAutoSlide();

    /* =========================
       Hover Pause
    ========================= */


    const sliderWrapper =
        document.querySelector(
            ".gallery-slider-wrapper"
        );


    if (sliderWrapper) {


        sliderWrapper.addEventListener(
            "mouseenter",
            function () {

                clearInterval(autoSlide);

            }
        );


        sliderWrapper.addEventListener(
            "mouseleave",
            function () {

                startAutoSlide();

            }
        );

    }
        /* =========================
       Keyboard Navigation
    ========================= */

    document.addEventListener(
        "keydown",
        function (event) {


            if (event.key === "ArrowRight") {

                nextSlide();

                restartAutoSlide();

            }

            if (event.key === "ArrowLeft") {

                previousSlide();

                restartAutoSlide();

            }

        }
    );



    /* =========================
       Touch Swipe
    ========================= */


    let touchStartX = 0;

    let touchEndX = 0;

    if (sliderWrapper) {

        sliderWrapper.addEventListener(
            "touchstart",
            function (event) {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            {
                passive: true
            }
        );



        sliderWrapper.addEventListener(
            "touchend",
            function (event) {

                touchEndX =
                    event.changedTouches[0].screenX;


                handleSwipe();

            },
            {
                passive: true
            }
        );


    }

    function handleSwipe() {
        const swipeDistance =
            touchStartX - touchEndX;



        if (Math.abs(swipeDistance) < 50) {

            return;

        }



        if (swipeDistance > 0) {

            nextSlide();

        } else {

            previousSlide();

        }



        restartAutoSlide();

    }

    /* =========================
       Smooth Scroll
    ========================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {


            link.addEventListener(
                "click",
                function (event) {


                    const targetId =
                        this.getAttribute("href");



                    if (
                        targetId &&
                        targetId !== "#"
                    ) {


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({

                                behavior:
                                "smooth",

                                block:
                                "start"

                            });

                        }
                    }

                }
            );

        });



    /* =========================
       Scroll Reveal
    ========================= */
    const revealElements =
        document.querySelectorAll(
            ".gallery-section-heading, .gallery-information, .about-gallery-image, .about-gallery-content"
        );

    const revealObserver =
        new IntersectionObserver(

            function (entries) {


                entries.forEach(
                    function (entry) {


                        if (entry.isIntersecting) {


                            entry.target.classList.add(
                                "scroll-visible"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );


                        }


                    }
                );

            },

            {
                threshold: 0.15
            }

        );

    revealElements.forEach(
        function (element) {


            element.classList.add(
                "scroll-hidden"
            );


            revealObserver.observe(
                element
            );


        }
    );

    /* =========================
       Initial Gallery
    ========================= */

    updateGallery(0);

});


/* =========================
   HerSky Navbar
========================= */

const nav =
    document.querySelector(
        ".navbar-nav"
    );

const pill =
    document.querySelector(
        ".nav-pill"
    );


const links =
    document.querySelectorAll(
        ".nav-link"
    );



function movePill(element) {


    if (
        !element ||
        !nav ||
        !pill ||
        window.innerWidth < 992
    ) {

        return;

    }

    const navRect =
        nav.getBoundingClientRect();



    const linkRect =
        element.getBoundingClientRect();



    pill.style.width =
        `${linkRect.width}px`;



    pill.style.left =
        `${linkRect.left - navRect.left}px`;



}



const activeLink =
    document.querySelector(
        ".nav-link.active"
    );



movePill(activeLink);



links.forEach(
    function (link) {


        link.addEventListener(
            "mouseenter",
            function () {


                movePill(link);


            }
        );


    }
);



if (nav) {


    nav.addEventListener(
        "mouseleave",
        function () {


            movePill(activeLink);


        }
    );

}

/* =========================
   Navbar Scroll
========================= */


const navbar =
    document.querySelector(
        ".hersky-navbar"
    );

if (navbar) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 40) {


                navbar.classList.add(
                    "scrolled"
                );


            } else {


                navbar.classList.remove(
                    "scrolled"
                );


            }


        }
    );

}

/* =========================
   Resize
========================= */

window.addEventListener(
    "resize",
    function () {

        movePill(activeLink);

    }
);