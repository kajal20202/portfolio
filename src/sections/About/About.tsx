// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './About.module.scss';

// ------------------------------------------------------------------------------------------

const About: FC = (): JSX.Element => {
    return (
        <div
            className={styles.container}
            id='about'
        >
            <h2 className={styles.headline}>About</h2>
            <div className={styles.content}>
                <div className={styles.description}>
                    <p>
                        I’m Kajal Talwekar, a software developer passionate about crafting clean,
                        intuitive, and engaging digital experiences. I enjoy the process of
                        transforming ideas into applications that not only work well but also feel
                        effortless to use.
                    </p>
                    <p>
                        What drives me is curiosity—every challenge is a chance to learn, improve,
                        and discover new ways of thinking. I take pride in building solutions that
                        make a difference, whether it’s through small details in design or solving
                        complex problems with simple approaches.
                    </p>
                    <p>
                        Beyond coding, I find inspiration in everyday moments—whether it’s a
                        meaningful conversation, trying something new, or simply appreciating the
                        little things that bring balance and joy to life.
                    </p>
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default About;

// ------------------------------------------------------------------------------------------
