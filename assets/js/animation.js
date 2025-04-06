document.addEventListener('DOMContentLoaded', () => {
  // Create floating elements
  const createFloatingElements = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const shapes = ['circle', 'square', 'triangle', 'diamond'];
    const colors = ['#9E7CC1', '#79589F', '#4A3171', '#FD9A69'];
    
    // Create 25 floating elements
    for (let i = 0; i < 25; i++) {
      const element = document.createElement('div');
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.floor(Math.random() * 40) + 15; // 15-55px
      
      element.classList.add('floating-element', shape);
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.backgroundColor = color;
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.animationDuration = `${Math.random() * 8 + 7}s`; // 7-15s
      element.style.animationDelay = `${Math.random() * 5}s`;
      
      // For triangle shape, set border-bottom-color
      if (shape === 'triangle') {
        element.style.borderBottomColor = color;
      }
      
      hero.appendChild(element);
    }
  };
  
  // Add typing animation to the bio text
  const addTypingAnimation = () => {
    const bioElement = document.querySelector('.bio');
    if (!bioElement) return;
    
    // Store the original text and clear it
    const originalText = bioElement.textContent;
    bioElement.textContent = '';
    bioElement.classList.add('typing');
    
    // Type the text character by character
    let charIndex = 0;
    const typingSpeed = 20; // milliseconds per character
    
    const typingInterval = setInterval(() => {
      if (charIndex < originalText.length) {
        bioElement.textContent += originalText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          bioElement.classList.add('typing-done');
          bioElement.classList.remove('typing');
        }, 500);
      }
    }, typingSpeed);
  };
  
  // Add hover effects to social links
  const addSocialHoverEffects = () => {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.classList.add('bounce');
        setTimeout(() => {
          link.classList.remove('bounce');
        }, 1000);
      });
    });
  };
  
  // Initialize animations
  createFloatingElements();
  setTimeout(addTypingAnimation, 500);
  addSocialHoverEffects();
});
