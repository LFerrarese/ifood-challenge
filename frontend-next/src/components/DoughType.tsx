import { useRouter } from 'next/router';
import { useStateContext } from '../contexts/StateContext';

import styles from '../styles/components/DoughType.module.css';

interface DoughTypeData {
	id: number;
	name: string;
	borderSize?: number;
}

const DoughType = ({ id, name, borderSize }: DoughTypeData) => {
	const router = useRouter();
	const { chooseDoughType } = useStateContext();

	function handleClick() {
		chooseDoughType({ id, name });
		router.push('/edge');
	}

	return (
		<div className={styles.doughTypeContainer} style={{ borderBottom: `solid ${borderSize ? borderSize : 0}px var(--red)` }} onClick={handleClick}>
			<h1>{ name }</h1>
		</div>
	)
}

export default DoughType;
