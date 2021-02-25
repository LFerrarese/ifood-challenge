import { useRouter } from 'next/router';
import { useStateContext } from '../contexts/StateContext';

import styles from '../styles/components/Size.module.css';

interface Data {
	id: number;
	name: string;
	pieces: number;
};

const Size = ({ id, name, pieces }: Data) => {
	const router = useRouter();
	const { chooseSize } = useStateContext();

	function handleClick() {
		chooseSize({ id, name, pieces });
		router.push('/doughType');
	}

	return (
		<div className={styles.sizeContainer} onClick={handleClick}>
			<h1>{ name }</h1>
			<h2>{ String(pieces).padStart(2, '0') } pedaços</h2>
		</div>
	)
}

export default Size;
