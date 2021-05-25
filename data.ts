import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "I'm here to solve any problem in your company!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React Js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Elixir",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Spring Boot",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Design",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "DashBoard de Gráficos",
    description:
      "Web sites de demostração de análise de dados",
    image_path: "/images/1.png",
    deployed_url: "!#",
    github_url: "!#",
    category: [ "angular","node", "javaScript"],
    key_techs: ["Angular", "Html", "Css", "JavaScript"],
  },
  {
    name: "Formulário",
    image_path: "/images/2.png",
    deployed_url: "!#",
    github_url: "!#",
    category: ["node", "javaScript"],
    description:
      "Formulário de preenchimento de dados",
    key_techs: ["JavaScript", "Html", "Css"],
  },

  {
    name: "Api de Food de Comida",
    image_path: "/images/3.png",
    deployed_url: "!#",
    github_url: "!#",
    category: ["node", "javaScript"],
    description:
      "Api desenvolvida para delivery de comida",
    key_techs: ["Node", "JavaScript", "Html", "Css"],
  },

  {
    name: "Gerenciamento de Estoque",
    image_path: "/images/4.png",
    deployed_url: "!#",
    github_url: "!#",
    category: ["java"],
    description:
      "Desenvolvido para gerenciamento de estoque",
    key_techs: ["Java", "Postgres"],
  },

  {
    name: "PDV de Vendas",
    image_path: "/images/5.png",
    deployed_url: "!#",
    github_url: "!#",
    category: ["java"],
    description:
      "Desenvolvido para Mercadinhos",
    key_techs: ["Java"],
  },

  {
    name: "Demo de Food",
    image_path: "/images/6.png",
    deployed_url: "!#",
    github_url: "!#",
    category: ["node","javaScript"],
    description:
      "Demostração de Food",
    key_techs: ["JavaScript", "Html", "Css"],
  },
  {
    name: "Portfólio",
    image_path: "/images/7.png",
    deployed_url: "!#",
    github_url: "!#",
    category: ["node", "javaScript"],
    description:
      "Portfólio desenvolvido para demostração de projetos do GitHub",
    key_techs: ["JavaScript", "Html", "Css"],
  },
  {
    name: "Urna Eletrônica",
    image_path: "/images/8.png",
    deployed_url: "!#",
    github_url: "!#",
    category: ["node","javaScript"],
    description:
      "Demostração de uma Urna eletrônica",
    key_techs: ["JavaScript", "Html", "Css"],
  },
  {
    name: "Apresentação de SlideShow",
    image_path: "/images/9.png",
    deployed_url: "!#",
    github_url: "!#",
    category: ["node", "javaScript"],
    description:
      "Apresentação de Imagem",
    key_techs: ["JavaScript", "Html", "Css"],
  },
];
