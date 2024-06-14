import { headers } from "next/dist/client/components/headers";
import { IIcon } from "../components/icon";
import tailwindConfig from "../tailwind.config";
import { ContentfulResponse } from "./contentfulTypes";

export interface IImage {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

export interface ISkill {
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
		image_url: string
		alt_text: string
	}>;
	publish_date: number;
	skills?: Array<ISkill>
}

export interface INavItem {
	label: string;
	link: string;
	icon: IIcon;
}

export const navItems: Array<INavItem> = [
	{
		label: "Home",
		link: "/",
		icon: {
			icon: "home",
			fill: tailwindConfig.theme.extend.colors["main"],
			classNameIcon: "cursor-pointer",
		},
	},
	{
		label: "Projects",
		link: "/projects",
		icon: {
			icon: "project",
			fill: tailwindConfig.theme.extend.colors["main"],
			classNameIcon: "cursor-pointer",
		},
	},
	{
		label: "Contact",
		link: "mailto:info@manuelbaldoni.com",
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
