/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ThemeSwitch from '@/components/ThemeSwitch';

describe('ThemeSwitch', () => {
	it('renders', () => {
		render(<ThemeSwitch />);

		const select = screen.getByRole('combobox');

		expect(select).toBeInTheDocument();
	});
});
