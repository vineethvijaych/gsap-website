document.addEventListener("DOMContentLoaded", () => {
  // Custom Cursor
  const cursor = document.querySelector("#cursor");
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX - 10,
      y: e.clientY - 10,
      duration: 0.1,
    });
  });

  // Navigation Animation
  gsap.from("nav h1, .part2 h4, .part2 button", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Hero Section Animation
  gsap.from(".hero-text h1, .hero-text p, .hero-text button", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
    },
  });

  gsap.from(".hero-image img", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 80%",
    },
  });

  // Partners Section Animation
  gsap.from(".partners svg", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".partners",
      start: "top 80%",
    },
  });

  // Services Section Animation
  gsap.from(".services h3, .services p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services",
      start: "top 80%",
    },
  });

  gsap.from(".service-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".container",
      start: "top 80%",
    },
  });

  // CTA Section Animation
  gsap.from(".cta-text h3, .cta-text p, .cta-text button", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
    },
  });

  gsap.from(".cta-image img", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
    },
  });

  // Final Section Animation
  gsap.from(".image", {
    scale: 1.2,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#main",
      start: "top 80%",
    },
  });

  gsap.from(".heading, .booking-button", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#main",
      start: "top 80%",
    },
  });

  // Footer Animation
  gsap.from(".footer-logo, .footer-links, .footer-contact, .footer-social", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "footer",
      start: "top 80%",
    },
  });
});
