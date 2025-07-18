document.addEventListener("DOMContentLoaded", function () {
    // Enhanced smooth scrolling with offset for fixed navbar
    document.querySelectorAll('.nav-container a').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
       e.preventDefault();  
 
        const targetId = this.getAttribute('href').substring(1);
       const targetSection = document.getElementById(targetId);
 
       if (targetSection) {
         window.scrollTo({
           top: targetSection.offsetTop - 80,  
           behavior: "smooth"  
         });
       }
     });
   });
 });
 // Enhanced typing animation with more dynamic effects
 document.addEventListener("DOMContentLoaded", function () {
   const words = [
     "Full Stack Developer 💻", 
     "Problem Solver 🧠", 
     "Backend Developer 🔧", 
     "Frontend Developer 🎨", 
     "Blockchain Developer ⛓️",
     "Tech Innovator 🚀"
   ];
   let wordIndex = 0;
   let charIndex = 0;
   let isDeleting = false;
   const typingElement = document.getElementById("typing");
 
   function type() {
     const current = words[wordIndex];
     const text = isDeleting
       ? current.substring(0, charIndex--)
       : current.substring(0, charIndex++);
 
     typingElement.textContent = "I'm " + text;
 
     let delay = isDeleting ? 30 : 80;
 
     if (!isDeleting && charIndex === current.length + 1) {
       delay = 2000;
       isDeleting = true;
     } else if (isDeleting && charIndex === 0) {
       isDeleting = false;
       wordIndex = (wordIndex + 1) % words.length;
       delay = 300;
     }
 
     setTimeout(type, delay);
   }
 
   type();
 });
 // Enhanced email copy function with better feedback
 function copyEmail() {
   const email = "suryakantapani2004@gmail.com";
   navigator.clipboard.writeText(email).then(() => {
     // Create a temporary notification
     const notification = document.createElement('div');
     notification.innerHTML = '✅ Email copied to clipboard!';
     notification.style.cssText = `
       position: fixed;
       top: 20px;
       right: 20px;
       background: linear-gradient(135deg, #10b981, #059669);
       color: white;
       padding: 15px 25px;
       border-radius: 50px;
       font-weight: 600;
       z-index: 10000;
       box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
       animation: slideIn 0.3s ease;
     `;
     
     document.body.appendChild(notification);
     
     setTimeout(() => {
       notification.style.animation = 'slideOut 0.3s ease';
       setTimeout(() => {
         document.body.removeChild(notification);
       }, 300);
     }, 3000);
   });
 }

 // Add CSS for notification animations
 const style = document.createElement('style');
 style.textContent = `
   @keyframes slideIn {
     from {
       transform: translateX(100%);
       opacity: 0;
     }
     to {
       transform: translateX(0);
       opacity: 1;
     }
   }
   
   @keyframes slideOut {
     from {
       transform: translateX(0);
       opacity: 1;
     }
     to {
       transform: translateX(100%);
       opacity: 0;
     }
   }
 `;
 document.head.appendChild(style);

 // Enhanced skill icon interactions
 document.querySelectorAll('.icon-box').forEach(box => {
   box.addEventListener('click', () => {
     box.classList.toggle('clicked');
     
     // Add a ripple effect
     const ripple = document.createElement('div');
     ripple.style.cssText = `
       position: absolute;
       border-radius: 50%;
       background: rgba(56, 189, 248, 0.6);
       transform: scale(0);
       animation: ripple 0.6s linear;
       pointer-events: none;
     `;
     
     const rect = box.getBoundingClientRect();
     const size = Math.max(rect.width, rect.height);
     ripple.style.width = ripple.style.height = size + 'px';
     ripple.style.left = '50%';
     ripple.style.top = '50%';
     ripple.style.transform = 'translate(-50%, -50%) scale(0)';
     
     box.style.position = 'relative';
     box.appendChild(ripple);
     
     setTimeout(() => {
       ripple.remove();
     }, 600);
   });
 });

 // Add ripple animation CSS
 const rippleStyle = document.createElement('style');
 rippleStyle.textContent = `
   @keyframes ripple {
     to {
       transform: translate(-50%, -50%) scale(2);
       opacity: 0;
     }
   }
 `;
 document.head.appendChild(rippleStyle);

 // Intersection Observer for scroll animations
 const observerOptions = {
   threshold: 0.1,
   rootMargin: '0px 0px -50px 0px'
 };

 const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.style.opacity = '1';
       entry.target.style.transform = 'translateY(0)';
     }
   });
 }, observerOptions);

 // Observe all sections for scroll animations
 document.querySelectorAll('.section').forEach(section => {
   section.style.opacity = '0';
   section.style.transform = 'translateY(30px)';
   section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
   observer.observe(section);
 });

 // Enhanced form submission with better UX
 document.getElementById('contactForm').addEventListener('submit', function(e) {
   e.preventDefault();
   
   const submitBtn = this.querySelector('button[type="submit"]');
   const originalText = submitBtn.innerHTML;
   
   // Show loading state
   submitBtn.innerHTML = '🚀 Sending...';
   submitBtn.disabled = true;
   
   // Simulate form submission (replace with actual form handling)
   setTimeout(() => {
     submitBtn.innerHTML = '✅ Message Sent!';
     submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
     
     // Reset form
     this.reset();
     
     // Reset button after 3 seconds
     setTimeout(() => {
       submitBtn.innerHTML = originalText;
       submitBtn.disabled = false;
       submitBtn.style.background = 'linear-gradient(135deg, #38bdf8, #0ea5e9)';
     }, 3000);
   }, 2000);
 });

 // Add parallax effect to background elements
 window.addEventListener('scroll', () => {
   const scrolled = window.pageYOffset;
   const parallaxElements = document.querySelectorAll('.section');
   
   parallaxElements.forEach((element, index) => {
     const speed = 0.5 + (index * 0.1);
     const yPos = -(scrolled * speed);
     element.style.transform = `translateY(${yPos}px)`;
   });
 });

  const typing = document.getElementById("typing");
 const texts = [
   "Backend Developer 🔧", 
   "Blockchain Enthusiast ⛓️", 
   "DSA Problem Solver 🧠", 
   "Tech Explorer 🚀"
 ];
 let i = 0, j = 0, currentText = "", isDeleting = false;
 
 function type() {
   currentText = texts[i];
   typing.innerHTML = isDeleting 
     ? currentText.substring(0, j--) 
     : currentText.substring(0, j++);
 
   if (!isDeleting && j === currentText.length + 1) {
     isDeleting = true;
     setTimeout(type, 1500);
   } else if (isDeleting && j === 0) {
     isDeleting = false;
     i = (i + 1) % texts.length;
   }
 
   setTimeout(type, isDeleting ? 50 : 100);
 }
 
 // Remove duplicate typing animation
 // type();

 const toggleBtn = document.getElementById('menu-toggle');
 const navLinks = document.getElementById('nav-links');
 
 toggleBtn.addEventListener('click', () => {
   navLinks.classList.toggle('show');
 });