import styles from './footer.module.scss';

const year = new Date().getFullYear();

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>All Rights Reserved, {year} </p>
		</footer>
	)
}
