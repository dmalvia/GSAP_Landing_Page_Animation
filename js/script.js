const slider = document.querySelectorAll(".slider");
const banner = document.querySelectorAll(".banner");
const bannerTitle = document.querySelectorAll(".banner__title");
const logo = document.querySelectorAll(".logo");
const nav = document.querySelectorAll("nav");

const t1 = new TimelineMax();

t1.fromTo(banner[0], 1, { x: "-100%" }, { x: "-5%", ease: Power2.easeInOut });
t1.fromTo(
  bannerTitle[0],
  1.1,
  { opacity: 0, top: "100%" },
  { opacity: 1, top: "50%", ease: Power2.easeInOut }
);
t1.fromTo(
  banner[1],
  1,
  { y: "-140%", rotation: 27 },
  { y: "0%", rotation: 0, ease: Power2.easeInOut }
);
t1.fromTo(
  bannerTitle[1],
  1.1,
  { opacity: 0, rotation: 100 },
  { opacity: 1, rotation: 0, ease: Power2.easeInOut }
);
t1.fromTo(banner[2], 1, { x: "120%" }, { x: "5%", ease: Power2.easeInOut });
t1.fromTo(
  bannerTitle[2],
  1.1,
  { opacity: 0, x: -30 },
  { opacity: 1, x: 0, ease: Power2.easeInOut }
);

t1.fromTo(slider[0], 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut });

t1.fromTo(
  slider[1],
  1,
  { x: "100%" },
  { x: "0", ease: Power2.easeInOut },
  "-=1"
);
t1.fromTo(
  logo,
  1.1,
  { opacity: 0, rotation: 100 },
  { opacity: 1, rotation: 0, ease: Power2.easeInOut }
);
t1.fromTo(
  nav,
  1.1,
  { opacity: 0, rotation: 100 },
  { opacity: 1, rotation: 0, ease: Power2.easeInOut }
);
