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
      "https://res.cloudinary.com/daj4pxkwx/image/upload/v1693345492/ABDUL-SHAHID_MOHAMMED_resume_spp9z1.pdf",
    //"https://res.cloudinary.com/daj4pxkwx/image/upload/v1662213699/personal/Abdul-Shahid_Mohammed_resume_ruawzb.pdf",
    image:
      "https://res.cloudinary.com/daj4pxkwx/image/upload/v1661209680/personal/profileImage_xzma0j.jpg",
  },
};

export const featuredProjects = [
  {
    title: "Finance Logger",
    summary:
      "Web Application for logging, keeping track of and calculating expenses over selected periods.",
    tools: ["HTML", "CSS", "PostgreSQL", "ASP.NET", "C#", "Typescript"],
    img: "financeLogger.png",
    github: "https://github.com/Shahidmmed/MyFinanceLogger",
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
