// =========================
// Mobile Navigation
// =========================

const navLinks = document.getElementById("navLinks");
const mobileToggle = document.getElementById("mobileToggle");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  mobileToggle.textContent = navLinks.classList.contains("open") ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    mobileToggle.textContent = "☰";
  });
});

// =========================
// Auto Year
// =========================

document.getElementById("year").textContent = new Date().getFullYear();

// =========================
// Scroll Reveal Animation
// =========================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => observer.observe(element));

// =========================
// Portfolio Filtering
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);

      card.style.display = shouldShow ? "" : "none";

      if (shouldShow) {
        requestAnimationFrame(() => card.classList.add("show"));
      }
    });
  });
});

const projectVideos = document.querySelectorAll(".project-video");

projectVideos.forEach((video) => {
  const card = video.closest(".project-card");

  if (!card) return;

  card.addEventListener("mouseenter", () => {
    video.play().catch(() => {});
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});