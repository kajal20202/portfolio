// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './About.module.scss';

// ------------------------------------------------------------------------------------------

const About: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>About</h2>
            <div className={styles.content}>
                <div className={styles.description}>
                    Dedicated Junior Software Developer with experience at Metamind Systems PVT.
                    LTD. Proficient in creating intuitive user interfaces and forms using React.js.
                    Skilled in integrating APIs to enhance functionality and user experience.
                    Seeking opportunities to leverage expertise in front-end development to
                    contribute effectively to innovative projects
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default About;

// ------------------------------------------------------------------------------------------
