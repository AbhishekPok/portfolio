import React from 'react';
import styles from './Experience.module.css';
import { config } from '../data/config';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section container">
            <h2 className="mono"><span className="accent">03.</span> Experience</h2>

            <div className={styles.timeline}>
                {config.experience.map((job, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.dot}></div>
                        <div className={styles.heading}>
                            <h3 className={styles.role}>{job.role} <span className="accent">@</span> <span className={styles.company}>{job.company}</span></h3>
                            <span className={styles.duration}>{job.duration}</span>
                        </div>
                        {Array.isArray(job.description) ? (
                            <ul className={styles.descriptionList}>
                                {job.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className={styles.description}>{job.description}</p>
                        )}
                        <div className={styles.techList}>
                            {job.tech.map(tech => (
                                <span key={tech} className={styles.techBadge}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
