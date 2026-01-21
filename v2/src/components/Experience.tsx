import React from 'react';
import styles from './Experience.module.css';
import { config } from '../data/config';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section container" style={{ maxWidth: '900px' }}>
            <h2><span className="gradient-text">Experience</span></h2>

            <div className={styles.timeline}>
                {config.experience.map((job, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineMarker}></div>

                        <div className={styles.content}>
                            <div className={styles.heading}>
                                <h3 className={styles.role}>{job.role} <span className="accent">@</span> <span className={styles.company}>{job.company}</span></h3>
                                <div className={styles.duration}>{job.duration}</div>
                            </div>

                            {Array.isArray(job.description) ? (
                                <ul className={styles.descriptionList}>
                                    {job.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{job.description}</p>
                            )}

                            {job.tech && (
                                <div className={styles.techList}>
                                    {job.tech.map(t => <span key={t} className={styles.techBadge}>{t}</span>)}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
