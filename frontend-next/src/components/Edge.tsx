import { useRouter } from 'next/router';
import { useStateContext } from '../contexts/StateContext';

import styles from '../styles/components/Edge.module.css';

interface EdgeData {
	id: number;
	name: string;
};

const Edge = ({ id, name }: EdgeData) => {
	const router = useRouter();
	const { chooseEdge } = useStateContext();

	function handleClick() {
		chooseEdge({ id, name });
		router.push('/resume');
	}

	return (
		<div className={styles.edgeContainer} onClick={handleClick}>
			<h1>{ name }</h1>
		</div>
	)
}

export default Edge;
