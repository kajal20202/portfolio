// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './About.module.scss';
// ------------------------------------------------------------------------------------------

const About: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>About</h2>
            <div className={styles.content}>
                <div className={styles.abouttext}>
                    <p>Hello, i am kajal talwekar</p>
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
