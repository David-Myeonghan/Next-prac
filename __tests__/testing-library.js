/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import Index from '../pages/index';

describe('Home', () => {
	it('메뉴가  렌더링  되어야  한다', () => {
		const { getByRole } = render(<Index />); // 기본 메뉴 페이지

		const menu = getByRole('navigation', {
			name: 'fastcampus',
		});

		expect(menu).toBeInTheDocument();
	});
	it('배너가 렌더링 되어야 한다', () => {
		const { getByRole } = render(<Index />);

		const banner = getByRole('banner');

		expect(banner).toBeInTheDocument();
	});
	it('강의목록이 렌더링 되어야 한다', () => {
		const { getByTitle } = render(<Index />);

		const lectureList = getByTitle('lectureList');

		expect(lectureList).toBeInTheDocument();
	});
});
