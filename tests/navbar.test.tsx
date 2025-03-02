/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '@/components/NavBar';

describe('NavBar', () => {
	it('renders a heading', () => {
		render(<NavBar />);

		const heading = screen.getByRole('heading', { level: 1 });

		expect(heading).toBeInTheDocument();
	});
});
