import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokeCard from '../component/PokeCard';

const Detalle = () => {
	const { name } = useParams();
	const [poke, setPoke] = useState({});
	const url = 'https://pokeapi.co/api/v2/pokemon';
	const getPokemon = async (name) => {
		const res = await fetch(`${url}/${name}`);
		const data = await res.json();
		const src = data.sprites.other.dream_world.front_default;
		const stats = data.stats.map((stat) => ({
			name: stat.stat.name,
			base: stat.base_stat,
		}));
		setPoke({ name, stats, src });
	};
	useEffect(() => {
		getPokemon(name);
	}, [name]);
	return (
		<div className='Render'>
			<PokeCard pokemon={poke} />
		</div>
	);
};

export default Detalle;
