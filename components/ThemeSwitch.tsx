'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<select
			className='ThemeSwitch'
			value={theme}
			onChange={(e) => setTheme(e.target.value)}>
			<option value='system'>System</option>
			<option value='light'>Light</option>
			<option value='dark'>Dark</option>
		</select>
	);
}
