document.addEventListener('DOMContentLoaded', function() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Initial delay before starting animations
  const initialDelay = 0.6;
  
  // Ensure h1 is visible initially
  gsap.set('h1', {
    opacity: 1,
    y: 0
  });
  
  // Staggered entrance animation for the header and role cards
  gsap.fromTo('h1', 
    { opacity: 0, y: -50 }, // starting state
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      delay: initialDelay, 
      ease: 'back.out(1.7)',
      clearProps: 'all' // This ensures all properties are cleared after animation
    }
  );
  
  gsap.from('.grid.cards > li', {
    opacity: 0,
    y: 30,
    stagger: 0.25, // Increased stagger time between each item
    duration: 0.8,
    ease: 'power2.out',
    delay: initialDelay + 0.7 // Delayed start after the header animation
  });
  
  // Animate section headers as they scroll into view
  gsap.utils.toArray('h2').forEach((header, index) => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: -50,
      duration: 1.0, // Slightly longer duration
      delay: 0.2, // Small delay before starting
      ease: 'power2.out'
    });
  });
  
  // Animate technical expertise cards with a staggered effect
  const techCards = gsap.utils.toArray('#technical-expertise .grid.cards > li');
  techCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 0.3 + (index * 0.2), // Base delay plus increased stagger time
      ease: 'power2.out'
    });
  });
  
  // Animate social links with a bounce effect
  gsap.from('.social-links .md-button', {
    scrollTrigger: {
      trigger: '.social-links',
      start: 'top 90%',
      toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 20,
    stagger: 0.1, // Increased stagger time
    duration: 0.8, // Longer duration
    delay: 0.5, // Added delay before starting
    ease: 'back.out(1.7)',
    clearProps: 'all' // Ensure properties are cleared after animation
  });
  
  // Add hover animations for cards
  const cards = document.querySelectorAll('.grid.cards > li');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        duration: 0.3,
        ease: 'power2.in'
      });
    });
  });
});


