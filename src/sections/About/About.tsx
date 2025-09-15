// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './About.module.scss';
// ------------------------------------------------------------------------------------------

const About: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.about_text}>
                    <p className={styles.about_me}>Hello, i am </p>
                    <h4 className={styles.about_name}>Kajal Talwekar</h4>
                    <p className={styles.description}>
                    <h4 className={styles.role}>Junior Software Developer</h4>

                       <p> Dedicated Junior Software Developer with
                        experience at Metamind Systems PVT. LTD. Proficient in creating intuitive
                        user interfaces and forms using React.js. Skilled in integrating APIs to
                        enhance functionality and user experience. Seeking opportunities to leverage
                        expertise in front-end development to contribute effectively to innovative
                        projects.</p>
                    </p>
                </div>
                <div className={styles.profile}>
                    <img
                        src='./src/assets/profilepic.png'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default About;

// ------------------------------------------------------------------------------------------
