// -------------------------------------------------------------------------------------------

import styles from './NavigationButton.module.scss';

// -------------------------------------------------------------------------------------------

interface NavigationButtonProps {
	link: string;
	label: string;
}

// -------------------------------------------------------------------------------------------

const NavigationButton = (props: NavigationButtonProps) => {
	return (
		<a
			href={props.link}
			
			className={styles.containerlabellarge}
		>
			{props.label}
		</a>
	);
};

// -------------------------------------------------------------------------------------------

export default NavigationButton;

// -------------------------------------------------------------------------------------------
