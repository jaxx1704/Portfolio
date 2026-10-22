const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});


const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});


const typingText = document.querySelector(".home-text h2");

const typingWords = [
    "Fresher Civil Engineer",
    "AutoCAD Designer",
    "Revit Designer",
    "2D Drafting Specialist",
    "3D Modeling Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect() {

    const currentWord = typingWords[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typingEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex++;

            if (wordIndex === typingWords.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typingEffect, isDeleting ? 50 : 100);
}

typingEffect();


const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .education-card, .contact-box"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {
    observer.observe(element);
});


const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    menuLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .hire-btn"
);

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.add("button-click");

        setTimeout(function () {
            button.classList.remove("button-click");
        }, 300);

    });

});


const profileImage = document.querySelector(".profile-circle img");

profileImage.addEventListener("error", function () {
    console.log("Profile image could not be loaded.");
});


window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("header-scroll");
    } else {
        header.classList.remove("header-scroll");
    }

});