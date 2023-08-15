import styles from './Logo.module.scss';

export default function Logo() {
	return (
		<div>
			<img
				className={styles.AuthPgLogoBackground}
				src="https://i.imgur.com/5dE9RQM.png"
        alt="BnB_Logo_Background"   
			/>
			<div className={styles.Logo}>
				<div>BnB</div>
        		<div>⛺🛩️🚙</div>
			</div>
		</div>
	);
}
