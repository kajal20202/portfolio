// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import { useTheme } from '../../theme/useTheme';
import styles from './Footer.module.scss';
import { Sun, Moon } from 'lucide-react';

// ------------------------------------------------------------------------------------------

const Footer: FC = (): JSX.Element => {
    const { toggleTheme } = useTheme();

    return (
        <footer className={styles.container}>
            Footer{' '}
            <button
                onClick={toggleTheme}
                className={styles.iconButton}
            >
                mode
                {/* {isDarkMode ? <Sun size={20} /> : <Moon size={20} />} */}
            </button>
        </footer>
    );
};

// ------------------------------------------------------------------------------------------

export default Footer;

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// import { useState, type FC, type JSX } from 'react';
// import { Sun, Moon } from 'lucide-react';
// import { useTheme } from '../../theme/useTheme';
// import styles from './Footer.module.scss';

// // ------------------------------------------------------------------------------------------

// const Footer: FC = (): JSX.Element => {
//     const [darkMode, setDarkMode] = useState(false);

//     const handleToggleTheme = () => {
//         setDarkMode(!darkMode);
//         document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
//     };

//     return (
//         <footer className={styles.container}>
//             © 2025 Kajal Talwekar. All rights reserved.
//             <button
//                 onClick={handleToggleTheme}
//                 className={styles.iconButton}
//             >
//                 {darkMode ? <Sun size={24} /> : <Moon size={24} />}
//             </button>
//         </footer>
//     );
// };

// // ------------------------------------------------------------------------------------------

// export default Footer;

// // ------------------------------------------------------------------------------------------
