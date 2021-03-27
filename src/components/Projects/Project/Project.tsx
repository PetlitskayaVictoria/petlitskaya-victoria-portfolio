import React from 'react';
import styles from './Project.module.css'

type ProjectType = {
    title: string
    summary: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={styles.projectContainer}>
            <div className={styles.imageContainer}>
                <a href="">View</a>
            </div>
            <div className={styles.projectInfo}>
                <h3>{props.title}</h3>
                <span>{props.summary}</span>
            </div>
        </div>
    )
}

export default Project;
