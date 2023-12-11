// Smooth scrolling and active section highlighting
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
  
    function setActiveLink() {
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
  
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
  
      sidebarLinks.forEach(link => {
        link.classList.remove('active');
      });
  
      const currentLink = document.querySelector(`.sidebar ul li a[href="#${currentSection}"]`);
      if (currentLink) {
        currentLink.classList.add('active');
      }
    }
  
    window.addEventListener('scroll', setActiveLink);
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  