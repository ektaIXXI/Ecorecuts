// ===============================
// EKTA.CORECUTS — INTERACTIONS
// ===============================


// VIDEO HOVER / PLAY

const cards = document.querySelectorAll(".work-card");

cards.forEach((card) => {

    const video = card.querySelector("video");
    const button = card.querySelector(".video-play");

    if (!video || !button) return;

    card.addEventListener("mouseenter", () => {
        video.play().catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
    });

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        if (video.paused) {
            video.play().catch(() => {});
            button.textContent = "Pause";
        } else {
            video.pause();
            button.textContent = "Play ↗";
        }

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".work-card, .service-item, .why-grid > div, .price-card, .process-row > div, details"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ===============================
// NAVBAR ON SCROLL
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ===============================
// HERO PARALLAX
// ===============================

const hero = document.querySelector(".hero");

if (hero) {

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 20;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 20;

        document.querySelector(".shape-one").style.transform =
            `translate(${x}px, ${y}px)`;

        document.querySelector(".shape-two").style.transform =
            `translate(${-x}px, ${-y}px)`;

    });

}


// ===============================
// BUTTON MAGNETIC EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn, .nav-cta");

buttons.forEach((button) => {

    button.addEventListener("mousemove", (event) => {

        const rect = button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.08}px, ${y * 0.08}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translate(0, 0)";

    });

});


// ===============================
// FAQ
// ===============================

const faqItems = document.querySelectorAll("details");

faqItems.forEach((item) => {

    item.addEventListener("toggle", () => {

        if (item.open) {

            faqItems.forEach((other) => {

                if (other !== item) {
                    other.removeAttribute("open");
                }

            });

        }

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const year = document.querySelector("footer > p");

if (year) {

    year.textContent =
        `© ${new Date().getFullYear()} Ekta.CoreCuts`;

}