// ------------------------------------------------------------------------------------------

import type { FC, JSX } from 'react';
import styles from './Landing.module.scss';

// ------------------------------------------------------------------------------------------

const Landing: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <h2 className={styles.headline}>Landing</h2>
            <div className={styles.content}>
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
            </div>
        </div>
    );
};

// ------------------------------------------------------------------------------------------

export default Landing;

// ------------------------------------------------------------------------------------------
