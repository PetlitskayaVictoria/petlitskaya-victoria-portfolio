import React from 'react';
import styles from './Projects.module.scss';
import containerStyles from '../common/styles/Container.module.scss';
import Project from "./Project/Project";
import todoListImage from './../../assets/images/todolist.jpg';
import socialNetworkImage from './../../assets/images/social-network.jpg';
import counterImage from './../../assets/images/counter.jpg';
import {Title} from '../common/components/Title/Title';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const todolistImg = {backgroundImage : `url(${todoListImage})`}
    const socialNetworkImg = {backgroundImage : `url(${socialNetworkImage})`}
    const counterImg = {backgroundImage : `url(${counterImage})`}
    return (
        <div id="projects" className={styles.projectsBlock}>
            <Fade bottom>
            <div className={`${containerStyles.container} ${styles.projectsContainer}`}>
                <Title title="Projects" subtitle="Portfolio"/>
                <div className={styles.projects}>
                    <Project title={"Social Network"}
                             style={socialNetworkImg}
                             summary={"Pellentesque efficitur urna in tristique porttitor. Nam fringilla metus sed imperdiet egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed euismod risus sit amet laoreet porttitor. Vestibulum nec urna nulla. Nullam pretium eros in rutrum dictum. Aliquam rutrum diam id auctor pretium."}/>

                    <Project title={"ToDo List"}
                             style={todolistImg}
                             summary={"Pellentesque efficitur urna in tristique porttitor. Nam fringilla metus sed imperdiet egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed euismod risus sit amet laoreet porttitor. Vestibulum nec urna nulla. Nullam pretium eros in rutrum dictum. Aliquam rutrum diam id auctor pretium."}/>

                    <Project title={"Counter"}
                             style={counterImg}
                             summary={"Pellentesque efficitur urna in tristique porttitor. Nam fringilla metus sed imperdiet egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed euismod risus sit amet laoreet porttitor. Vestibulum nec urna nulla. Nullam pretium eros in rutrum dictum. Aliquam rutrum diam id auctor pretium."}/>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Projects
