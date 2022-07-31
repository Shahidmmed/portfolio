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
  img: string;
  github?: string;
  extlink?: string;
};

export const myData: IConfig = {
  personalInfo: {
    linkedIn: "https://www.linkedin.com/in/abdul-shahid-mohammed-6703951b2",
    mail: "shahidmmed@gmail.com",
    twitter: "https://twitter.com/shahidmed",
    github: "https://github.com/shahidmmed",
    resume: "",
    image: "",
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
    title: "Finance Logger",
    summary:
      "Web Application for logging, keeping track of and calculating expenses over selected periods.",
    tools: ["HTML", "CSS", "PostgreSQL", "ASP.NET", "C#", "Typescript"],
    img: "financeLogger.png",
    github: "https://github.com/Shahidmmed/MyFinanceLogger",
  },
];
