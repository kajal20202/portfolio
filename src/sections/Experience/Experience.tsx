// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Experience.module.scss';

// ------------------------------------------------------------------------------------------

const Experience: FC = (): JSX.Element => {
    return (
        <div
            className={styles.container}
            id='experience'
        >
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
                            Front-End Developer specializing in building dynamic and responsive web
                            applications using React.js. Experienced in integrating APIs,
                            collaborating with design teams, and implementing clean, maintainable
                            code. Skilled in enhancing performance, ensuring accessibility, and
                            delivering intuitive user experiences.
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.duration}>
                            <p className={styles.exp_text}>
                                Front End Developer at Metamind Systems Pvt Ltd., based in Pune
                            </p>
                            <p className={styles.role_date}>Sep 2023 - March 2025</p>
                        </div>

                        <p className={styles.description}>
                            Enthusiastic Software Developer with a strong foundation in crafting
                            user-friendly interfaces and interactive forms using React.js.
                            Experienced in connecting APIs to improve functionality and deliver
                            seamless user experiences. Eager to apply front-end skills to build
                            innovative and impactful projec
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
