import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  c,
  unity,
  s,
  ss,
  sss,
  ssss,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // {
  //   title: "Web Developer",
  //   icon: web,
  // },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "c#S",
    icon: c,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },

  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "XAMK South-Eastern Finland University of Applied Sciences",
    company_name: " Introduction to Video Games Creation | IVGC Online",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - December 2024",
    points: [
      "Major: Unity Game Engine & Game Programming in C#",
      "Minor: Game Desigh ",
    ],
  },
  {
    title: "Indira Gandhi National Open University (IGNOU)",
    company_name: "Masters in Computer Application(MCA)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024 - Ongoing",
    points: [
      "Major: Software Engineering, Data Science,",
      "Minor: AI & Machine Learning, and Cloud Computing",
    ],
    description: "",
  },
  {
    title: "MG University ",
    company_name: " Bachelor's in Computer Application (BCA)",
    icon: shopify,
    iconBg: "#383E56",
    date: " 2020 - 2023 ",
    points: [
      "Major: Software Engineering, C Programming, Data Structures",
      " Minor: DBMS, Computer Networks",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mobile Snake Game",
    description: "I learned to **configure Android device for game development**, added intuitive **touch controls** to enhance the player experience, implement **simple procedural generation** for dynamic gameplay, **deployed** my finished game to a mobile platform.",
    points: [
    ],
    // points: [
    //   "Mobile Game, Associated with Cambridge Academy of Gaming and Innovation ",
    //   "Implement simple procedural generation for dynamic gameplay. ",
    // ],
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
    video: "https://www.youtube.com/embed/qWLasXzgnOI?si=sjgTN2khiI3JDUc5", // Added video link
    image: { ssss },
    tags: [
      {
        name: "Unity",

        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },

      {
        name: "04-2024 - 07-2024",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://https://github.com/Tee8590/SnakeGamegithub.com/",
  },
  {
    name: "Merlin Demon War",
    description: "I learned the **mechanics of the card combat genre**, gained expertise in **importing and animating 2D assets**, implemented **randomization and interaction systems for dynamic gameplay**, added **sound effects** to enhance the player experience, and developed a polished and fully functional **card combat game**.",
    video: "https://www.youtube.com/embed/V56BQXasTvc?si=OvvcOqro3ECes3i_", // Added video link
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "12-2023 - 01-2024",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "The Return",
    description: "Learnd to build flexible and scalable game architectures while gaining practical experience in coding and game design, culminating in the completion of a fully functional text-based adventure game, The Return.",
    video: "https://www.youtube.com/embed/zY8P4I-hO5U?si=mPSWRpjvS0y5Qk31",
    tags: [
      {
        name: "Unity",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "12-2023 - 01-2024",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Tee8590/The-Return- ",
    screenshots: [
      {
        image: s, // Import or use a URL
        caption: "Main Menu UI",
      },
      {
        image: ss, // Import or use a URL
        caption: "Gameplay Screen",
      },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects };
