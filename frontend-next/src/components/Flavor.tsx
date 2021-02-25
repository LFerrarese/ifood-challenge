import { useRouter } from 'next/router';
import { useStateContext } from '../contexts/StateContext';

import styles from '../styles/components/Flavor.module.css';

interface FlavorData {
	id: number;
	icon: string;
	name: string;
};

const Flavor = ({ id, icon, name }: FlavorData) => {
	const router = useRouter();
	const { chooseFlavor } = useStateContext();

	function handleClick() {
		chooseFlavor({ id, icon, name, highlight: false });
		router.push('/size');
	}

	return (
		<div className={styles.flavorContainer} onClick={handleClick}>
			<img src={`http://localhost:3001/static/icons/${icon}`} />
			<span>{ name }</span>
		</div>
	)
}

export default Flavor;
