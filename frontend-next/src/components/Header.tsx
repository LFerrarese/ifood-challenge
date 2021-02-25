import styles from '../styles/components/Header.module.css';

interface HeaderData {
	icon: string;
	flavor: string;
	ext: Array<string>;
};

const Header = ({ icon, flavor, ext }: HeaderData) => {
	return (
		<div className={styles.headerContainer}>
			<img src={`http://localhost:3001/static/icons/${icon}`} />
			<div>
				<h1>{ flavor }</h1>
				{ ext && (
					ext.map( (item,) => <h2>{ item }</h2>)
				) }
			</div>
		</div>
	)
}

export default Header;
