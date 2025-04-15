import { Route, Routes } from 'react-router';
import RootLayout from './layout';

// Routes
import Home from './routes/home';
import Projects from './routes/projects';
import Current from './routes/current';
import Contact from './routes/contact';

function App() {
	return (
		<>
			<Routes>
				<Route element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/current' element={<Current />} />
					<Route path='/contact' element={<Contact />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
