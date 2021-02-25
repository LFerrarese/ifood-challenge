import { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/StateContext';
import api from '../services/api';

import FlavorHighlight from '../components/FlavorHighlight';
import Flavor from '../components/Flavor';

import styles from '../styles/pages/FlavorStep.module.css';

const FlavorStep = () => {
	const { highlightFlavor } = useStateContext();

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
					flavors.map( (i,) => highlightFlavor && i.id !== highlightFlavor.id ? <Flavor id={i.id} icon={i.icon} name={i.name} /> : <></>)
				) }
			</div>
		</div>
	)
}

export default FlavorStep;
