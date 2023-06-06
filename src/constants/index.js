import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  ionic,
  nuxt,
  vue,
  graphql,
  carrent,
  jobit,
  tripguide,
  threejs,
  Logo,
  hng,
  edu,
  centenumLogo,
  cbcLogo,
  manage,
  lulu,
  foodliky,
  rps,
  homeview,
  prop,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer (Ionic)",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Vue",
    icon: vue,
  },
  {
    name: "Nuxt",
    icon: nuxt,
  },
  {
    name: "ionic",
    icon: ionic,
  },
  {
    name: "graphql",
    icon: graphql,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "CBC Africa",
    icon: cbcLogo,
    iconBg: "#000",
    date: "April 2022 - July 2022",
    points: [
      "Learned new skills and applied to daily tasks to improve efficiency and productivity.",
      "Conducted research, gathered information from multiple sources and presented results.",
      "Collaborated with team members to achieve target results.",
      "Resolved problems, improved operations and provided exceptional service.",
      "Observed and learnt from my rather more experienced team members",
    ],
  },
  {
    title: "Front end Developer",
    company_name: "Kadrum",
    icon: edu,
    iconBg: "#000",
    date: "July 2022 - Sept 2022",
    points: [
      "Handled creating learning material to help beginners to get familiar with coding.",
      "Research best ways to not only teach but learn to develop.",
      "Created over a hundred interactive mini websites to help beginners code better.",
    ],
  },
  {
    title: "Front end Developer",
    company_name: "HNG",
    icon: hng,
    iconBg: "#000",
    date: "Sept 2022 - Sept 2022",
    points: [
      "Translated designs and wireframes into high-quality code using HTML, CSS, JavaScript, React and other modern frameworks.",
      "Worked closely with an AGILE team consisting of project managers, developers, designers, and other cross-functional teams (Marketing, etc.).",
      "Participated in testing of developed code before deployment to production using Storybook and AJAX.",
      "Analyzed requirements to determine the best approach for developing new features or improving existing functionality.",
    ],
  },
  {
    title: "Front end Developer",
    company_name: "LULU",
    icon: Logo,
    iconBg: "#000",
    date: "Jan 2023 - Present",
    points: [
      "Built an interactive language based game to help preverse language in africa.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front end Developer",
    company_name: "Centenum",
    icon: centenumLogo,
    iconBg: "#000",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using Nuxt.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Manage",
    description:
      "Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: manage,
    source_code_link: "https://hamjadidris.github.io/manage/",
  },
  {
    name: "Foodlikly",
    description:
      "A basic website for a an imagninary restaurant called Foodlikly.",
    tags: [
      {
        name: "hmtl",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: foodliky,
    source_code_link: "https://hamjadidris.github.io/FoodLikly/",
  },
  {
    name: "Homesphere",
    description:
      "Its just a good looking house.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: homeview,
    source_code_link: "homesphere-kohl.vercel.app",
  },
  {
    name: "LULU",
    description: "A language based game to help preserve languages in Africa.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lulu,
    source_code_link: "lulu-game.vercel.app",
  },
  {
    name: "Janken Pon",
    description: "A rock, paper, scissors game.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rps,
    source_code_link: "https://hamjadidris.github.io/RockPaperScissorsJS/",
  },
  {
    name: "Centenum Prop",
    description:
      "Web-based platform used to take a view of IRE, a buzzing real estate powered by nature and technology, but created with you in mind.",
    tags: [
      {
        name: "nuxt",
        color: "blue-text-gradient",
      },
      {
        name: "apollo",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: prop,
    source_code_link: "https://ire.centenum.com/",
  },
];

export { services, technologies, experiences, projects };
