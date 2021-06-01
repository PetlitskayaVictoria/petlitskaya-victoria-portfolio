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
                             link={"https://PetlitskayaVictoria.github.io/social-network"}
                             summary={"Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post."}/>

                    <Project title={"ToDo List"}
                             style={todolistImg}
                             link={"https://PetlitskayaVictoria.github.io/todo_list_ts"}
                             summary={"ToDo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management."}/>

                    <Project title={"Counter"}
                             style={counterImg}
                             link={"https://PetlitskayaVictoria.github.io/counter"}
                             summary={"Counter is a test project which (to tell the truth) doesn't have a lot of practical use. It allows to do some settings which influence on the way how the counter works."}/>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Projects
