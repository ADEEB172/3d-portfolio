import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  bootstrap,
  jwt,
  express,
  sql,
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
  threejs,
  watch,
  pokemon,
  budget,
  forever,
  imagify,
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
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: " Web Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Forever - An E-Commerce Website",
    description:
      "E-commerce website that allows users to browse and purchase products online. It features a clean and modern design, easy navigation, and a secure checkout process.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },
        {
        name: "Mongo db",
        color: "purple-text-gradient",
      },
    ],
    image: forever,
    source_code_link: "https://github.com/ADEEB172/e-commerce-app",
    live_demo_link: "https://forever-frontend-three-weld.vercel.app",
  },
  {
    name: "Imagify - An Image Editing Website",
    description:
      "Web application that allows users to edit and manipulate images online. It features a user-friendly interface, a wide range of editing tools, and the ability to save and share edited images.",
    tags: [
          {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },
        {
        name: "Mongo db",
        color: "purple-text-gradient",
      },
    ],
    image: imagify,
    source_code_link: "https://github.com/ADEEB172/Imagify",
    live_demo_link: "https://imagify-two-tau.vercel.app",
  },
   {
    name: " Budget Tracker",
    description:
  "A full-stack budget management web application designed to help users track their budget and daily expenses in one place. Users can set a total budget, add, edit, and delete expenses, monitor total spending, and view their remaining balance through a clean and responsive dashboard.",
    tags: [
          {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "Node js",
        color: "pink-text-gradient",
      },
        {
        name: "Mongo db",
        color: "purple-text-gradient",
      },
    ],
    image: budget,
    source_code_link: "https://github.com/ADEEB172/Budget-Tracker",
    live_demo_link: "https://bachat-two.vercel.app",
  },
  {
    name: "A Watch Website",
    description:
      "A fully responsive watch website that allows users to browse and purchase watches online. It features a clean and modern design, easy navigation, and a secure checkout process.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: watch,
    source_code_link: "https://github.com/ADEEB172/chronovex--",
    live_demo_link: "https://chronovex.vercel.app/",
  },
  {
    name: "Pokemon Finder App",
    description:
      "Web application that enables users to search for Pokemon and view their details, including stats, moves, and evolutions.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "pokemon-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link:
      "https://github.com/ADEEB172/pokemon-explorer/tree/main/pokemon-app",
    live_demo_link: "https://pokemon-app-one-nu.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
