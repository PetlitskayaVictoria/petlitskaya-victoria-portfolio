import React from 'react';
import styles from './Paragraph.module.scss';

type ParagraphType = {
    summary: string
}

export const Paragraph = (props: ParagraphType) => {
    return (
        <div className={styles.summary}>
            <p>{props.summary}</p>
        </div>
    )
}

export default Paragraph
