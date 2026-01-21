import React from 'react';
import styles from './About.module.css';
import { config } from '../data/config';

const About: React.FC = () => {
    return (
        <section id="about" className="section container">
            <h2><span className="gradient-text">About Me</span></h2>

            <div className={styles.content}>
                <div className={styles.text}>
                    <p>
                        Hello! My name is <span className="accent">{config.about.name}</span> and I enjoy deploying things to the internet.
                        My interest in DevOps started back when I was exploring Linux distributions and realized how powerful automation can be.
                    </p>
                    <p>
                        {config.about.bio}
                    </p>
                    <p>
                        Here are a few technologies I have been working with recently:
                    </p>
                    <ul className={styles.skillsList}>
                        {config.skills.cloud.items.slice(0, 3).map(tech => <li key={tech}>{tech}</li>)}
                        {config.skills.containerization.items.slice(0, 3).map(tech => <li key={tech}>{tech}</li>)}
                        {config.skills.iac.items.slice(0, 2).map(tech => <li key={tech}>{tech}</li>)}
                    </ul>
                </div>

                {/* Profile Image Area - Keeping it simple/abstract if no image provided */}
                {/* Profile Image Area */}
                <div className={styles.profileWrapper}>
                    <div className={styles.profileImage}>
                        <img
                            src="/img/profile_new.webp"
                            alt="Abhishek Pokhrel"
                            className={styles.profileImg}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                if (target.parentElement) {
                                    target.parentElement.innerHTML = '<div style="display: flex; align-items: center; justifyContent: center; height: 100%; border: 1px dashed var(--color-accent); color: var(--color-text); padding: 1rem; text-align: center;">Image not found<br/>/img/profile.webp</div>';
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
