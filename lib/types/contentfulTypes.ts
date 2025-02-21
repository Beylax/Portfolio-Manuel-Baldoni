export interface ContentfulResponse {
	sys: Sys;
	total: number;
	skip: number;
	limit: number;
	items: Item[];
	includes: Includes;
}

export interface Sys {
	type: string;
}

export interface Item {
	metadata: Metadata;
	sys: Sys2;
	fields: SkillFields | ProjectFields;
}

export interface Metadata {
	tags: any[];
}

export interface Sys2 {
	space: Space;
	id: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	environment: Environment;
	revision: number;
	contentType: ContentType;
	locale: string;
}

export interface Space {
	sys: Relation;
}

export interface Relation{
	type: string;
	linkType: string;
	id: string;
}

export interface Environment {
	sys: Relation;
}

export interface ContentType {
	sys: Relation;
}

export interface Image {
	sys: Relation;
}

export interface Includes {
	Asset: Asset[];
}

export interface Asset {
	metadata: Metadata2;
	sys: Sys7;
	fields: Fields2;
}

export interface Metadata2 {
	tags: any[];
}

export interface Sys7 {
	space: Space2;
	id: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	environment: Environment2;
	revision: number;
	locale: string;
}

export interface Space2 {
	sys: Relation;
}

export interface Environment2 {
	sys: Relation;
}

export interface Fields2 {
	title: string;
	file: File;
}

export interface File {
	url: string;
	details: Details;
	fileName: string;
	contentType: string;
}

export interface Details {
	size: number;
	image: Image2;
}

export interface Image2 {
	width: number;
	height: number;
}

export interface SkillFields {
	title: string;
	image: Image;
	link?: string;
	level: number;
}

export interface ProjectFields {
	slug: string;
	title: string;
	description: string;
	link?: string;
	images: Image[]
	publishDate: number;
	skills?: Array<{
		sys: Relation
	}>
}