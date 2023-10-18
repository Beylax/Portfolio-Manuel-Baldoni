export interface ISkill {
    image_name: string
    title: string
    link?: string
    delay?: number
}

export const skills : Array<ISkill> = [
    {
        image_name: "html_logo.png",
        title: "HTML"
    },
    {
        image_name: "css_logo.png",
        title: "CSS"
    },
    {
        image_name: "tailwind_logo.png",
        title: "Tailwind",
        link: 'https://tailwindcss.com/'
    },
    {
        image_name: "javascript_logo.png",
        title: "Javascript"
    },
    {
        image_name: "typescript_logo.png",
        title: "Typescript",
        link: 'https://www.typescriptlang.org/'
    },
    {
        image_name: "react_logo.png",
        title: "React",
        link: 'https://it.legacy.reactjs.org/'
    },
    {
        image_name: "nodejs_logo.png",
        title: "NodeJS",
        link: 'https://nodejs.org'
    },
    {
        image_name: "c_logo.png",
        title: "C"
    },
    {
        image_name: "csharp_logo.png",
        title: "C#"
    },
    {
        image_name: "github_logo.png",
        title: "Git",
        link: 'https://github.com/'
    },
    {
        image_name: "docker_logo.png",
        title: "Docker",
        link: 'https://www.docker.com/'
    },
    {
        image_name: "hubspot_logo.png",
        title: "HubSpot",
        link: 'https://www.hubspot.com/'
    },
]