import { IIcon } from "../components/icon";
import tailwindConfig from "../tailwind.config";

export interface IImage {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

export interface ISkill {
	contentful_id: string;
	image_url: string;
	title: string;
	link?: string;
	level?: number;
}

export interface IProject {
	slug: string;
	title: string;
	description: string;
	link?: string;
	images: Array<{
		image_url: string;
		alt_text: string;
	}>;
	publish_date: number;
	skills?: Array<ISkill>;
}

export interface IPeriod {
	title: string;
	timeline?: string;
	description: string;
	projects?: Array<IProject>;
	skills?: Array<ISkill>;
	images: Array<{
		image_url: string;
		alt_text: string;
	}>;
}

export interface IMultiSelectOption {
    label: string
	value: string
	isCheckedByDefault: boolean
	image_url?: string
}

export interface INavItem {
	id: string;
	label: string;
	link: string;
	icon: IIcon;
}

export const navItems: Array<INavItem> = [
	{
		id: "home",
		label: "Home",
		link: "/",
		icon: {
			icon: "home",
			fill: tailwindConfig.theme.extend.colors["main"],
			classNameIcon: "cursor-pointer",
		},
	},
	{
		id: "projects",
		label: "Projects",
		link: "/projects",
		icon: {
			icon: "project",
			fill: tailwindConfig.theme.extend.colors["main"],
			classNameIcon: "cursor-pointer",
		},
	},
	{
		id: "contact",
		label: "Contact",
		link: "mailto:manuel.baldoni.lavoro@gmail.com",
		icon: {
			icon: "mail-send",
			fill: tailwindConfig.theme.extend.colors["main"],
			classNameIcon: "cursor-pointer",
		},
	},
];

export function CapitalizeSlug(str: string) {
	const arr = str.split("-");

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	const str2 = arr.join(" ");
	return str2;
}

export async function fetchRestAPI(link: string) {
	try {
		const fetchRes = await fetch(
			`${process.env.NEXT_PUBLIC_CONTENT_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIORNMENT_ID}${link}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.CONTENTFUL_API_TOKEN}`,
				},
			},
		);

		if (fetchRes.status !== 200) {
			throw new Error(await fetchRes.json());
		}

		const res = await fetchRes.json();

		return res;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch contentful API");
	}
}
