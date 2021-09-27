export interface Category {
	id: number;
	name: string;
}

export interface Tag {
	id: number;
	name: string;
}

export interface Lecture {
	id: number;
	category: Category;
	title: string;
	tags: Tag; // BE 논의 필요, 따로 뺄 가능성,
	description: string;
	thumb: string;
	isHot: boolean;
	isNew: boolean;
}
