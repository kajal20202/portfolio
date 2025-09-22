// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Experience.module.scss';

// ------------------------------------------------------------------------------------------

const Experience: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.duration}>
                            <p className={styles.exp_text}>
                                Front End Developer at Synextic Global Business Solution Pvt Ltd.,
                                based in Pune
                            </p>
                            <p className={styles.role_date}>March 2025 - Present</p>
                        </div>

                        <p className={styles.description}>
                            Dedicated Junior Software Developer with experience at Synextic Global
                            Business Solution Pvt Ltd. Proficient in creating intuitive user
                            interfaces and forms using React.js. Skilled in integrating APIs to
                            enhance functionality and user experience. Seeking opportunities to
                            leverage expertise in front-end development to contribute effectively to
                            innovative projects
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.duration}>
                            <p className={styles.exp_text}>
                                Front End Developer at Synextic Global Business Solution Pvt Ltd.,
                                based in Pune
                            </p>
                            <p className={styles.role_date}>Sep 2023 - March 2025</p>
                        </div>

                        <p className={styles.description}>
                            Dedicated Junior Software Developer with experience at Metamind Systems
                            Pvt Ltd. Proficient in creating intuitive user interfaces and forms
                            using React.js. Skilled in integrating APIs to enhance functionality and
                            user experience. Seeking opportunities to leverage expertise in
                            front-end development to contribute effectively to innovative projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default Experience;

// ------------------------------------------------------------------------------------------
