//TODO:SKILLS
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import js from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import typescript from "../assets/Typescript.png";
import twcss from "../assets/twcss.png";
//import java from "../assets/java.png";
import pstsql from "../assets/postgreSQL.png";
import mdb from "../assets/mongodb.png";
import node from "../assets/nodejs.png";
import git from "../assets/git.png";
import github from "../assets/github1.png";
import docker from "../assets/docker.webp";
import jest from "../assets/Jest.png";
import playwright from "../assets/Playwright.webp";
import gsap from "../assets/gsap.png";

//TODO:PROYECTOS
import bebidas from "../assets/bebidas.png";
import clima from "../assets/clima.png";
import climats from "../assets/climats.png";
import task from "../assets/uptaskmern.jpg";
import prdmng from "../assets/prodmngts.png";
import cripto from "../assets/project-3.png";
import noticias from "../assets/noticias.png";
import ntfx from "../assets/project-4.png";
import auth from "../assets/auth5.png";
import Beenyl from "../assets/Beenyl.png";
import iphone from "../assets/iphone.png";
import portfolio from "../assets/3dportfolio.png";
import cocktail from "../assets/cocktail.png"
import spylt from "../assets/spylt.png"

//TODO:Contact
import ld from "../assets/linkedin.png";
import army from "../assets/bts.png";
import tt from "../assets/logo.webp";

export const skills = [
  {
    img: html,
    name: "HTML",
  },
  {
    img: css,
    name: "CSS",
  },
  {
    img: bootstrap,
    name: "Bootstrap",
  },
  {
    img: js,
    name: "JavaScript",
  },
  {
    img: reactjs,
    name: "React JS",
  },
  {
    img: typescript,
    name: "Typescript",
  },
  {
    img: twcss,
    name: "TailwindCSS",
  } /*
  {
    img: java,
    name: "Java",
  },*/,
  {
    img: pstsql,
    name: "PostgreSQL",
  },
  {
    img: mdb,
    name: "MongoDB",
  },
  {
    img: node,
    name: "Node.JS",
  },
  {
    img: git,
    name: "Git",
  },
  {
    img: github,
    name: "GitHub",
  },
  {
    img: docker,
    name: "Docker",
  },
  {
    img: jest,
    name: "Jest",
  },
  {
    img: playwright,
    name: "PlayWright",
  },
  {
    img: gsap,
    name: "GSAP",
  },
];

