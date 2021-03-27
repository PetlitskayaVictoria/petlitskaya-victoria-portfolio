import React from 'react';
import styles from './Projects.module.css'
import containerStyles from './../common/styles/Container.module.css'
import Project from "./Project/Project";


const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${containerStyles.container} ${styles.projectsContainer}`} >
                <h2>Projects</h2>
                <div className={styles.projects}>
                    <Project title={"Social Network"} summary={"Pellentesque efficitur urna in tristique porttitor. Nam fringilla metus sed imperdiet egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed euismod risus sit amet laoreet porttitor. Vestibulum nec urna nulla. Nullam pretium eros in rutrum dictum. Aliquam rutrum diam id auctor pretium."}/>
                    <Project title={"To Do List"} summary={"Pellentesque efficitur urna in tristique porttitor. Nam fringilla metus sed imperdiet egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed euismod risus sit amet laoreet porttitor. Vestibulum nec urna nulla. Nullam pretium eros in rutrum dictum. Aliquam rutrum diam id auctor pretium."}/>
                </div>
            </div>

        </div>
    )
}

export default Projects;
