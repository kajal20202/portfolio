// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Landing.module.scss';
import profilePic from '../../assets/profile_pic.png';

// ------------------------------------------------------------------------------------------

const Landing: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.about_text}>
                    <p className={styles.about_me}>Hello, I am</p>
                    <h1 className={styles.about_name}>Kajal Talwekar</h1>
                    <h3 className={styles.role}>Junior Software Developer</h3>
                    <p className={styles.description}>
                        Dedicated Junior Software Developer with experience at Synextic Global
                        Business Solution Pvt Ltd.. LTD. Proficient in creating intuitive user
                        interfaces and forms using React.js. Skilled in integrating APIs to enhance
                        functionality and user experience. Seeking opportunities to leverage
                        expertise in front-end development to contribute effectively to innovative
                        projects.
                    </p>
                </div>
                <div className={styles.profile}>
                    <img
                        src={profilePic}
                        alt='Profile'
                    />
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default Landing;

// ------------------------------------------------------------------------------------------