export const projects = [
  {
    _id: "1",
    name: "Weather App",
    image: climats,
    level: "basic",
    description:
      "Page where you can check the weather of default countries, using hooks, useContext, React, JavaScript, HTML, AXIOS for the REST API and for CSS styles",
    category: [
      "React JS",
      "HTML",
      "TailwindCSS",
      "JavaScript",
      "Git",
      "GitHub",
      "Node.JS",
    ],
    repo: "https://github.com/GlendyT/ClimaApp",
    demo: "https://clima-app-tawny.vercel.app/",
  },
  {
    _id: "2",
    name: "News Search",
    image: noticias,
    level: "basic",
    description:
      "Page where you can search for the most relevant news about the default categories, using hooks, useContext, React, JavaScript, HTML, AXIOS for the REST API and for styles, @mui/material @emotion/react @emotion/styled",
    category:
      "React JS" && "HTML" && "JavaScript" && "Git" && "GitHub" && "Node.JS",
    repo: "https://github.com/GlendyT/NoticiasApi",
    demo: "https://noticias-api-black.vercel.app/",
  },
  {
    _id: "3",
    name: "Cryptocurrencies",
    image: cripto,
    level: "basic",
    description:
      "Page to be able to convert cryptocurrencies using React, JavaScript, Hooks, using fetch for the REST API and for styles, CSS @emotion/styled",
    category:
      "React JS" &&
      "HTML" &&
      "JavaScript" &&
      "Git" &&
      "GitHub" &&
      "Node.JS" &&
      "CSS",
    repo: "https://github.com/GlendyT/Criptomonedas",
    demo: "https://app-de-conversion-criptomonedas.netlify.app/",
  },
  {
    _id: "4",
    name: "Drink Finder",
    image: bebidas,
    level: "basic",
    description:
      "Page where you can search for drink recipes with the default categories, using hooks, useContext, React, JavaScript, HTML, AXIOS for the REST API and Bootstrap was used for styles",
    category:
      "React JS" &&
      "HTML" &&
      "Bootstrap" &&
      "JavaScript" &&
      "Git" &&
      "GitHub" &&
      "Node.JS",
    repo: "https://github.com/GlendyT/buscador-bebidas-typescript",
    demo: "https://bebidas-typescript.netlify.app/",
  },
  {
    _id: "5",
    name: "Task Manager FRONTEND MERN",
    image: task,
    level: "advanced",
    description:
      "Page to manage tasks, allows you to create a user, add tasks, add collaborators, delete tasks. Using for the Frontend, React, JavaScript, Hooks, useContext, React-Router-Dom to host the information in different links, AXIOS to connect the database, MongoDB to store the data and Tailwindcss for the styles",
    category:
      "React JS" &&
      "HTML" &&
      "JavaScript" &&
      "Git" &&
      "GitHub" &&
      "Node.JS" &&
      "MongoDB" &&
      "TailwindCSS",
    repo: "https://github.com/GlendyT/merntask_frontend",
    demo: "",
  },
  {
    _id: "6",
    name: "Task Manager BACKEND MERN",
    image: task,
    level: "advanced",
    description:
      "Backend of the MERN project, using the dependencies bcrypt to encrypt the user's password, express to create a multipage, mongoose to connect with MongoDB, JSON Web Token to create Public or Private Key to enter, Nodemailer to confirm the created user",
    category: "JavaScript" && "MongoDB",
    repo: "https://github.com/GlendyT/merntask_backend",
    demo: "https://merntask-frontend-theta.vercel.app/",
  },
  {
    _id: "7",
    name: "NextAuth 5 TS",
    image: auth,
    level: "advanced",
    description:
      "Página utilizando Next-Auth, utilizando las dependencias, zod, bcrypt, uuid. Creando la información a solicitar al usuario en Schema Prisma,",
    category: "TypeScript" && "TailwindCSS",
    repo: "https://github.com/GlendyT/NextAuthVS",
    demo: "https://next-auth-vs.vercel.app/",
  },
  {
    _id: "8",
    name: "Netflix Clone TS",
    image: ntfx,
    level: "advanced",
    description:
      "Pagina Clone de Netflix, con las funciones de crear usuario, iniciar sesión, agregar favoritos, agregar usuarios, almacenando la información de las películas en MongoDB, utilizando Next Auth, AXIOS para traer la información del backend, y dando estilos en TailwindCSS",
    category: "MongoDB" && "TailwindCSS" && "Typescript",
    repo: "https://github.com/GlendyT/Netflix-clone",
    demo: "https://paginanetflixclone.vercel.app/auth",
  },
  {
    _id: "9",
    name: "Weather App TS",
    image: clima,
    level: "basic",
    description:
      "Page where you can check the weather of default countries, using hooks, useContext, Typescript, HTML, AXIOS for the REST API and for styles CSS Modules",
    category: "JavaScript" && "MongoDB" && "Typescript" && "CSS",
    repo: "https://github.com/GlendyT/clima-react-typescript",
    demo: "https://clima-typescript.netlify.app/",
  },
  {
    _id: "10",
    name: " Product Manager Frontend PERN TS",
    image: prdmng,
    level: "advanced",
    description:
      "Page to manage products, allows you to add a product, add price, add availability, delete products. Using for the Frontend, Typescript, JavaScript, Hooks, useContext, React-Router-Dom to host the information in different links, AXIOS to connect the database, PostgreSQL to store the data and Tailwindcss for the styles.",
    category: "JavaScript" && "PostgreSQL",
    repo: "https://github.com/GlendyT/frontend-PERN",
    demo: "https://frontend-pern.vercel.app/",
  },
  {
    _id: "11",
    name: "Product Manager Backend PERN TS",
    image: prdmng,
    level: "advanced",
    description:
      "Backend of the MERN project, using express dependencies to create multipages, supertest, jest for backend testing, swagger to document the API.",
    category: "JavaScript" && "MYSQL" && "TypeScript",
    repo: "https://github.com/GlendyT/backend-PERN",
    demo: "https://frontend-pern.vercel.app/",
  },
  {
    _id: "12",
    name: "Bee-nyl Store",
    image: Beenyl,
    level: "advanced",
    description:
      "Ecommerce of vinyls, creating the database using the ORM of PrismaSchema, creating and connecting the Backend using Express and Prisma, Frontend using Tailwind to give styles using the API previously created to show the information. Implementing Playwright for E2E test and  Jest for UnitTest.",
    category:
      "TypeScript" &&
      "Postgres" &&
      "Express" &&
      "Prisma" &&
      "Docker" &&
      "Jest" &&
      "PlayWright",
    repo: "https://github.com/GlendyT/Backend-TS-Bootcamp",
    demo: "https://github.com/GlendyT/Backend-TS-Bootcamp",
  },
  {
    _id: "13",
    name: "Apple Frontend clone",
    image: iphone,
    level: "animations",
    description: " Web page clone of Apple, with all the animations ",
    category: "JavaScript" && "TailwindCSS" && "GSAP",
    repo: "  https://github.com/GlendyT/gsapiphonecloneUI",
    demo: "https://iphoneclone-ui.vercel.app/ ",
  },
  {
    _id: "14",
    name: "3D Portfolio",
    image: portfolio,
    level: "animations",
    description: " Web page clone with 3D animations using GSAP",
    category: "JavaScript" && "TailwindCSS" && "GSAP",
    repo: " https://github.com/GlendyT/3dportofioliogsap",
    demo: "https://3dportofioliogsap.vercel.app/ ",
  },
  {
    _id: "15",
    name: "Cocktail Bar",
    image: cocktail,
    level: "animations",
    description: "Cocktail Bar with using GSAP",
    category: "JavaScript" && "TailwindCSS" && "GSAP",
    repo: "https://github.com/GlendyT/gsap-tutorial",
    demo: "https://gsap-tutorial-mu.vercel.app/",
  },
    {
    _id: "16",
    name: "Spylt Clone",
    image: spylt,
    level: "animations",
    description: "Spylt Clone with using GSAP",
    category: "JavaScript" && "TailwindCSS" && "GSAP",
    repo: "https://github.com/GlendyT/gsap-awards-tutorial",
    demo: "https://gsap-awards-tutorial.vercel.app/",
  },
];

