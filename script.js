gsap.from("nav", { y: -100, duration: 1, ease: "bounce.out" });

gsap.from(".hero-content h1", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: 0.5
});

gsap.from(".hero-content h3", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.8
});

gsap.from(".hero-content p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 1.1
});

gsap.from(".hero-content button", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 1.4
});

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});
