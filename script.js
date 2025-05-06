document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-container a').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
       e.preventDefault();  
 
        const targetId = this.getAttribute('href').substring(1);
       const targetSection = document.getElementById(targetId);
 
       if (targetSection) {
         window.scrollTo({
           top: targetSection.offsetTop - 50,  
           behavior: "smooth"  
         });
       }
     });
   });
 });
 document.addEventListener("DOMContentLoaded", function () {
   const words = [" Developer.",  "Innovator"," Backend Developer.", " Fronted Developer.", " Blockchain Developer."];
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
 
     let delay = isDeleting ? 50 : 120;
 
     if (!isDeleting && charIndex === current.length + 1) {
       delay = 1000;
       isDeleting = true;
     } else if (isDeleting && charIndex === 0) {
       isDeleting = false;
       wordIndex = (wordIndex + 1) % words.length;
       delay = 500;
     }
 
     setTimeout(type, delay);
   }
 
   type();
 });
 function copyEmail() {
   navigator.clipboard.writeText("suryakantapani2004@gmail.com");
   alert("Email address copied to clipboard!");
 }
 document.querySelectorAll('.icon-box').forEach(box => {
   box.addEventListener('click', () => {
     box.classList.toggle('clicked');
   });
 });
  const typing = document.getElementById("typing");
 const texts = ["Backend Developer", "Blockchain Enthusiast", "DSA Coder", "Tech Explorer"];
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
 
 type();

 const toggleBtn = document.getElementById('menu-toggle');
 const navLinks = document.getElementById('nav-links');
 
 toggleBtn.addEventListener('click', () => {
   navLinks.classList.toggle('show');
 });