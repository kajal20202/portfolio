// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Projects.module.scss';

// ------------------------------------------------------------------------------------------

const Projects: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Projects</h2>
            <p className={styles.description}>Company & Professional Projects</p>
            <div className={styles.content}>
                <div className={styles.box}>Box 1</div>
                <div className={styles.box}>Box 1</div>
                <div className={styles.box}>Box 1</div>
                <div className={styles.box}>Box 1</div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default Projects;

// ------------------------------------------------------------------------------------------
