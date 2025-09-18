// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Skills.module.scss';
import htmlLogo from '../../assets/logos/html_logo.png';
// ------------------------------------------------------------------------------------------

const Skills: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.lang_logo}>
                            <img
                                src={htmlLogo}
                                alt=''
                            />
                            <p className={styles.lang_text}>HTML</p>
                        </div>
                        <div className={styles.description}>
                            <p>Standard markup language for structuring web content.</p>
                        </div>
                        <div className={styles.domain}>Frontend</div>
                    </div>
                </div>
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
