type IConfig = {
  personalInfo: {
    linkedIn: string;
    mail: string;
    twitter: string;
    github: string;
    resume: string;
    image: string;
  };
};

export type IProjects = {
  title: string;
  summary: string;
  tools: string[];
  img?: string;
  github?: string;
  extlink?: string;
};

export const myData: IConfig = {
  personalInfo: {
    linkedIn: "https://www.linkedin.com/in/abdul-shahid-mohammed-6703951b2",
    mail: "shahidmmed@gmail.com",
    twitter: "https://twitter.com/shahidmed",
    github: "https://github.com/shahidmmed",
    resume:
      "https://res.cloudinary.com/daj4pxkwx/image/upload/v1729253778/Abdul-Shahid_Mohammed_resume_amxxgp.pdf",
    image:
      "https://res.cloudinary.com/daj4pxkwx/image/upload/v1661209680/personal/profileImage_xzma0j.jpg",
  },
};

export const featuredProjects = [
  {
    title: "Shop Hashim",
    summary:
      "E-commerce platform for a company selling merchandise, featuring integrated payment API.",
    tools: ["HTML", "CSS", "Javascript", "Shopify", "Paystack"],
    img: "hash.png",
    extlink: "https://shophashim.com/",
  },
  {
    title: "Droff Admin",
    summary:
      "Admin portal for Droff delivery service to oversee and manage deliveries.",
    tools: ["HTML", "CSS", "React", "Typescript"],
    img: "drofflogistics.png",
    extlink: "https://app-dev.drofflogistics.com/deliveries",
  },
  {
    title: "NABS Jobs and Trips",
    summary:
      "Web application for Nabs agency clients to book trips and submit job applications.",
    tools: ["HTML", "CSS", "PostgreSQL", "ASP.NET", "C#", "Typescript"],
    img: "nabs.png",
    extlink: "https://jobs.nabsgroupgh.com/",
  },
  {
    title: "Enabling The Disabled",
    summary: "Company site for a charity organization",
    tools: ["HTML", "CSS", "React", "Typescript"],
    img: "enablingthedisabled.png",
    extlink: "https://enablingthedisabled.org/",
  },
  {
    title: "Admin Dashboard",
    summary:
      "React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and Editor",
    tools: ["HTML", "CSS", "React", "Javascript", "Tailwind", "Firebase"],
    img: "adminDashboard.png",
    github: "https://github.com/Shahidmmed/dashboard_app",
    extlink: "https://dashboard-app-7672b.web.app/",
  },
  {
    title: "Sodoku generator and solver",
    summary:
      "An application that implements a backtracking algorithm for solving sodoku puzzles and generating new puzzles.",
    tools: ["HTML", "CSS", "React", "Javascript"],
    img: "sudoku.png",
    github: "https://github.com/Shahidmmed/sodoku-solver",
    extlink: "http://shahidmmed.github.io/sodoku-solver",
  },
  {
    title: "Netflix clone",
    summary: "Netflix clone with trailer preview web application.",
    tools: [
      "HTML",
      "CSS",
      "React",
      "Javascript",
      "REST",
      "Tailwind",
      "Firebase",
    ],
    img: "netflixUi.png",
    github: "https://github.com/Shahidmmed/netflix_ui",
    extlink: "https://netflix-clone-63557.web.app/",
  },
  {
    title: "Amazon clone",
    summary:
      "Amazon clone with user authentication, cart, checkout and payment processing functionalities.",
    tools: [
      "HTML",
      "CSS",
      "React",
      "Javascript",
      "REST",
      "Tailwind",
      "Firebase",
    ],
    img: "amazonUi.png",
    github: "https://github.com/Shahidmmed/amazon_clone",
    extlink: "https://clone-89d16.web.app/",
  },
];

export const otherProjects = [
  {
    title: "Data Structures in React",
    summary: "An implementation of some data structures in a react application",
    tools: ["HTML", "CSS", "React", "Redux", "Javascript"],
    github: "https://github.com/Shahidmmed/react-data-structures",
    extlink: "https://shahidmmed.github.io/react-data-structures/",
  },
  {
    title: "React Reusable components",
    summary:
      "Custom tailwind react reusable components such as, pagination, modal, tabs, otp, etc.",
    tools: ["React", "Redux", "CSS", "Tailwind", "Typescript"],
    github: "https://github.com/Shahidmmed/react-custom-components",
  },
  {
    title: "Chat App",
    summary: "A simple chat application utilizing firebase database and react",
    tools: ["HTML", "CSS", "React", "Tailwind", "Firebase", "Javascript"],
    github: "https://github.com/Shahidmmed/chatapp",
    extlink: "https://chat-app-9fbb5.web.app/chat",
  },
  {
    title: "Weather App",
    summary:
      "Weather Application that displays detailed information on the weather of input location.",
    tools: ["HTML", "CSS", "Svelte", "REST", "Javascript"],
    github: "https://github.com/Shahidmmed/WeatherApp",
  },
  {
    title: "RandomUser",
    summary: "Web Application for generating and displaying random users",
    tools: ["HTML", "CSS", "React", "Node", "REST", "Javascript"],
    github: "https://github.com/Shahidmmed/randomuser",
  },
];
