// Reveal animado al hacer scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach(r => observer.observe(r));

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("modal-video");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      const videoURL = button.getAttribute("data-video");
      iframe.src = videoURL + "?autoplay=1";
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });
});
