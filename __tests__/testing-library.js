/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import Index from '../pages/index';

describe('Home', () => {
	it('강의목록이 렌더링 되어야 한다', () => {
		const { getByTitle } = render(<Index />);

		const lectureList = getByTitle('lectureList');

		expect(lectureList).toBeInTheDocument();
	});
});
