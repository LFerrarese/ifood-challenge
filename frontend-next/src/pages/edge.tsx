import { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/StateContext';
import { useRouter } from 'next/router';
import api from '../services/api';

import Header from '../components/Header';
import Edge from '../components/Edge';

import styles from '../styles/pages/EdgeStep.module.css';

const EdgeStep = () => {
	const { chosenFlavor, chosenSize, chosenDoughType } = useStateContext();
	const router = useRouter();

	const [edges, setEdges] = useState(null);

	useEffect(() => {
		if (!chosenDoughType) {
			router.push('/');
		}

		async function getEdges() {
			const response = await api.getEdges();

			setEdges(response);
		}

		getEdges();
	}, []);

	return (
		<>
			{ chosenDoughType && (
				<div className={styles.edgeStepContainer}>
					<Header icon={chosenFlavor.icon} flavor={chosenFlavor.name} ext={[chosenSize.name, chosenDoughType.name]} />

					<h1>Por último, escolha sua borda</h1>

					<div>
						{ edges && (
							edges.map( (item,) => <Edge id={item.id} name={item.name} /> )
						) }
					</div>
				</div>
			) }
		</>
	)
}

export default EdgeStep;
