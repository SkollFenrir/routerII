import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import Navbar from './component/Navbar';
import Detalle from './view/Detalle';
import Pokemones from './view/Pokemones';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home />}>
						Home
					</Route>
					<Route
						path='/Pokemones'
						element={<Pokemones />}>
						{' '}
					</Route>
					<Route
						path='/Pokemones/:name'
						element={<Detalle />}>
						{' '}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
