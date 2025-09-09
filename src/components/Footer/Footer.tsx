// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import { useTheme } from '../../theme/useTheme';
import styles from './Footer.module.scss';

// ------------------------------------------------------------------------------------------

const Footer: FC = (): JSX.Element => {
    const { toggleTheme } = useTheme();

    return (
        <footer className={styles.container}>
            Footer <button onClick={toggleTheme}>Toggle theme</button>
        </footer>
    );
};

// ------------------------------------------------------------------------------------------

export default Footer;

// ------------------------------------------------------------------------------------------
