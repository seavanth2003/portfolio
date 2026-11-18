
/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("show");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   ACTIVE NAVBAR LINK
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );


function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionBottom =
            sectionTop +
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (
            linkTarget ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =====================================================
   MOBILE NAVBAR CLOSE
===================================================== */

const mobileLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

const navbarMenu =
    document.querySelector(
        "#mainNavbar"
    );


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (
                navbarMenu.classList.contains(
                    "show"
                )
            ) {

                const collapse =
                    bootstrap.Collapse
                        .getInstance(
                            navbarMenu
                        );

                if (collapse) {
                    collapse.hide();
                }

            }

        }
    );

});


/* =====================================================
   IMAGE FALLBACK
===================================================== */

const projectImages =
    document.querySelectorAll(
        ".project-image img"
    );


projectImages.forEach((image) => {

    image.addEventListener(
        "error",
        () => {

            image.style.display = "none";

            image.parentElement.style.display =
                "flex";

            image.parentElement.style.alignItems =
                "center";

            image.parentElement.style.justifyContent =
                "center";

            image.parentElement.innerHTML =
                "<span>Project Image</span>";

        }
    );

});


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        revealOnScroll();
        updateActiveNav();

    }
);
