// -------------------------------------------------------------------------------------------

import styles from './Header.module.scss';

import { useState } from 'react';
import IconButton from '../common-buttons/IconButton/IconButton';
import NavigationButton from '../common-buttons/NavigationButton/NavigationButton';
import { CloseIcon, MenuIcon } from '../Icons/Icons';

// -------------------------------------------------------------------------------------------

const routes = [
	{ label: 'Introduction', link: '#introduction' },
	{ label: 'Skills', link: '#skills' },
	{ label: 'Experience', link: '#experience' },
	{ label: 'Projects', link: '#projects' },
	{ label: 'Education', link: '#education' },
	{ label: 'Thanks', link: '#thanks' },
	{ label: 'Contact', link: '#contact' },
];

// -------------------------------------------------------------------------------------------

const Header = () => {
	const [navigationScreen, setNavigationScreen] = useState(false);

	const handleNavigationScreenToggle = () => {
		setNavigationScreen((prev) => !prev);
	};

	return (
		<>
			<div
				
				className={styles.container}
			>
				<div
					
					className={styles.frame}
				>
					<div
						
						className={styles.leading}
					>
						<h1
							
							className={styles.headlinetitlelarge}
						>
							Portfolio
						</h1>
					</div>
					<div
						
						className={styles.trailing}
					>
						<div
							
							className={styles.navigationbuttonscontainer}
						>
							{routes.map((button, index) => {
								return (
									<NavigationButton
										key={`navigation-button-${index}`}
										{...button}
									/>
								);
							})}
						</div>
						<div
							
							className={styles.iconbuttoncontainer}
						>
							<IconButton
								icon={<MenuIcon />}
								onClick={handleNavigationScreenToggle}
							/>
						</div>
					</div>
				</div>
			</div>
			{navigationScreen && (
				<div
					
					className={styles.navigationscreen}
				>
					<div
						
						className={styles.top}
					>
						<IconButton
							icon={<CloseIcon />}
							onClick={handleNavigationScreenToggle}
						/>
					</div>
					<div
						
						className={styles.bottom}
					>
						{routes.map((button, index) => {
							return (
								<div
									key={`navigation-button-${index}`}
									onClick={handleNavigationScreenToggle}
								>
									<NavigationButton {...button} />
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

// -------------------------------------------------------------------------------------------

export default Header;

// -------------------------------------------------------------------------------------------
