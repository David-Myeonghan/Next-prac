/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '../components/Menu';

describe('Menu', () => {
	it('fastcampus라는 텍스트를 가지고 있어야 한다', () => {
		const { getByText } = render(<Menu />);

		const lectureList = getByText('fastcampus');

		expect(lectureList).toBeInTheDocument();
	});
});
