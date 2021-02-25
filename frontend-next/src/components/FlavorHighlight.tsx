import { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/StateContext';
import { useRouter } from 'next/router';
import api from '../services/api';

import styles from '../styles/components/FlavorHighlight.module.css';

interface FlavorData {
	id: number;
	name: string;
	icon: string;
}

const FlavorHighlight = () => {
	const { chooseFlavor, hasHighlightFlavor } = useStateContext();
	const router = useRouter();

	const [flavor, setFlavor] = useState<FlavorData>(null);
	const [points, setPoints] = useState(0);

	useEffect( () => {
		async function getHighlightFlavor() {
			const response = await api.getHighlightFlavor();

			console.log(response);

			setFlavor(response.flavor);
			setPoints(response.points);
			hasHighlightFlavor({ id: response.flavor.id, name: response.flavor.name, icon: response.flavor.icon, points: response.points });
		}

		getHighlightFlavor();
	}, []);

	function handleClick() {
		chooseFlavor({
			id: flavor.id,
			name: flavor.name,
			icon: flavor.icon,
			highlight: true
		});

		router.push('/size');
	}

	return (
		<>
			{ flavor ? (
				<div>
					<div className={styles.flavorHighlightContainer}>
						<img src={`http://localhost:3001/static/icons/${flavor.icon}`} />
						<h1>Sabor do dia: <strong>{ flavor.name }</strong></h1>
					</div>

					<div className={styles.flavorHighlightChoiceContainer}>
						<h2>Ganhe <strong>{ points } pontos</strong> com o sabor do dia!</h2>
						<button type="button" onClick={handleClick}>Eu quero!</button>
					</div>
				</div>
			) : (
				null
			) }
		</>
	)
}

export default FlavorHighlight;
