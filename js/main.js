/* ==========================
   MOBILE MENU
========================== */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        hamburger.classList.remove("active");

    });

});

/* ==========================
   HEADER SCROLL
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ==========================
   ACTIVE MENU
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === `#${current}`
        ){

            link.classList.add("active");

        }

    });

});

/* ==========================
   BACK TO TOP
========================== */

const backTop =
document.querySelector(".back-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        backTop.classList.add("active");

    }else{

        backTop.classList.remove("active");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* ==========================
   CURSOR GLOW
========================== */

const glow =
document.querySelector(".cursor-glow");

document.addEventListener(
"mousemove",
(e)=>{

    glow.style.left =
    e.clientX - 150 + "px";

    glow.style.top =
    e.clientY - 150 + "px";

});

/* ==========================
   SCROLL ANIMATION
========================== */

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

},

{
    threshold:0.15
}

);

document
.querySelectorAll(
".section, .project-card, .skill-card, .award-card"
)
.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/* ==========================
   DARK / LIGHT MODE
========================== */

const themeToggle =
document.getElementById(
"themeToggle"
);

const icon =
themeToggle.querySelector("i");

themeToggle.addEventListener(
"click",
()=>{

    document.body.classList.toggle(
        "light-mode"
    );

    if(
        document.body.classList.contains(
            "light-mode"
        )
    ){

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

    }else{

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});

/* ==========================
   LOAD SAVED THEME
========================== */

if(
localStorage.getItem("theme")
=== "light"
){

    document.body.classList.add(
        "light-mode"
    );

    icon.classList.remove(
        "fa-moon"
    );

    icon.classList.add(
        "fa-sun"
    );

}

/* ==========================
   TYPING EFFECT
========================== */

const titles = [

    "Website Developer",
    "WordPress Developer",
    "Content SEO Website",

];

let index = 0;

const titleElement =
document.querySelector(
".hero-content h2"
);

setInterval(()=>{

    titleElement.style.opacity = 0;

    setTimeout(()=>{

        index++;

        if(index >= titles.length){

            index = 0;

        }

        titleElement.textContent =
        titles[index];

        titleElement.style.opacity = 1;

    },300);

},3000);

/* ==========================
   PRELOADER
========================== */

window.addEventListener(
"load",
()=>{

    document.body.classList.add(
        "loaded"
    );

});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(
".stat-box h4"
);

const counterObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter =
entry.target;

const target =
parseInt(counter.innerText);

let count = 0;

const speed = target / 40;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText =
Math.floor(count);

requestAnimationFrame(
update
);

}else{

counter.innerText =
target;

}

};

update();

}

});

},
{
threshold:.5
}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});