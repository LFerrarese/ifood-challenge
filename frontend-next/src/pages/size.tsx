import { useEffect, useState } from 'react';
import { useStateContext } from '../contexts/StateContext';
import { useRouter } from 'next/router';
import api from '../services/api';

import Size from '../components/Size';

import styles from '../styles/pages/SizeStep.module.css';

const SizeStep = () => {
	const { chosenFlavor, highlightFlavor } = useStateContext();
	const router = useRouter();

	const [sizes, setSizes] = useState(null);

	useEffect( () => {
		if (!chosenFlavor) {
			router.push('/');
		}

		async function getSizes() {
			const response = await api.getSizes();

			setSizes(response);
		}

		getSizes();
	}, []);

	return (
		<>
			{ chosenFlavor && (
				<div className={styles.sizeStepContainer}>
					<div className={`${styles.chosenFlavor} ${chosenFlavor.highlight ? styles.chosenFlavorHighlight : ''}`}>
						<h1>Você escolheu: <strong>{ chosenFlavor.name }</strong></h1>
						{ chosenFlavor.highlight && <p>E vai ganhar <strong>{ highlightFlavor.points }</strong> pontos!</p> }
						<img src={`http://localhost:3001/static/icons/${chosenFlavor.icon}`} />
					</div>

					<h1>Escolha o <strong>tamanho</strong> da pizza</h1>

					<div className={styles.chooseSize}>
						{ sizes && (
							sizes.map( (i,) => <Size id={i.id} name={i.name} pieces={i.pieces} />)
						) }
					</div>
				</div>
			) }
		</>
	)
}

export default SizeStep;
