import { Route, Routes } from 'react-router';
import RootLayout from './layout';
import { Contact, Current, Home, Projects } from './routes';

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
