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
			<div className={styles.chosenFlavor}>
				<h1>Você escolheu: <strong>{ chosenFlavor.name }</strong></h1>
				<img src={`http://localhost:3001/static/icons/${chosenFlavor.icon}`} />
			</div>
		</div>
	)
}

export default SizeStep;
