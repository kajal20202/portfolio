import type { FC, JSX } from 'react';
import styles from './Header.module.scss';

const Header: FC = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.head}>
                    <div>
                        <p className={styles.heading}>Portfolio</p>
                    </div>
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <a href='#skills'>Skills</a>
                            </li>
                            <li>
                                <a href='#experience'>Experience</a>
                            </li>
                            <li>
                                <a href='#projects'>Projects</a>
                            </li>
                            <li>
                                <a href='#about'>About</a>
                            </li>
                            <li>
                                <a href='#contact'>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
