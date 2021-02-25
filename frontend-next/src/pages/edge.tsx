import { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/StateContext';
import api from '../services/api';

import Header from '../components/Header';
import Edge from '../components/Edge';

import styles from '../styles/pages/EdgeStep.module.css';

const EdgeStep = () => {
	const { chosenFlavor, chosenSize, chosenDoughType } = useStateContext();

	const [edges, setEdges] = useState(null);

	useEffect(() => {
		async function getEdges() {
			const response = await api.getEdges();

			setEdges(response);
		}

		getEdges();
	}, []);

	return (
		<div className={styles.edgeStepContainer}>
			<Header icon={chosenFlavor.icon} flavor={chosenFlavor.name} ext={[chosenSize.name, chosenDoughType.name]} />

			<h1>Por último, escolha sua borda</h1>

			<div>
				{ edges && (
					edges.map( (item,) => <Edge id={item.id} name={item.name} /> )
				) }
			</div>
		</div>
	)
}

export default EdgeStep;
