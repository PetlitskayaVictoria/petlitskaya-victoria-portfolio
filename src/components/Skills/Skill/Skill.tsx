import React from 'react';
import { H3 } from '../../common/components/H3/H3';
import styles from './Skill.module.scss'
import Paragraph from "../../common/components/Paragraph/Paragraph";

type SkillType = {
    skillTitle: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={styles.skillContainer}>
            <div className={styles.icon}></div>
            <div className={styles.details}>
                <H3 title={props.skillTitle}/>
            </div>
        </div>
    )
}

export default Skill;
