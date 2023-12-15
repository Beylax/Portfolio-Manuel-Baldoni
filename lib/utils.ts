import { IIcon } from "../components/icon"
import tailwindConfig from "../tailwind.config"

export interface IImage{
    src: string
    alt: string
    width?: number
    height?: number
}

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
        image_name: "nextjs_logo.png",
        title: "NextJS",
        link: 'https://nextjs.org/',
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
        image_name: "wordpress_logo.png",
        title: "WordPress",
        link: 'https://it.wordpress.org/',
        level: 70
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

export interface IProject {
    slug: string;
    title: string;
    description: string;
    link?: string;
    thumbnail_image: IImage;
    images?: Array<IImage>;
}

export const projects: Array<IProject> = [
    {
        slug: 'erp-bridge',
        title:'ERP Bridge',
        thumbnail_image: {
            src: '/images/projects/project_erpbridge/thumbnail.png',
            alt: 'erp-bridge-thumbnail'
        },
        link:'https://www.erpbridge.io/',
        description: "<a href='https://www.erpbridge.io/' target='__blank' className='font-bold after:bg-highlight underline-effect'>ERP Bridge</a> is a HubSpot app available in the HubSpot marketplace.<br><br>The landing page is created with HUGO, a cutting edge static site generator. At that time I had never use HUGO so it was a formation on the job.",
        images: [
            {
                src: '/images/projects/project_erpbridge/pricing.png',
                alt: 'erp-bridge-pricing'
            },
            {
                src: '/images/projects/project_erpbridge/faq.png',
                alt: 'erp-bridge-faq'
            },
        ]
    },
    {
        slug: 'amadori',
        title:'Amadori',
        thumbnail_image: {
            src: '/images/projects/project_amadori/thumbnail.png',
            alt: 'amadori'
        },
        link:'https://amadori.it',
        description: "Amadori is the <i>agribusiness's leader in italy</i> with over 50 years of history. It's' an international company with over 1 bilion turnover. I worked with another Junior Developer at <a href='https://diemmea.com' target='__blank' className='font-bold after:bg-highlight underline-effect'>DMA</a> and <i>together</i> we used <a href='https://www.hubspot.com/' target='__blank' className='font-bold after:bg-highlight underline-effect'>HubSpot</a> as a CMS tool. The site will support the english version soon.<br><br>We mainly used HTML - CSS - JAVASCRIPT and the HubSpot's integrated markup language HUBL. We also used the javascript library <a href='https://swiperjs.com/' target='__blank' className='font-bold after:bg-highlight underline-effect'>SwiperJS</a>. We implemented the schema org for SEO optimization for the products and the recipes.",
        images: [
            {
                src: '/images/projects/project_amadori/ricette.png',
                alt: 'amadori-ricette'
            },
            {
                src: '/images/projects/project_amadori/social.png',
                alt: 'amadori-social'
            },
            {
                src: '/images/projects/project_amadori/filiera.png',
                alt: 'amadori-filiera'
            },
        ]
    },
    {
        slug: 'diemmea',
        title:'DMA',
        thumbnail_image: {
            src: '/images/projects/project_dma/thumbnail.jpg',
            alt: 'dma'
        },
        link:'https://diemmea.com',
        description: "I had the privilege of <i>collaborating</i> with <a href='https://diemmea.com' target='__blank' className='font-bold after:bg-highlight underline-effect'>DMA</a> on the development of the company's website. This project involved working closely with both the marketing and design teams to create an enjoyable user experience (UX).<br><br>Our front-end development utilized HTML, CSS (Bootstrap), and JavaScript, all integrated seamlessly into the HubSpot CMS tool.",
        images: [
            {
                src: '/images/projects/project_dma/home.png',
                alt: 'amadori-ricette'
            },
            {
                src: '/images/projects/project_dma/lavora.png',
                alt: 'amadori-social'
            },
            {
                src: '/images/projects/project_dma/general.png',
                alt: 'amadori-filiera'
            },
        ]
    },
    {
        slug: 'area-41',
        title:'Area41',
        thumbnail_image: {
            src: '/images/projects/project_a41/thumbnail.png',
            alt: 'area41'
        },
        link:'https://a41.it',
        description: "Area41 is the <i>coolest</i> skateboard e streetware shop in Cesena - Italy. They had an old looking website and they wanted some fresh air, so I restyled the website to a <b>brand new interface</b> keeping the key values that rapresent the essence of the shop.<br><br>For this website I used the built in <a href='https://www.register.it/' target='__blank' className='font-bold after:bg-highlight underline-effect'>Register</a>'s website builder, with particolar attenction to the SEO aspect (the website is an ecommerce too)."
    },
    {
        slug: 'gestore-segnalazioni',
        title:'Gestore segnalazioni',
        thumbnail_image: {
            src: '/images/projects/project_mercato/thumbnail.png',
            alt: 'gestore-segnalazioni'
        },
        description: "During the <i>stage</i> of my fourth year in secondary school in collaboration with 3 other students we built a <b>management dashboard</b> for the Mercato Saraceno's municipality. The software is capable of handling the reports of the municipality avoiding saving them in papers and archieves.<br><br> For this project we used <a href='https://www.google.com/script/start/' target='__blank' className='font-bold after:bg-highlight underline-effect'>GAS (Google App Script)</a> for the back-end and HTML, CSS (bootstrap), JS for the front-end."
    },
]

export interface INavItem {
    label: string
    link: string
    icon: IIcon
}

export const navItems: Array<INavItem> = [
    {
        label: "Home",
        link: "/",
        icon: {
            icon: "home",
            fill: tailwindConfig.theme.extend.colors["main"],
            classNameIcon: "cursor-pointer"
        }
    },
    {
        label: "Projects",
        link: "/projects",
        icon: {
            icon: "project",
            fill: tailwindConfig.theme.extend.colors["main"],
            classNameIcon: "cursor-pointer"
        }
    },
    {
        label: "Contact",
        link: "mailto:info@manuelbaldoni.com",
        icon: {
            icon: "mail-send",
            fill: tailwindConfig.theme.extend.colors["main"],
            classNameIcon: "cursor-pointer"
        }
    }
]

export function CapitalizeSlug(str: string) {
    const arr = str.split("-");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    return str2
}