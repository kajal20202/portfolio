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
