import React from 'react';
import styles from './H3.module.scss';

type H3Type = {
    title: string
}

export const H3 = (props: H3Type) => {
    return (
        <div className={styles.titleH3}>
            <h3>{props.title}</h3>
        </div>
    )
}

export default H3

