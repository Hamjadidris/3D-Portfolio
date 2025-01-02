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
  threejs,
  Logo,
  hng,
  edu,
  centenumLogo,
  hairluxe,
  cbcLogo,
  proceduralyGeneratedAnimation,
  frequencyScreenshot,
  // foodliky,
  plateauIcon,
  flappyScreenshot,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile Developer (Ionic)",
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
    date: "Jan 2023 - Nov 2023",
    points: [
      "Collaborated with a team of developers and designers to deploy rapid development and deployment processes using Git version control",
      "Granted additional code review permissions after demonstrating strong attention to detail that led to a 25% decrease in code errors",
      "Provided support to senior front-end developers after becoming proficient in NUXT JS, resulting a in stronger, more efficient tech team",
      "Stayed up-to-date with emerging technologies and frameworks, resulting in a 20% increase in team efficiency and project success rate.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Hairluxe",
    icon: hairluxe,
    iconBg: "#fff",
    date: "March 2023 - Oct 2023",
    points: [
      "Led full stack development for an E-commerce website, resulting in 25% faster loading times and an improved user experience",
      "Integrated a wide range of third-party services and components like payment gateways, emailing services and geo-location services.",
      "Developed and maintained back-end services and APIs using Prisma and PostgreSQL, resulting in a 30% increase in system performance and a 25% reduction in operational costs.",
      "Developed databases and data storage solutions, improving data retrieval times and reducing data loss by 30%.",
      "Built a fully custom administration web app for editing, managing and analyzing, which increased the customer service by 90% and improved the efficiency of operating by over 25%.",
    ],
  },
  {
    title: "Front end Developer",
    company_name: "PLASIEC",
    icon: plateauIcon,
    iconBg: "#fff",
    date: "July 2023 - Sept 2023",
    points: [
      "Built a voters verification system app for the electoral body of the Plateau state government of Nigeria.",
      "Due to the data sensitive nature of a voters verification system, security was paramount during development earning the app a 100% penetration test score.",
      "Increased vote security and reduced the voting process for each voter by over 45%.",
      "Developed insightful realtime dashboards to visualise and monitor all voting activities from not only the voters but also the assigned government agents.",
    ],
  },
  {
    title: "Lead Front end Developer",
    company_name: "Centenum",
    icon: centenumLogo,
    iconBg: "#000",
    date: "Nov 2023 - Present",
    points: [
      "Consolidated and implemented the necessary coding processes and collaboration efforts to integrate back-end APIs and services within the existing web application",
      "Worked closely with other developers and product team to ensures smooth developer experience and scope of future projects and innovations",
      "Conducted regular code reviews and mentored junior developers, resulting in a 30% improvement in code quality and adherence to coding standards",
      "Actively participated in the evaluation and selection of new technologies and tools to improve development processes.",
      "Developed and maintained technical documentation for the front-end codebase, resulting in a 20% reduction in onboarding times for new developers.",
    ],
  },
];

const projects = [
  {
    name: "Procedurally Generated Animation",
    description: "Simulating animal movement with javascript",
    tags: [
      {
        name: "Vanilla Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "matter.js",
        color: "pink-text-gradient",
      },
    ],
    image: proceduralyGeneratedAnimation,
    source_code_link:
      "https://hamjadidris.github.io/procedurally-generated-animation/",
  },
  {
    name: "Flappy cars",
    description: "Flappy bird but silly cats 😂",
    tags: [
      {
        name: "Vanilla Javascript",
        color: "blue-text-gradient",
      },
    ],
    image: flappyScreenshot,
    source_code_link: "https://hamjadidris.github.io/flappy-cars/",
  },
  // {
  //   name: "Foodlikly",
  //   description:
  //     "A basic website for a an imagninary restaurant called Foodlikly.",
  //   tags: [
  //     {
  //       name: "hmtl",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: foodliky,
  //   source_code_link: "https://hamjadidris.github.io/FoodLikly/",
  // },
  {
    name: "Frequency Noise",
    description: "Audio frequency with SVGs",
    tags: [
      {
        name: "Vanilla Javascript",
        color: "blue-text-gradient",
      },
    ],
    image: frequencyScreenshot,
    source_code_link: "https://hamjadidris.github.io/Frequency-Noise/",
  },
];

export { services, technologies, experiences, projects };
