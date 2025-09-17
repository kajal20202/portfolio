// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './About.module.scss';
import Profile from '../../assets/profilepic.png';

// ------------------------------------------------------------------------------------------

const About: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Landing</h2>
            <div className={styles.content}>
<<<<<<< HEAD
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quidem
                provident corrupti necessitatibus ullam repellendus qui omnis, ducimus vero animi
                eum debitis odit dolor dicta in molestiae sit autem? Similique at quaerat obcaecati
                sequi. Quam molestias labore quisquam tempore, vero nostrum cupiditate dignissimos
                quidem magni numquam, amet pariatur qui nihil, reiciendis aspernatur voluptatibus
                perspiciatis non? Dolor quasi totam neque at veniam aliquam nostrum nulla.
                Recusandae iste, voluptate atque deleniti error perspiciatis ipsum inventore vero
                suscipit. Soluta ullam minima fuga sequi quasi atque, vero iusto dignissimos quod
                quae molestias autem dolore explicabo aut dolores, totam beatae impedit debitis odio
                ab perferendis!
=======
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
                        src={Profile}
                        alt='Profile'
                    />
                </div>
>>>>>>> e7a6dd0eb0fedcd9a2f6b947fbb5b4d9434f9c39
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default About;

// ------------------------------------------------------------------------------------------
