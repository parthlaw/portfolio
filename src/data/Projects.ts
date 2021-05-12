import { projectType } from "../interfaces/Project";

export const projects = [
  {
    title: "Bako",
    content: `A realtime private chat application`,
    link: "https://bako.vercel.app",
    image: "Bako.png",
    stack: ["JavaScript", "React", "Redux", "NodeJS", "Vercel"],
  } as projectType,
  {
    title: "Vocalo",
    content: `A colaborative dictonary application`,
    link: "https://vocalo.vercel.app",
    image: "Vocalo.png",
    stack: ["JavaScript", "React", "GraphQL", "NodeJS", "Vercel"],
  } as projectType,
  {
    title: "Managero",
    content: `A secure and encrypted password manager`,
    link: "https://managero.vercel.app",
    image: "Managero.png",
    stack: ["JavaScript", "React", "NodeJS", "Vercel"],
  } as projectType,
];
