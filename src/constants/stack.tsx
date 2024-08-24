import {
  SiCapacitor,
  SiDocker,
  SiExpress,
  SiFastify,
  SiGit,
  SiGithub,
  SiKoa,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";

export const frontendStack = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "React.js",
    icon: <SiReact color="#61DBFB" />,
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss color="#06V6D4" />,
  },
];
export const mobileStack = [
  {
    name: "React native",
    icon: <SiReact color="#087EA4" />,
  },
  {
    name: "Capacitor",
    icon: <SiCapacitor color="#4FBAFE" />,
  },
];

export const backendStack = [
  {
    name: "Fastify",
    icon: <SiFastify />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
];

export const databaseStack = [
  {
    name: "Mysql",
    icon: <SiMysql color="#00758f" />,
  },
  {
    name: "Mongodb",
    icon: <SiMongodb color="#3FA037" />,
  },
  {
    name: "Redis",
    icon: <SiRedis color="#D82C20" />,
  },
];

export const runtimeStack = [
  {
    name: "Node.js",
    icon: <SiNodedotjs color="#3C873A" />,
  },
];

export const toolsStack = [
  {
    name: "Docker",
    icon: <SiDocker color="#0DB7ED" />,
  },

  {
    name: "Git",
    icon: <SiGit color="#F1502F" />,
  },
  {
    name: "Github",
    icon: <SiGithub />,
  },
];

export const stacks = [
  { name: "Frontend", stack: frontendStack },
  { name: "Mobile", stack: mobileStack },
  { name: "Backend", stack: backendStack },
  { name: "Database", stack: databaseStack },
  { name: "Runtinme", stack: runtimeStack },
  { name: "Tools", stack: toolsStack },
];
