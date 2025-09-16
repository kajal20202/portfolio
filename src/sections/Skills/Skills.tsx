// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Skills.module.scss';

// ------------------------------------------------------------------------------------------

const Skills: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.box}>Box 1</div>
                <div className={styles.box}>Box 2</div>
                <div className={styles.box}>Box 3</div>
                <div className={styles.box}>Box 4</div>
                <div className={styles.box}>Box 5</div>
                <div className={styles.box}>Box 6</div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default Skills;

// ------------------------------------------------------------------------------------------
