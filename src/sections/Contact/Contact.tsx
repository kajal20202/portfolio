// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Contact.module.scss';
import email from '../../assets/logos/email.png';
import phone from '../../assets/logos/phone.png';
import linkdlin from '../../assets/logos/linkdlin.png';
// ------------------------------------------------------------------------------------------

const Contact: FC = (): JSX.Element => {
    return (
        <div
            className={styles.container}
            id='contact'
        >
            <h2 className={styles.headline}>Contact</h2>
            <div className={styles.content}>
                <div className={styles.description}>
                    <a href='mailto:kajaltalwekar02@gmail.com'>
                        <img
                            src={email}
                            alt='Email Icon'
                        />
                    </a>
                    <a href='tel:+919359737094'>
                        <img
                            src={phone}
                            alt='Phone Icon'
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/kajal-talwekar-39366b27a/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            src={linkdlin}
                            alt='LinkedIn Icon'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default Contact;

// ------------------------------------------------------------------------------------------
