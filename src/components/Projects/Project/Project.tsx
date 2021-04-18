import React from 'react';
import {H3} from '../../common/components/H3/H3';
import styles from './Project.module.scss';
import Paragraph from '../../common/components/Paragraph/Paragraph';

type ProjectType = {
    title: string
    summary: string
    style: {
        backgroundImage: string
    }
}

const Project = (props: ProjectType) => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.imageContainer} style={props.style}>
                <a href="">View</a>
            </div>
            <div className={styles.projectInfo}>
                <H3 title={props.title}/>
                <Paragraph summary={props.summary}/>
            </div>
        </div>
    )
}

export default Project
