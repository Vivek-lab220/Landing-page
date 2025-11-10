// Scroll-to-top button functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// CTA button click event
document.querySelector(".cta-btn").addEventListener("click", () => {
  alert("Welcome to AppGlide! Let's build something amazing together 🚀");
});


const marquee = document.querySelector(".marquee-content");
marquee.addEventListener("mouseover", () => {
  marquee.style.animationPlayState = "paused";
});
marquee.addEventListener("mouseout", () => {
  marquee.style.animationPlayState = "running";
});
