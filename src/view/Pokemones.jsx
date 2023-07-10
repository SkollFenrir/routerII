import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {
	const [pokemones, setPokemones] = useState([]);
	const [pokemonSelecter, setPokemonSelecter] = useState('');
	const navigate = useNavigate();
	const url = 'https://pokeapi.co/api/v2/pokemon';

	const getPokemon = async () => {
		const res = await fetch(url);
		const { results } = await res.json();
		setPokemones(results);
	};
	const goToPokeDetails = async () => {
		if (pokemonSelecter) navigate(`/pokemones/${pokemonSelecter}`);
		else alert('Debe seleccionar');
	};
	useEffect(() => {
		getPokemon();
	}, []);
	return (
		<div className='mt-5 text-center Pokemon'>
			<h1>Seleccione un Pokemon</h1>
			<div className='Selector'>
				<select
					value={pokemonSelecter}
					className='form-select text-center button'
					onChange={({ target }) => setPokemonSelecter(target.value)}>
					<option
						disabled
						value=''>
						{' '}
						Pokemones
					</option>
					{pokemones.map(({ name, i }) => (
						<option
							key={i}
							value={name}>
							{name}
						</option>
					))}
				</select>
				<Button
					variant='outline'
					onClick={goToPokeDetails}>
					Detalles
				</Button>
			</div>
		</div>
	);
};

export default Pokemones;
