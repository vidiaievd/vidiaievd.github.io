import styles from './home.module.scss';

export const HomePage = () => {
	return (
		<article className={styles.article}>
			<section className={styles.section}>
				<h1 className={styles.h1}>Test task</h1>
				<p className={styles.p}>{'Yalantis\nReact School'}</p>
			</section>
		</article>
	)
}