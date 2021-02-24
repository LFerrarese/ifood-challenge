import { useEffect, useState } from 'react';
import api from '../services/api';

import FlavorHighlight from '../components/FlavorHighlight';
import Flavor from '../components/Flavor';

import styles from '../styles/pages/Home.module.css';

const FlavorStep = () => {
	const [flavors, setFlavors] = useState(null);

	useEffect( () => {
		async function getFlavors() {
			const response = await api.getFlavors();

			setFlavors(response);
		}

		getFlavors();
	}, []);

	return (
		<div className={styles.flavorStepContainer}>
			<FlavorHighlight />

			<h1>Ou escolha outro sabor</h1>

			<div className={styles.flavorsAreaContainer}>
				{ flavors && (
					flavors.map( (i,) => <Flavor id={i.id} icon={i.icon} name={i.name} />)
				)}
			</div>
		</div>
	)
}

export default FlavorStep;
