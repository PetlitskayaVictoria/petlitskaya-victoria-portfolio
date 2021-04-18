import React from 'react';
import styles from './Skills.module.scss';
import containerStyles from '../common/styles/Container.module.scss';
import Skill from './Skill/Skill';
import Title from '../common/components/Title/Title';

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${containerStyles.container} ${styles.skillsContainer}`}>
                <Title title="Skills" subtitle="Technologies"/>
                <div className={styles.skills}>
                    <Skill skillTitle={"CSS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare varius ullamcorper. "}/>
                    <Skill skillTitle={"JS"}
                           description={"Duis pellentesque mauris in sem ornare, nec elementum dui venenatis. Nullam at ipsum magna."}/>
                    <Skill skillTitle={"React"}
                           description={"Nullam a eros porta, imperdiet mi vitae, tempor tellus. Ut luctus, neque eget ultrices malesuada, neque mi sollicitudin diam, sit amet rhoncus tortor purus eget est. "}/>
                    <Skill skillTitle={"Redux"}
                           description={"Nullam a eros porta, imperdiet mi vitae, tempor tellus. Ut luctus, neque eget ultrices malesuada, neque mi sollicitudin diam, sit amet rhoncus tortor purus eget est. "}/>
                    <Skill skillTitle={"REST API"}
                           description={"Nullam a eros porta, imperdiet mi vitae, tempor tellus. Ut luctus, neque eget ultrices malesuada, neque mi sollicitudin diam, sit amet rhoncus tortor purus eget est. "}/>
                    <Skill skillTitle={"Thunk"}
                           description={"Nullam a eros porta, imperdiet mi vitae, tempor tellus. Ut luctus, neque eget ultrices malesuada, neque mi sollicitudin diam, sit amet rhoncus tortor purus eget est. "}/>
                </div>
            </div>
        </div>
    )
}

export default Skills
