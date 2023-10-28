export interface ISkill {
    image_name: string
    title: string
    link?: string
    delay?: number
    level?: number
}

export const skills : Array<ISkill> = [
    {
        image_name: "html_logo.png",
        title: "HTML",
        level: 80
    },
    {
        image_name: "css_logo.png",
        title: "CSS",
        level: 80
    },
    {
        image_name: "tailwind_logo.png",
        title: "Tailwind",
        link: 'https://tailwindcss.com/',
        level: 80
    },
    {
        image_name: "javascript_logo.png",
        title: "Javascript",
        level: 80
    },
    {
        image_name: "typescript_logo.png",
        title: "Typescript",
        link: 'https://www.typescriptlang.org/',
        level: 70
    },
    {
        image_name: "react_logo.png",
        title: "React",
        link: 'https://it.legacy.reactjs.org/',
        level: 80
    },
    {
        image_name: "nodejs_logo.png",
        title: "NodeJS",
        link: 'https://nodejs.org',
        level: 50
    },
    {
        image_name: "c_logo.png",
        title: "C",
        level: 80
    },
    {
        image_name: "csharp_logo.png",
        title: "C#",
        level: 80
    },
    {
        image_name: "java_logo.png",
        title: "Java",
        link: 'https://www.java.com/',
        level: 80
    },
    {
        image_name: "git_logo.png",
        title: "Git",
        link: 'https://git-scm.com/',
        level: 80
    },
    {
        image_name: "docker_logo.png",
        title: "Docker",
        link: 'https://www.docker.com/',
        level: 30
    },
    {
        image_name: "hubspot_logo.png",
        title: "HubSpot",
        link: 'https://www.hubspot.com/',
        level: 70
    },
]