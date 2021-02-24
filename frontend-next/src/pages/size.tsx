import { useEffect } from 'react';
import { useStateContext } from '../contexts/StateContext';
import { useRouter } from 'next/router';

import styles from '../styles/pages/Size.module.css';

const SizeStep = () => {
	const { chosenFlavor } = useStateContext();
	const router = useRouter();

	useEffect( () => {
		if (!chosenFlavor) {
			router.push('/');
		}
	}, []);

	return (
		<div className={styles.sizeStepContainer}>
			<div className={`${styles.chosenFlavor} ${chosenFlavor.highlight ? styles.chosenFlavorHighlight : ''}`}>
				<h1>Você escolheu: <strong>{ chosenFlavor.name }</strong></h1>
				{ chosenFlavor.highlight && <p>E ganhou <strong>20</strong> pontos!</p> }
				<img src={`http://localhost:3001/static/icons/${chosenFlavor.icon}`} />
			</div>

			<h1>Escolha o <strong>tamanho</strong> da pizza</h1>
		</div>
	)
}

export default SizeStep;
