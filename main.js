// ============================ Toggling Active Class Section ===========================
const currentLocation = location.pathname;
const menuItem = document.querySelectorAll(".menu-items li a");

menuItem.forEach(item => {
  item.addEventListener("click", (event) => {
    menuItem.forEach(item => {
      item.classList.remove("active");
    });
    event.target.classList.add("active");
  });

  if (currentLocation.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
});

// ============================ Menu Section ===========================
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandIcon = document.querySelectorAll(".expand-icon");

// hamburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

// mobile menu expand
expandIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    icon.classList.toggle("open");
  });
});

// ============================ Hero Typing Text =======================
var typed = new Typed(".typing",{
  strings: ["UI/UX/Web Designer","WordPress Developer","Video Editor","Social Media Manager"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
  });

// ============================ FAQ Section ===========================
let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e)=>{
    let clickedLi;
    if(e.target.classList.contains("question-arrow")){
      clickedLi = e.target.parentElement;
    }else{
      clickedLi = e.target.parentElement.parentElement;
    }
   clickedLi.classList.toggle("showAnswer");
  });
};

// ============================ CTA Button Animation ===========================
document.addEventListener('DOMContentLoaded', function() {
  const ctaButtons = document.querySelectorAll('.cta-btn');
  
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Smooth scroll for footer links
  const footerLinks = document.querySelectorAll('footer a[href^="#"]');
  
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Current year for copyright
  const yearSpan = document.querySelector('#current-year');
  if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// ============================ Add Read More Buttons (no truncation) ===========================
function addReadMoreButtons() {
  // Services section – add if missing
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach((item, index) => {
    const p = item.querySelector('p');
    const existingLink = item.querySelector('a[href*="article.html?type=service"]');
    if (!existingLink) {
      const readMoreBtn = document.createElement('a');
      readMoreBtn.href = `article.html?type=service&id=${index + 1}`;
      readMoreBtn.className = 'read-more-dynamic';
      readMoreBtn.setAttribute('data-i18n', 'read_more');
      readMoreBtn.textContent = 'Read More';
      p.insertAdjacentElement('afterend', readMoreBtn);
    }
  });

  // Blog section – add if missing
  const blogCols = document.querySelectorAll('.blog-col');
  blogCols.forEach((col, index) => {
    const existingBtn = col.querySelector('a[href*="article.html?type=blog"] button');
    if (!existingBtn) {
      const p = col.querySelector('p');
      const readMoreLink = document.createElement('a');
      readMoreLink.href = `article.html?type=blog&id=${index + 1}`;
      readMoreLink.innerHTML = `<button data-i18n="read_more">Read More</button>`;
      p.insertAdjacentElement('afterend', readMoreLink);
    }
  });
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', addReadMoreButtons);
