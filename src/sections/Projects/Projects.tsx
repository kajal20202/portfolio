// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Projects.module.scss';

// ------------------------------------------------------------------------------------------

const Projects: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Projects</h2>
            <p className={styles.description_heading}>Company & Professional Projects</p>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <p className={styles.exp_text}>
                            Mega Project - Patient Health Monitoring System
                        </p>

                        <p className={styles.description}>
                            Created design HTML, CSS, etc. This system is for multi-specialty
                            hospital. In this project there are five modules. 1.Admin section
                            2.Nurse section 3.Medical section 4.Doctor section 5.Kiosk system
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <p className={styles.exp_text}>Expense Management System.</p>

                        <p className={styles.description}>
                            We created design ReactJs, Bootstrap, React-Redux-Saga. It is a tool to
                            manage any kind of organizations expenses accordingly. This could be in
                            terms of improved efficiency, cost savings, or any other tangible
                            benefits it brought to the organization or users
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <p className={styles.exp_text}>Work Flow Management System.</p>

                        <p className={styles.description}>
                            Created design ReactJs, Bootstrap, React-Toolkit
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <p className={styles.exp_text}>
                            Mega Project - Patient Health Monitoring System
                        </p>

                        <p className={styles.description}>
                            Created design HTML, CSS, etc. This system is for multi-specialty
                            hospital. In this project there are five modules. 1.Admin section
                            2.Nurse section 3.Medical section 4.Doctor section 5.Kiosk system
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default Projects;

// ------------------------------------------------------------------------------------------
