// ---------- Mobile Menu Toggle ----------
const menuToggle = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open"); // animation for hamburger icon
  });
}

// ---------- Scroll To Top ----------
const scrollTopBtn = document.querySelector(".scroll-to-top");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- Fade-in Animation (Intersection Observer for better performance) ----------
const fadeElements = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach((el) => observer.observe(el));
} else {
  // Fallback for old browsers
  function checkFadeIn() {
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", checkFadeIn);
  window.addEventListener("load", checkFadeIn);
}

// ---------- Modal for Projects ----------
const projectDetails = {
  "student-result": `
    <h2>Student Result CRUD App</h2>
    <p>A Spring Boot CRUD application with PostgreSQL, Hibernate, and REST APIs. 
       It allows full management of student records including create, read, update, and delete operations.</p>
  `,
  "student-teacher": `
    <h2>Student-Teacher Relational System</h2>
    <p>A Java + JDBC project with OOP and MVC principles, managing relational data 
       between students and teachers in PostgreSQL.</p>
  `,
  "shopping-app": `
    <h2>Shopping Application</h2>
    <p>Java console-based shopping cart built with the Collections Framework, 
       featuring product management, cart operations, and billing.</p>
  `
};

const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.querySelector(".modal .close");

function showProjectDetails(project) {
  if (!modal || !modalBody) return;

  modalBody.innerHTML = projectDetails[project] || "<p>Details coming soon...</p>";
  modal.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "auto";
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Expose function globally for onclick
window.showProjectDetails = showProjectDetails;
