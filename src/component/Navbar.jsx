import React from 'react';
import { Navbar as NavbarB } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
	const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined);
	return (
		<NavbarB
			bg='light'
			data-bs-theme='light'
			className='Barra'>
			<div>
				<NavLink
					className={setActiveClass}
					to={'/'}>
					Home
				</NavLink>{' '}
				<NavLink
					className={setActiveClass}
					to={'/Pokemones  '}>
					PokeDex
				</NavLink>
			</div>
		</NavbarB>
	);
};

export default Navbar;
