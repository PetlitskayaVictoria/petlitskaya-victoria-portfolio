import React from 'react';
import styles from './Title.module.scss';

type Title = {
    title: string
    subtitle: string
}

export const Title = (props: Title) => {
    return (
        <div className={styles.title}>
            <h2>{props.title}
                <span className={styles.subtitle}>{props.subtitle}</span>
            </h2>
        </div>
    )
}

export default Title
