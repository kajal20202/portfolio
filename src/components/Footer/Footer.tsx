// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import { useTheme } from '../../theme/useTheme';
import styles from './Footer.module.scss';
import { Sun } from 'lucide-react';

// ------------------------------------------------------------------------------------------

const Footer: FC = (): JSX.Element => {
    const { toggleTheme } = useTheme();

    return (
        <footer className={styles.container}>
            © 2025 Kajal Talwekar. All rights reserved.
            <button
                onClick={toggleTheme}
                className={styles.iconButton}
            >
                <Sun />
            </button>
        </footer>
    );
};

// ------------------------------------------------------------------------------------------

export default Footer;
