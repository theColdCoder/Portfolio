
import motherBenedictImage from "../assets/images/motherBenedictschool.png";

const PROJECTS_DATA = [
  {
    id: "proj-1",
    title: "Software Engineer - MotherBenedict Secondary School",
    description:
      "A web application for visualizing personalized Spotify data. View your top artists, tracks, and recently played songs, alongside detailed audio feature analysis. Generates custom recommendations based on profile seeds.",
    techStack: [
      "React",
      "Express.js",
      "Node.js",
      "Spotify API",
      "Tailwind CSS",
    ],
    date: "2023-2024",
    projectUrl: "https://motherbenedictschool.com",
    thumbnail: motherBenedictImage,
    thumbnailAlt: "MotherBenedict Secondary School website",
  },
  {
    id: "proj-2",
    title: "Halcyon Developer Theme",
    description:
      "A minimal, distraction-free dark ocean blue theme built for modern code editors. Fine-tuned contrast balances color theory rules across syntax configurations. Deployed with over 10,000 active installs.",
    techStack: ["JSON", "VS Code API", "Color Theory"],
    projectUrl: "https://github.com",
    thumbnailText: "VS Code",
  },
  {
    id: "proj-3",
    title: "E-Commerce Design System",
    description:
      "A highly accessible, pixel-perfect modular component library engineered for large-scale digital storefronts. Fully structured around semantic WCAG compliance rules and verified with Storybook testing panels.",
    techStack: ["TypeScript", "React", "Storybook", "A11y Testing"],
    projectUrl: "https://github.com",
    thumbnailText: "UI Library",
  },
];

export default PROJECTS_DATA;
