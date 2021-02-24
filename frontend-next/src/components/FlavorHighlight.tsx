import { useEffect, useState } from 'react';
import api from '../services/api';

import styles from '../styles/components/FlavorHighlight.module.css';

interface FlavorData {
	id: number;
	name: string;
	icon: string;
}

const FlavorHighlight = () => {
	const [flavor, setFlavor] = useState<FlavorData>(null);

	useEffect( () => {
		async function getHighlightFlavor() {
			const response = await api.getHighlightFlavor();

			setFlavor(response);
		}

		getHighlightFlavor();
	}, []);

	return (
		<>
			{ flavor ? (
				<div>
					<div className={styles.flavorHighlightContainer}>
						<img src={`http://localhost:3001/static/icons/${flavor.icon}`} />
						<h1>Sabor do dia: <strong>{ flavor.name }</strong></h1>
					</div>

					<div className={styles.flavorHighlightChoiceContainer}>
						<h2>Ganhe <strong>pontos</strong> com o sabor do dia!</h2>
						<button type="button">Eu quero!</button>
					</div>
				</div>
			) : (
				null
			) }
		</>
	)
}

export default FlavorHighlight;
