//TODO:SKILLS
import html from "../assets/html.png"
import css from "../assets/css.png"
import bootstrap from "../assets/bootstrap.png"
import js from "../assets/javascript.png"
import reactjs from "../assets/reactjs.png"
import typescript from "../assets/Typescript.png"
import twcss from "../assets/twcss.png"
import java from "../assets/java.png"
import pstsql from "../assets/postgreSQL.png"
import mdb from "../assets/mongodb.png"
import node from "../assets/nodejs.png"
import git from "../assets/git.png"
import github from "../assets/github1.png"
import docker from "../assets/docker.webp"
import jest from "../assets/Jest.png"
import playwright from "../assets/Playwright.webp"

//TODO:PROYECTOS
import bebidas from "../assets/bebidas.png"
import clima from "../assets/clima.png"
import climats from "../assets/climats.png"
import task from "../assets/uptaskmern.jpg"
import prdmng from "../assets/prodmngts.png"
import cripto from "../assets/project-3.png"
import noticias from "../assets/noticias.png"
import ntfx from "../assets/project-4.png"
import auth from "../assets/auth5.png"
import Beenyl from "../assets/Beenyl.png"

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
    },
    {
        img: java,
        name: "Java",
    },
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
]

export const projects = [
    {
        _id: "1",
        name: "Weather App",
        image: climats,
        description: "Page where you can check the weather of default countries, using hooks, useContext, React, JavaScript, HTML, AXIOS for the REST API and for CSS styles",
        category: ["React JS", "HTML", "TailwindCSS", "JavaScript", "Git", "GitHub", "Node.JS"],
        repo: "https://github.com/GlendyT/ClimaApp",
        demo: "https://clima-app-tawny.vercel.app/",
    },
    {
        _id: "2",
        name: "News Search",
        image: noticias,
        description: "Page where you can search for the most relevant news about the default categories, using hooks, useContext, React, JavaScript, HTML, AXIOS for the REST API and for styles, @mui/material @emotion/react @emotion/styled",
        category: "React JS" && "HTML" && "JavaScript" && "Git" && "GitHub" && "Node.JS",
        repo: "https://github.com/GlendyT/NoticiasApi",
        demo: "https://noticias-api-black.vercel.app/",
    },
    {
        _id: "3",
        name: "Cryptocurrencies",
        image: cripto,
        description: "Page to be able to convert cryptocurrencies using React, JavaScript, Hooks, using fetch for the REST API and for styles, CSS @emotion/styled",
        category: "React JS" && "HTML" && "JavaScript" && "Git" && "GitHub" && "Node.JS" && "CSS",
        repo: "https://github.com/GlendyT/Criptomonedas",
        demo: "https://app-de-conversion-criptomonedas.netlify.app/",
    },
    {
        _id: "4",
        name: "Drink Finder",
        image: bebidas,
        description: "Page where you can search for drink recipes with the default categories, using hooks, useContext, React, JavaScript, HTML, AXIOS for the REST API and Bootstrap was used for styles",
        category: "React JS" && "HTML" && "Bootstrap" && "JavaScript" && "Git" && "GitHub" && "Node.JS",
        repo: "https://github.com/GlendyT/buscador-bebidas-typescript",
        demo: "https://bebidas-typescript.netlify.app/",
    },
    {
        _id: "5",
        name: "Task Manager FRONTEND MERN",
        image: task,
        description: "Page to manage tasks, allows you to create a user, add tasks, add collaborators, delete tasks. Using for the Frontend, React, JavaScript, Hooks, useContext, React-Router-Dom to host the information in different links, AXIOS to connect the database, MongoDB to store the data and Tailwindcss for the styles",
        category: "React JS" && "HTML" && "JavaScript" && "Git" && "GitHub" && "Node.JS" && "MongoDB" && "TailwindCSS"  ,
        repo: "https://github.com/GlendyT/merntask_frontend",
        demo: "",
    },
    {
        _id: "6",
        name: "Task Manager BACKEND MERN",
        image: task,
        description: "Backend of the MERN project, using the dependencies bcrypt to encrypt the user's password, express to create a multipage, mongoose to connect with MongoDB, JSON Web Token to create Public or Private Key to enter, Nodemailer to confirm the created user",
        category: "JavaScript" && "MongoDB",
        repo: "https://github.com/GlendyT/merntask_backend",
        demo: "https://merntask-frontend-theta.vercel.app/",
    },
    {
        _id: "7",
        name: "NextAuth 5 TS",
        image: auth,
        description: "Página utilizando Next-Auth, utilizando las dependencias, zod, bcrypt, uuid. Creando la información a solicitar al usuario en Schema Prisma,",
        category: "TypeScript" && "TailwindCSS",
        repo: "https://github.com/GlendyT/NextAuthVS",
        demo: "https://next-auth-vs.vercel.app/",
    },
    {
        _id: "8",
        name: "Netflix Clone TS",
        image: ntfx,
        description: "Pagina Clone de Netflix, con las funciones de crear usuario, iniciar sesión, agregar favoritos, agregar usuarios, almacenando la información de las películas en MongoDB, utilizando Next Auth, AXIOS para traer la información del backend, y dando estilos en TailwindCSS",
        category: "MongoDB" && "TailwindCSS" && "Typescript",
        repo: "https://github.com/GlendyT/Netflix-clone",
        demo: "https://paginanetflixclone.vercel.app/auth",
    },
    {
        _id: "9",
        name: "Weather App TS",
        image: clima,
        description: "Page where you can check the weather of default countries, using hooks, useContext, Typescript, HTML, AXIOS for the REST API and for styles CSS Modules",
        category: "JavaScript" && "MongoDB" && "Typescript" && "CSS",
        repo: "https://github.com/GlendyT/clima-react-typescript",
        demo: "https://clima-typescript.netlify.app/",
    },
    {
        _id: "10",
        name: " Product Manager Frontend PERN TS",
        image: prdmng,
        description: "Page to manage products, allows you to add a product, add price, add availability, delete products. Using for the Frontend, Typescript, JavaScript, Hooks, useContext, React-Router-Dom to host the information in different links, AXIOS to connect the database, PostgreSQL to store the data and Tailwindcss for the styles.",
        category: "JavaScript" && "PostgreSQL",
        repo: "https://github.com/GlendyT/frontend-PERN",
        demo: "https://frontend-pern.vercel.app/",
    },
    {
        _id: "11",
        name: "Product Manager Backend PERN TS",
        image: prdmng,
        description: "Backend of the MERN project, using express dependencies to create multipages, supertest, jest for backend testing, swagger to document the API.",
        category: "JavaScript" && "MYSQL" && "TypeScript",
        repo: "https://github.com/GlendyT/backend-PERN",
        demo: "https://frontend-pern.vercel.app/",
    },
    {
        _id: "12",
        name: "Bee-nyl Store",
        image: Beenyl,
        description: "Ecommerce of vinyls, creating the database using the ORM of PrismaSchema, creating and connecting the Backend using Express and Prisma, Frontend using Tailwind to give styles using the API previously created to show the information. Implementing Playwright for E2E test and  Jest for UnitTest.",
        category: "TypeScript" && "Postgres" && "Express"  && "Prisma"  && "Docker" && "Jest" && "PlayWright",
        repo: "https://github.com/GlendyT/Backend-TS-Bootcamp",
        demo: "https://github.com/GlendyT/Backend-TS-Bootcamp",
    },
]