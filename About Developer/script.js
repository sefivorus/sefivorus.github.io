const mengetik = new Typed(".typing", {
  strings: ["Frontend Developer", "Web Developer", "Graphic Designer"],
  typeSpeed: 100,
  backSpeed: 75,
  loop: true,
});

let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });

document.getElementById("HBtn").addEventListener("click", function () {
  swal("Ultraman Z", "Delta Raise Claw")
});
document.getElementById("ABtn").addEventListener("click", function () {
  swal("Ultraman Z", "Delta Raise Claw")
});

const counters = document.querySelectorAll('.counter');
let portfolioVisible = false; // Tambahkan variabel untuk melacak apakah halaman ID "portfolio" terlihat

// Fungsi untuk memulai animasi angka
function startCountersAnimation() {
  counters.forEach(counter => {
    const targetCount = +counter.textContent;
    let count = 0;
    const increment = targetCount / 70;

    function updateCount() {
      count += increment;
      counter.textContent = count.toFixed(0);

      if (count < targetCount) {
        requestAnimationFrame(updateCount);
      }
    }

    updateCount();
  });
}

window.addEventListener('scroll', () => {
  // Periksa apakah halaman ID "portfolio" terlihat dalam jendela saat menggulir
  const portfolioSection = document.getElementById('portfolio');
  const rect = portfolioSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (!portfolioVisible && rect.top <= viewportHeight) {
    // Halaman ID "portfolio" terlihat, mulai animasi angka
    startCountersAnimation();
    portfolioVisible = true; // Setel variabel ke true agar animasi hanya dimulai sekali
  }
});

