const trigger = document.getElementById("secret-trigger");
const content = document.getElementById("secret-content");

trigger.addEventListener("click", () => {
  content.classList.add("revealed");

  // Optional: scroll down smoothly
  content.scrollIntoView({ behavior: "smooth" });
});