const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    navLinks.querySelectorAll("a").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  document.querySelector("#formNotice").textContent =
    `Thanks, ${name}! This is a demo form; no message has been sent to a server.`;
});
