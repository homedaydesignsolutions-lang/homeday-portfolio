

// Sticky Navbar

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// LIGHTBOX

const projects = document.querySelectorAll(".project");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close-lightbox");

projects.forEach(project => {

    project.addEventListener("click", () => {

        const img = project.querySelector("img");

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuToggle.innerHTML = "✕";

    }else{

        menuToggle.innerHTML = "☰";

    }

});
// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// STAGGER ANIMATION

const animatedItems = document.querySelectorAll(".service-card, .project, .why-card");

function staggerAnimation(){

    animatedItems.forEach((item,index)=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-80){

            setTimeout(()=>{

                item.classList.add("show");

            },index*120);

        }

    });

}

window.addEventListener("scroll",staggerAnimation);

staggerAnimation();
// ==========================
// AJAX CONTACT FORM
// ==========================

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");

if(form){

form.addEventListener("submit", async function(e){

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    const data = new FormData(form);

    const response = await fetch(form.action,{
        method:"POST",
        body:data,
        headers:{
            'Accept':'application/json'
        }
    });

    if(response.ok){

        // Google Ads Formspree Lead Conversion Trigger
        gtag('event', 'conversion', {'send_to': 'AW-18319788368/TMQOCLaB-dIcENCSx59E'});

        formStatus.innerHTML = "✅ Thank you! Your enquiry has been sent successfully.";
        formStatus.style.color = "#25D366";

        form.reset();

    }else{

        formStatus.innerHTML = "❌ Something went wrong. Please try again.";
        formStatus.style.color = "#ff4d4d";

    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = "Send Enquiry";

});

}