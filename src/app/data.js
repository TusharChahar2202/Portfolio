/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Movie-Insight",
    description:
      "Responsive web app to explore movies/TV via TMDB API with search, genre filters, and Redux-managed state.",
    date: "2024-01-15",
    demoLink: "https://silly-faloodeh-220392.netlify.app/",
  },
  {
    id: 2,
    name: "Amazon Clone",
    description:
      "E-commerce clone with user auth, add-to-cart, Stripe payments, and order history (React + Firebase + MUI).",
    date: "2023-12-10",
    demoLink: "https://github.com/TusharChahar2202/Amazon_clone",
  },
  {
    id: 3,
    name: "Book-A-Doc",
    description:
      "Full-stack doctor appointment booking with secure scheduling, admin panel, and real-time MongoDB integration.",
    date: "2024-02-05",
    demoLink: "https://github.com/TusharChahar2202/Book_A_Doc",
  },
  {
    id: 4,
    name: "Foodie We",
    description:
      "Restaurant website built with React + Bootstrap 5, with polished navigation, sections, and subtle animations.",
    date: "2023-10-20",
    demoLink: "https://foodiewe-f6004.web.app/",
  },
  {
    id: 5,
    name: "Time-Series Anomaly Detection",
    description:
      "ML pipeline for multivariate time-series anomaly detection; includes data prep, model training, and evaluation.",
    date: "2024-06-01",
    // TODO: replace with the exact repo path for your anomaly detection project:
    demoLink: "https://github.com/TusharChahar2202/Multivariate-Time-Series-Anomaly-Detection.git",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/TusharChahar2202",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/tushar-chahar-357476299",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.instagram.com/tusharchahar22/",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


