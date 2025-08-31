// -------------------------------------------------------------------------------------------

import { JSX } from 'react';
import styles from './IconButton.module.scss';

// -------------------------------------------------------------------------------------------

interface IconButtonProps {
	icon: JSX.Element;
	onClick?: () => void;
}

// -------------------------------------------------------------------------------------------

const IconButton = (props: IconButtonProps) => {
	return (
		<button
			
			className={styles.container}
			onClick={props.onClick}
		>
			{props.icon}
		</button>
	);
};

export default IconButton;

// -------------------------------------------------------------------------------------------
