// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Projects.module.scss';

// ------------------------------------------------------------------------------------------

const Projects: FC = (): JSX.Element => {
    return (
        <div
            className={styles.container}
            id='projects'
        >
            <h2 className={styles.headline}>Projects</h2>
            <p className={styles.description_heading}>Company & Professional Projects</p>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <p className={styles.exp_text}>Expense Management System.</p>

                        <p className={styles.description}>
                            Expense Management System – Built with React.js, Bootstrap, and
                            Redux-Saga, this tool helps organizations efficiently track and manage
                            expenses. It improves transparency, saves costs, and streamlines
                            financial workflows for better decision-making.
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <p className={styles.exp_text}>Work Flow Management System.</p>

                        <p className={styles.description}>
                            Work Flow Management System – Developed using React.js, Bootstrap, and
                            Redux Toolkit, this system streamlines task management and process
                            tracking, helping organizations improve efficiency, collaboration, and
                            overall productivity.
                        </p>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <p className={styles.exp_text}>Chat Module.</p>

                        <p className={styles.description}>
                            Chat Module – Built with React, Tailwind CSS, and WebSocket, this
                            real-time messaging system works like WhatsApp. It enables seamless
                            one-to-one and group communication with an interactive, responsive
                            design and instant network connectivity.
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
