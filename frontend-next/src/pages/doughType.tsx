import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '../contexts/StateContext';
import api from '../services/api';

import Header from '../components/Header';
import DoughType from '../components/DoughType';

import styles from '../styles/pages/DoughTypeStep.module.css';

const DoughTypeStep = () => {
	const router = useRouter();
	const { chosenFlavor, chosenSize } = useStateContext();

	const [doughTypes, setDoughTypes] = useState(null);

	useEffect( () => {
		if (!chosenSize && !chosenFlavor) {
			router.push('/');
		}

		async function getDoughTypes() {
			const response = await api.getDoughTypes();

			setDoughTypes(response);
		}

		getDoughTypes();
	}, [])

	return (
		<>
			{ chosenSize && (
				<div className={styles.doughTypeStepContainer}>
					<Header icon={chosenFlavor.icon} flavor={chosenFlavor.name} ext={[chosenSize.name]} />

					<h1>Qual tipo de massa você quer?</h1>

					<div>
						{ doughTypes && (
							doughTypes.map( (i,) => <DoughType id={i.id} name={i.name} borderSize={Math.floor(Math.pow(i.id, 2))} />)
						) }
					</div>
				</div>
			) }
		</>
	)
}

export default DoughTypeStep;
