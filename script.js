}
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from("nav", { 
  y: -100, 
  duration: 1, 
  ease: "power3.out" 
});

// Hero animations
gsap.from(".hero-content h1", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 0.3
});

gsap.from(".hero-content h3", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.6
});

gsap.from(".hero-content p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.9
});

gsap.from(".hero-content button", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 1.2
});

// Animate sections on scroll
document.querySelectorAll('section').forEach((section, index) => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    delay: index * 0.1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

// Skill cards stagger animation
gsap.from(".skill-card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 70%"
  }
});

// Project cards stagger animation
gsap.from(".project-card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#projects",
    start: "top 70%"
  }
});
