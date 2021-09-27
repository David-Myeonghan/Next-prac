/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from '../pages/detail';

describe('Detail 페이지', () => {
	it('강의목록이 렌더링 되어야 한다', () => {
		const { getByTitle } = render(<Detail />);

		const lectureList = getByTitle('lectureList');

		expect(lectureList).toBeInTheDocument();
	});
});
