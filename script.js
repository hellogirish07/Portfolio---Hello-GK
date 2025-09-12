// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      const navHeight = 70; // Navigation height
      const targetPosition = target.offsetTop - navHeight - 20; // Extra 20px spacing

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Dynamic footer year
document.getElementById("footeryear").textContent = new Date().getFullYear();

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  const originalText = heroTitle.textContent;

  // Uncomment the line below to enable typing effect
  typeWriter(heroTitle, originalText, 150);
});

// Smooth reveal animations for skill items
// const skillItems = document.querySelectorAll(".skill-item");
// skillItems.forEach((item, index) => {
//   item.style.animationDelay = `${index * 0.1}s`;
// });

// Project cards hover effect
// const projectCards = document.querySelectorAll(".project-card");
// projectCards.forEach((card) => {
//   card.addEventListener("mouseenter", () => {
//     card.style.transform = "translateY(-15px) scale(1.02)";
//   });

//   card.addEventListener("mouseleave", () => {
//     card.style.transform = "translateY(0) scale(1)";
//   });
// });

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");

  if (hero) {
    const speed = scrolled * 0.3;
    hero.style.transform = `translateY(${speed}px)`;
  }
});

// Back to top smooth scroll
document
  .querySelector('footer a[href="#home"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

// Splash screen functionality
window.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  setTimeout(() => {
    splash.classList.add("hide");
    setTimeout(() => (splash.style.display = "none"), 700);
  }, 2700);
});

// AOS initialization
AOS.init({
  duration: 800, // Animation duration in milliseconds
  easing: "ease-in-out", // Easing function for the animation
  once: true, // Whether animation should happen only once - while scrolling down
});

function back() {
  window.location.href = "index.html";
}

// Search functionality for projects
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", function () {
    let query = searchBar.value.toLowerCase();
    let projects = document.querySelectorAll(".project-card");

    projects.forEach((project) => {
        let keywords = project.dataset.name.toLowerCase().split(", ");
        let match = keywords.some((keyword) => keyword.includes(query));
        project.style.display = match ? "block" : "none";
    });
});
