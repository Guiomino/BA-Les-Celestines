const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target); // important : évite re-trigger inutile
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));