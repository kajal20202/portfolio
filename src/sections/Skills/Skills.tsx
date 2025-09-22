// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Skills.module.scss';
import htmlLogo from '../../assets/logos/html_logo.png';
import cssLogo from '../../assets/logos/css_logo.png';
import reactLogo from '../../assets/logos/react_logo.png';
import jsLogo from '../../assets/logos/js_logo.png';
import typeScript from '../../assets/logos/typescript_logo.png';
import scssLogo from '../../assets/logos/scss_logo.png';
// ------------------------------------------------------------------------------------------

const Skills: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.lang_logo}>
                            <img
                                src={htmlLogo}
                                alt=''
                            />
                            <p className={styles.lang_text}>HTML</p>
                        </div>
                        <div className={styles.description}>
                            <p>Standard markup language for structuring web content.</p>
                        </div>
                        <div className={styles.domain}>Frontend</div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.lang_logo}>
                            <img
                                src={cssLogo}
                                alt=''
                            />
                            <p className={styles.lang_text}>CSS</p>
                        </div>
                        <div className={styles.description}>
                            <p>Stylesheet language for designing and formatting web pages.</p>
                        </div>
                        <div className={styles.domain}>Frontend</div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.lang_logo}>
                            <img
                                src={reactLogo}
                                alt=''
                            />
                            <p className={styles.lang_text}>React.js</p>
                        </div>
                        <div className={styles.description}>
                            <p>Library for building component-based user interfaces.</p>
                        </div>
                        <div className={styles.domain}>Frontend</div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.lang_logo}>
                            <img
                                src={jsLogo}
                                alt=''
                            />
                            <p className={styles.lang_text}>JavaScript</p>
                        </div>
                        <div className={styles.description}>
                            <p>
                                Programming language for dynamic and interactive web functionality.
                            </p>
                        </div>
                        <div className={styles.domain}>Frontend</div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.lang_logo}>
                            <img
                                src={scssLogo}
                                alt=''
                            />
                            <p className={styles.lang_text}>SCSS</p>
                        </div>
                        <div className={styles.description}>
                            <p>CSS preprocessor that adds variables, nesting, and modularity.</p>
                        </div>
                        <div className={styles.domain}>Frontend</div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_content}>
                        <div className={styles.lang_logo}>
                            <img
                                src={typeScript}
                                alt=''
                            />
                            <p className={styles.lang_text}>TypeScript</p>
                        </div>
                        <div className={styles.description}>
                            <p>
                                Typed superset of JavaScript that enhances code safety and
                                scalability.
                            </p>
                        </div>
                        <div className={styles.domain}>Frontend</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default Skills;

// ------------------------------------------------------------------------------------------
