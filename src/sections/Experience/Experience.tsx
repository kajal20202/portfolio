// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Experience.module.scss';

// ------------------------------------------------------------------------------------------

const Experience: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.box}>Box 1</div>
                <div className={styles.box}>Box 1</div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default Experience;

// ------------------------------------------------------------------------------------------
