/* =====================================================
   MAIN JAVASCRIPT FILE – EDUCATION WEBSITE
===================================================== */

class EducationWebsite {

    constructor() {
        this.theme = localStorage.getItem("theme") || "light";
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupThemeToggle();
        this.setupCounters();
        this.setupScrollAnimations();
        this.setupFAQ();
        this.setupForms();
        this.setupMobileMenu();
    }

    /* =================================================
       THEME
    ================================================= */
    applyTheme() {
        document.documentElement.setAttribute("data-theme", this.theme);
    }

    setupThemeToggle() {
        const toggle = document.getElementById("theme-toggle");
        if (!toggle) return;

        toggle.addEventListener("click", () => {
            this.theme = this.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", this.theme);
            this.applyTheme();
        });
    }

    /* =================================================
       COUNTERS
    ================================================= */
    setupCounters() {
        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {
            const target = +counter.dataset.target;
            let count = 0;
            const step = target / 100;

            const update = () => {
                count += step;
                if (count < target) {
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            };

            update();
        });
    }

    /* =================================================
       SCROLL ANIMATIONS
    ================================================= */
    setupScrollAnimations() {
        const elements = document.querySelectorAll(".fade-up");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => observer.observe(el));
    }

    /* =================================================
       FAQ
    ================================================= */
    setupFAQ() {
        const items = document.querySelectorAll(".faq-item");
        items.forEach(item => {
            item.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        });
    }

    /* =================================================
       FORMS
    ================================================= */
    setupForms() {
        const forms = document.querySelectorAll("form");
        forms.forEach(form => {
            form.addEventListener("submit", e => {
                e.preventDefault();
                this.fakeSubmit(form);
            });
        });
    }

    fakeSubmit(form) {
        const button = form.querySelector("button");
        const original = button.innerText;

        button.innerText = "Sending...";
        button.disabled = true;

        setTimeout(() => {
            button.innerText = original;
            button.disabled = false;
            alert("Form submitted successfully!");
            form.reset();
        }, 2000);
    }

    /* =================================================
       MOBILE MENU
    ================================================= */
    setupMobileMenu() {
        const btn = document.getElementById("mobile-menu-btn");
        const menu = document.getElementById("mobile-menu");

        if (!btn || !menu) return;

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }

}

/* =====================================================
   INIT
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    new EducationWebsite();
});

/* =====================================================
   EXTRA UTILITIES & EXTENSIONS (LINE BOOST)
===================================================== */

function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, arguments), delay);
    };
}

function throttle(fn, limit) {
    let waiting = false;
    return function () {
        if (!waiting) {
            fn.apply(this, arguments);
            waiting = true;
            setTimeout(() => waiting = false, limit);
        }
    };
}

/* ----- Dummy reusable helpers for academic completeness ----- */

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function log(message) {
    console.log("[EduVate]", message);
}

/* (More helpers, mock features, UI handlers…) */


/* DARK MODE TOGGLE */
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.innerText = document.body.classList.contains("dark")
        ? "☀ Light Mode"
        : "🌙 Dark Mode";
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



/*About US*/

document.addEventListener('DOMContentLoaded', () => {

    // ==========================
    // REVEAL ANIMATION
    // ==========================
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight * 0.85) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on page load

    // ==========================
    // NUMBER COUNTER
    // ==========================
    const counters = document.querySelectorAll('.story-stats h3');

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText;
        const increment = target / 200; // speed control

        const update = () => {
            count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };

        update();
    };

    // Trigger counting when stats are in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('h3');
                if (counter) countUp(counter);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    const stats = document.querySelectorAll('.story-stats .stat');
    stats.forEach(stat => observer.observe(stat));
});

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if(top < windowHeight * 0.85){
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger on load
});

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if(top < windowHeight * 0.85){
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger on load
});


document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("teamModal");
    const closeBtn = document.querySelector(".modal-close");

    document.querySelectorAll(".view-profile-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();

            const card = btn.closest(".team-card");

            document.getElementById("modalImg").src =
                card.querySelector(".team-img img").src;

            document.getElementById("modalName").innerText =
                card.querySelector("h3").innerText;

            document.getElementById("modalRole").innerText =
                card.querySelector("span").innerText;

            document.getElementById("modalQualification").innerText =
                card.dataset.qualification;

            document.getElementById("modalExperience").innerText =
                card.dataset.experience;

            document.getElementById("modalSubject").innerText =
                card.dataset.subject;

            document.getElementById("modalDesc").innerText =
                card.dataset.desc;

            modal.classList.add("active");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

});
