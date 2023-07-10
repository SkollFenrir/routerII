import React from 'react';
import { Card } from 'react-bootstrap';

const PokeCard = ({ pokemon }) => {
	const { name, stats, src, types } = pokemon;
	return (
		<Card className='Card'>
			<Card.Img
				src={src}
				height='250'
				variant='Img '
			/>
			<Card.Body>
				<Card.Title className='Titulo '>
					<h3>{name}</h3>
				</Card.Title>
				<ul className='Ul'>
					<Card.Text>
						{stats?.map((stat, i) => (
							<li key={i}>
								{stat.name}: {stat.base}
							</li>
						))}
					</Card.Text>
				</ul>
			</Card.Body>
		</Card>
	);
};

export default PokeCard;
