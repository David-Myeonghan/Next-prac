import type { NextApiRequest, NextApiResponse } from 'next';

const mockCategory = {
	// 카테고리가 따로 빠진다면,
	id: 0,
	name: 'programming',
};

const mockTags = [
	// 태그가 따로 빠진다면,
	{
		id: 0,
		name: '평생소장',
	},
	{
		id: 1,
		name: 'AWS',
	},
	{
		id: 2,
		name: 'DevOps',
	},
];

const lectureData = {
	lectureList: [
		{
			id: 0,
			category: mockCategory, // 특정 옵션의 강의 목록 노출: 태그, 카테고리, 신규런칭
			title: 'Data Science : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
			tags: mockTags, // BE 논의 필요, 따로 뺄 가능성,
			description:
				'개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
			thumb: '/thumb.jpg', // cdn? storage?
			isHot: true,
			isNew: true,
		},
		{
			id: 1,
			category: mockCategory, // 특정 옵션의 강의 목록 노출: 태그, 카테고리, 신규런칭
			title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
			tags: mockTags, // BE 논의 필요, 따로 뺄 가능성,
			description:
				'개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
			thumb: '/thumb.jpg', // cdn? storage?
			isHot: true,
			isNew: true,
		},
		{
			id: 2,
			category: mockCategory, // 특정 옵션의 강의 목록 노출: 태그, 카테고리, 신규런칭
			title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
			tags: mockTags, // BE 논의 필요, 따로 뺄 가능성,
			description:
				'개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
			thumb: '/thumb.jpg', // cdn? storage?
			isHot: true,
			isNew: true,
		},
	],
};

const dataScience = {
	lectureList: [
		{
			id: 0,
			category: mockCategory, // 특정 옵션의 강의 목록 노출: 태그, 카테고리, 신규런칭
			title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
			tags: mockTags, // BE 논의 필요, 따로 뺄 가능성,
			description:
				'개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
			thumb: '/thumb.jpg', // cdn? storage?
			isHot: true,
			isNew: true,
		},
		{
			id: 1,
			category: mockCategory, // 특정 옵션의 강의 목록 노출: 태그, 카테고리, 신규런칭
			title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
			tags: mockTags, // BE 논의 필요, 따로 뺄 가능성,
			description:
				'개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
			thumb: '/thumb.jpg', // cdn? storage?
			isHot: true,
			isNew: true,
		},
		{
			id: 2,
			category: mockCategory, // 특정 옵션의 강의 목록 노출: 태그, 카테고리, 신규런칭
			title: '초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영',
			tags: mockTags, // BE 논의 필요, 따로 뺄 가능성,
			description:
				'개발/운영/아키텍트를 아우르는 AWS/DevOps 전 과정 마스터! 41가지 툴을 실습 중심으로 배우고 실전 감각을 향상시키세요',
			thumb: '/thumb.jpg', // cdn? storage?
			isHot: true,
			isNew: true,
		},
	],
};

type Data = {
	name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.query.categories === 'Programming') {
		res.status(200).json(lectureData);
	}
	if (req.query.categories === 'DataScience') {
		res.status(200).json(dataScience);
	}
}
// $: curl http://localhost:3000/api/lectures
