// ============================ Toggling Active Class Section ===========================
const currentLocation = location.pathname;
const menuItem = document.querySelectorAll(".menu-items li a");

menuItem.forEach(item => {
  item.addEventListener("click", (event) => {
    // Remove "active" class from all menu items
    menuItem.forEach(item => {
      item.classList.remove("active");
    });

    // Add "active" class to the clicked menu item
    event.target.classList.add("active");
  });

  // Check if the current location contains the menu item's href
  if (currentLocation.includes(item.getAttribute("href"))) {
    item.classList.add("active");
  }
});
// ============================ Menu Section ===========================
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
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
  // CTA buttons animation
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
// ============================ Auto Truncate Text and Add Read More ===========================
function truncateText() {
  // Services section
  const serviceItems = document.querySelectorAll('.service-item p');
  serviceItems.forEach((paragraph, index) => {
    const fullText = paragraph.textContent;
    const words = fullText.split(' ');
    
    if (words.length > 22) {
      const truncatedText = words.slice(0, 22).join(' ') + '...';
      paragraph.textContent = truncatedText;
      
      // Remove existing read more link
      const existingLink = paragraph.nextElementSibling;
      if (existingLink && existingLink.tagName === 'A') {
        existingLink.remove();
      }
      
      // Create new read more button
      const readMoreBtn = document.createElement('a');
      readMoreBtn.href = `article.html?type=service&id=${index + 1}`;
      readMoreBtn.className = 'read-more-dynamic';
      readMoreBtn.textContent = 'Read More';
      readMoreBtn.style.cssText = `
        display: inline-block;
        background: linear-gradient(45deg, #a35c06, #7a140e);
        padding: 10px 20px;
        border-radius: 5px;
        color: #0bf407;
        text-decoration: none;
        margin-top: 10px;
        font-weight: bold;
        transition: all 0.3s ease;
      `;
      
      readMoreBtn.addEventListener('mouseenter', function() {
        this.style.background = '#163020';
        this.style.transform = 'translateY(-2px)';
      });
      
      readMoreBtn.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(45deg, #a35c06, #7a140e)';
        this.style.transform = 'translateY(0)';
      });
      
      paragraph.insertAdjacentElement('afterend', readMoreBtn);
      
      // Store full text in data attribute
      paragraph.dataset.fullText = fullText;
    }
  });
  
  // Blog section
  const blogParagraphs = document.querySelectorAll('.blog-col p');
  blogParagraphs.forEach((paragraph, index) => {
    const fullText = paragraph.textContent;
    const words = fullText.split(' ');
    
    if (words.length > 22) {
      const truncatedText = words.slice(0, 22).join(' ') + '...';
      paragraph.textContent = truncatedText;
      
      // Remove existing button and create new one
      const parent = paragraph.parentElement;
      const existingButton = parent.querySelector('a button');
      if (existingButton) {
        existingButton.parentElement.remove();
      }
      
      // Create new read more button
      const readMoreLink = document.createElement('a');
      readMoreLink.href = `article.html?type=blog&id=${index + 1}`;
      readMoreLink.innerHTML = `
        <button style="
          margin-top: 10px;
          padding: 7px 20px;
          background: #0bf407;
          border-radius: 30px;
          font-size: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        ">
          Read More
        </button>
      `;
      
      readMoreLink.querySelector('button').addEventListener('mouseenter', function() {
        this.style.background = '#ffffff';
        this.style.transform = 'scale(1.05)';
      });
      
      readMoreLink.querySelector('button').addEventListener('mouseleave', function() {
        this.style.background = '#0bf407';
        this.style.transform = 'scale(1)';
      });
      
      paragraph.insertAdjacentElement('afterend', readMoreLink);
      
      // Store full text
      paragraph.dataset.fullText = fullText;
    }
  });
  
  // Mega Menu Blog Content
  const megaBlogParagraphs = document.querySelectorAll('.mega-menu.blog p');
  megaBlogParagraphs.forEach((paragraph, index) => {
    const fullText = paragraph.textContent;
    const words = fullText.split(' ');
    
    if (words.length > 22) {
      const truncatedText = words.slice(0, 22).join(' ') + '...';
      paragraph.textContent = truncatedText;
      
      // Update existing read more link
      const readMoreLink = paragraph.nextElementSibling;
      if (readMoreLink && readMoreLink.classList.contains('read-more')) {
        readMoreLink.href = `article.html?type=mega-blog&id=${index + 1}`;
      }
      
      // Store full text
      paragraph.dataset.fullText = fullText;
    }
  });
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', truncateText);
