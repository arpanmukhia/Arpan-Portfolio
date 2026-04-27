document.getElementById('year').textContent = new Date().getFullYear();
const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => revealObserver.observe(el));

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); }); }, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
