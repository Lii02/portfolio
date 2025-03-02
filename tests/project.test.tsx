/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Project from '@/components/Project';

function renderProject() {
	render(<Project name='Name' description='Description' year={0} link='/' />);
}

describe('Project', () => {
	it('renders a heading', () => {
		renderProject();

		const heading = screen.getByRole('heading', { level: 2 });

		expect(heading).toBeInTheDocument();
	});

	it('renders a link', () => {
		renderProject();

		const link = screen.getByRole('link', { current: false });

		expect(link).toBeInTheDocument();
	});

	it('renders a description', () => {
		renderProject();

		const text = screen.getByText(/Description/i);

		expect(text).toBeInTheDocument();
	});
});
