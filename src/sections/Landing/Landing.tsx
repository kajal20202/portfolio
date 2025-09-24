// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Landing.module.scss';
import profilePic from '../../assets/profile_pic.jpg';

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
                        A learner with a strong academic background in Information Technology, I am
                        seeking a challenging role that fosters professional growth, encourages
                        creativity, and offers an opportunity to work for a dynamic organization
                        with prospects for career advancement
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
