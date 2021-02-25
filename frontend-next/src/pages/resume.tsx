import { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/StateContext';
import { useRouter } from 'next/router';
import api from '../services/api';

import styles from '../styles/pages/Resume.module.css';

const Resume = () => {
	const { chosenFlavor, chosenSize, chosenDoughType, chosenEdge, highlightFlavor } = useStateContext();
	const router = useRouter();

	const [hasPassed, setHasPassed] = useState(false);

	function goBack() {
		router.push('/');
	}

	async function send() {
		const response = await api.sendPizzaRequest({
			flavor: chosenFlavor.id,
			size: chosenSize.id,
			doughType: chosenDoughType.id,
			edge: chosenDoughType.id,
			highlight: chosenFlavor.highlight,
			points: chosenFlavor.highlight ? highlightFlavor.points : 0
		});

		if (response) {
			setHasPassed(true);

			setTimeout( () => {
				router.push('/');
			}, 2200);
		}
	}

	useEffect( () => {
		if (!chosenEdge) {
			router.push('/');
		}
	}, []);

	return (
		<>
			{ !hasPassed ? (
				<div className={styles.resumeContainer}>
					<div>
						<img src={`http://localhost:3001/static/icons/${chosenFlavor.icon}`} />
						<div>
							<h1>{ chosenFlavor.name }</h1>
							<h2>Tamanho: { chosenSize.name }</h2>
							<h2>Massa: { chosenDoughType.name }</h2>
							<h2>Borda: { chosenEdge.name }</h2>
						</div>
					</div>
					{ chosenFlavor.highlight ? <h1>Você receberá <strong>{ highlightFlavor.points }</strong> pontos</h1> : null }
					<div>
						<button type="button" onClick={goBack}>Criar Outra</button>
						<button type="button" onClick={send}>Finalizar</button>
					</div>
				</div>
			) : (
				<div className={styles.resumeModal}>
					<h1>Parabéns!</h1>
					{ chosenFlavor && <h2>Você recebeu <strong>{ highlightFlavor.points }</strong> pontos</h2> }
				</div>
			) }
		</>
	)
}

export default Resume;
