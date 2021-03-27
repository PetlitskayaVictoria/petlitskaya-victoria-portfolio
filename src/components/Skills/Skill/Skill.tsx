import React from 'react';
import styles from './Skill.module.css'

type SkillType = {
    skillTitle: string
    description: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={styles.skillContainer}>
            <div className={styles.icon}></div>
            <h3>{props.skillTitle}</h3>
            <span>{props.description}</span>
        </div>
    )
}

export default Skill;
