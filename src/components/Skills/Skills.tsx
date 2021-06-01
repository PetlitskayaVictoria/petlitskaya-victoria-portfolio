import React from 'react';
import styles from './Skills.module.scss';
import containerStyles from '../common/styles/Container.module.scss';
import Skill from './Skill/Skill';
import Title from '../common/components/Title/Title';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Skills = () => {
    return (
        <div id="skills" className={styles.skillsBlock}>
            <Fade bottom>
            <div className={`${containerStyles.container} ${styles.skillsContainer}`}>
                <Title title="Skills" subtitle="Technologies"/>
                <div className={styles.skills}>
                    <Skill skillTitle={"React"} />
                    <Skill skillTitle={"Redux"} />
                    <Skill skillTitle={"TypeScript"} />
                    <Skill skillTitle={"JavaScript"} />
                    <Skill skillTitle={"REST API"} />
                    <Skill skillTitle={"Thunk"} />
                    <Skill skillTitle={"CSS/SASS"} />
                    <Skill skillTitle={"HTML5"} />
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Skills
