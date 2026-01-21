import React from 'react';
import styles from './Projects.module.css';
import { config } from '../data/config';
import { FaFolder, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section container">
            <h2><span className="gradient-text">Featured Projects</span></h2>

            <div className={styles.projectsList}>
                {config.projects.map((project, index) => (
                    <div key={index} className={styles.project}>
                        <div className={styles.image}>
                            {/* Placeholder / Gradient for now as no image provided in config logic yet */}
                            <div className={styles.imagePlaceholder}>
                                <FaFolder />
                            </div>
                        </div>

                        <div className={styles.content}>
                            <span className={styles.featured}>Featured Project</span>
                            <h3 className={styles.title}>
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                    {project.name}
                                </a>
                            </h3>

                            <div className={styles.descriptionBox}>
                                {Array.isArray(project.description) ? (
                                    <ul>
                                        {project.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{project.description}</p>
                                )}
                            </div>

                            <ul className={styles.techList}>
                                {project.tech.map(tech => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>

                            <div className={styles.links}>
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <FaGithub />
                                    </a>
                                )}
                                {/* @ts-ignore */}
                                {project.links.demo && (
                                    /* @ts-ignore */
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
