export type Category = "web" | "mobile";

export interface Project {
  cat: Category;
  title: string;
  desc: string;
  tags: string[];
  live: string;
  liveLabel: string;
  src?: string;
  img: string;
}

export const PROJECTS: Project[] = [
  {
    cat: "web",
    title: "3D Card Gallery",
    desc: "An interactive WebGL gallery where visitors rotate through a carousel of 3D cards. Smooth, performant, built on a React + Three.js pipeline.",
    tags: ["react", "next.js", "three.js"],
    live: "https://3-d-card-gallery.vercel.app/",
    liveLabel: "LIVE",
    src: "https://github.com/Micheduc25/3D-Card-Gallery",
    img: "/images/cards-gallery.jpg",
  },
  {
    cat: "web",
    title: "StudentTrackr — Web",
    desc: "A platform linking parents and schools so families can follow a child's academic progress in real time. Marks, classes and reports in one dashboard.",
    tags: ["dart", "flutter", "firebase"],
    live: "https://student-trackr.42web.io/",
    liveLabel: "LIVE",
    src: "https://github.com/Micheduc25/StudentTrackr",
    img: "/images/student-trackr-web.png",
  },
  {
    cat: "web",
    title: "Screel",
    desc: "A community platform for tech enthusiasts and developers to connect, share and find each other. Vue 3 front end with a Tailwind design system.",
    tags: ["vue.js", "javascript", "tailwind"],
    live: "https://screel.vercel.app/",
    liveLabel: "LIVE",
    src: "https://github.com/Micheduc25/screel",
    img: "/images/screel.jpg",
  },
  {
    cat: "web",
    title: "MadTech Website",
    desc: "A modern marketing site for a technology company — fast, responsive and hand-built with vanilla web fundamentals.",
    tags: ["html5", "css3", "javascript"],
    live: "https://madtech.vercel.app/",
    liveLabel: "LIVE",
    src: "https://github.com/Micheduc25/madtech-website",
    img: "/images/madtech-website.jpg",
  },
  {
    cat: "web",
    title: "Customized Form",
    desc: "A polished multi-step form experience inspired by Littlework, with custom validation and transitions. Vue 3 + Tailwind.",
    tags: ["vue 3", "javascript", "tailwind"],
    live: "https://customized-form-ruddy.vercel.app/",
    liveLabel: "LIVE",
    src: "https://github.com/Micheduc25/customized-form/",
    img: "/images/custom-form.jpg",
  },
  {
    cat: "web",
    title: "Equatorial OS",
    desc: "Corporate website for an oil-and-gas services company. Built and themed on WordPress with custom PHP and JavaScript.",
    tags: ["wordpress", "php", "javascript"],
    live: "https://equatorial-os.com/",
    liveLabel: "LIVE",
    img: "/images/eq-os-website.jpg",
  },
  {
    cat: "mobile",
    title: "Find Home",
    desc: "A mobile app that helps people locate and book rooms and houses to rent — published on Google Play. Flutter UI over a Firebase backend.",
    tags: ["dart", "flutter", "firebase"],
    live: "https://play.google.com/store/apps/details?id=com.dopetech.home_finder",
    liveLabel: "GET APP",
    src: "https://github.com/innovcmr/Find-Home/",
    img: "/images/find-home.jpg",
  },
  {
    cat: "mobile",
    title: "StudentTrackr — Mobile",
    desc: "The companion Android app for StudentTrackr — parents follow grades and school updates on the go. Live on Google Play.",
    tags: ["dart", "flutter", "firebase"],
    live: "https://play.google.com/store/apps/details?id=com.Micheduc25.student_tracker.student_tracker",
    liveLabel: "GET APP",
    src: "https://github.com/Micheduc25/StudentTrackr",
    img: "/images/student-trackr.png",
  },
  {
    cat: "mobile",
    title: "BlueByte",
    desc: "A measurement tool that lets users annotate dimensions onto photos of buildings and furniture. Flutter with on-device SQLite storage.",
    tags: ["dart", "flutter", "sqlite"],
    live: "https://apkpure.com/bluebyte/nashma.com.bluebyte",
    liveLabel: "GET APP",
    img: "/images/bluebyte.jpg",
  },
  {
    cat: "mobile",
    title: "BMI Calculator",
    desc: "A clean, fast body-mass-index app with a focus on tactile UI and motion. Published on Google Play.",
    tags: ["dart", "flutter"],
    live: "https://play.google.com/store/apps/details?id=com.micheduc25.bmicalculator&gl=US",
    liveLabel: "GET APP",
    img: "/images/bmi-calculator.jpg",
  },
];