export const contact = [
  {
    id: 1,
    cv: "/public/CV GLENDY TUYUC DESARROLLADORA WEB ESPAÑOL.pdf",
    name: "CV in Spanish",
  },
  {
    id: 2,
    cv: "/public/CV GLENDY TUYUC WEB DEVELOPER ENGLISH.pdf",
    name: "CV in English",
  },
];

export const social = [
  {
    id: 1,
    sociallink: "https://github.com/GlendyT",
    img: github,
    name: "GitHub",
  },
  {
    id: 2,
    sociallink: "https://www.linkedin.com/in/glendy-tuyuc-864954275",
    img: ld,
    name: "LinkedIn",
  },
];

export const about = [
  {
    id: 1,
    year: "2024",
    study: "Typescript Developer Bootcamp Laserants",
  },
  {
    id: 2,
    year: "2023",
    study: "University - Stil in Process",
  },
  {
    id: 3,
    year: "2018-2019",
    study: "Associate´s Degree",
  },
];

export const story = [
  {
    id: 1,
    briefstory:
      "I am a student of Systems Engineering, Web developer and starting in the world of Mobile Application Development, which is where I can find my self doing one of the things that I love coding, searching and solving errors is enjoyable to me. I am a positive, curious and hard working person, trying always to help and share my acknowladge and at the same time improving my soft and technical skills. I created along with my sister TTech Designers Comalapa and The Magic Shop",
  },
];

export const experience = [
  {
    id: 1,
    name: "TTech Designers",
    web: "https://ttechdesigners.com/",
    image: tt,
  },
  {
    id: 2,
    name: "The Magic Shop",
    web: "https://themagicshop.vercel.app/",
    image: army,
  },
];

export const navbar = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
  },
  {
    id: 3,
    name: "Skills",
    link: "#skills",
  },
  {
    id: 4,
    name: "Projects",
    link: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    link: "#contact",
  },
];
