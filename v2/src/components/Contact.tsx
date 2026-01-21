import React from 'react';
import styles from './Contact.module.css';
import { config } from '../data/config';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact" className={`${styles.contact} section container`}>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <span className="gradient-text">Get In Touch</span>
            </h2>

            <div className={styles.contactGrid}>
                {/* Contact Info Card */}
                <div className={styles.contactInfo}>
                    <h3 className={styles.infoTitle}>Contact Information</h3>
                    <p className={styles.infoSubtitle}>Feel free to reach out through any of these channels</p>

                    <div className={styles.infoList}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <FaPhone />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>Phone</span>
                                <a href={`tel:${config.about.phone}`} className={styles.infoValue}>
                                    {config.about.phone}
                                </a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <FaEnvelope />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>Email</span>
                                <a href={`mailto:${config.about.email}`} className={styles.infoValue}>
                                    {config.about.email}
                                </a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <FaMapMarkerAlt />
                            </div>
                            <div className={styles.infoContent}>
                                <span className={styles.infoLabel}>Location</span>
                                <span className={styles.infoValue}>{config.about.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formContainer}>
                    <form className={styles.form} action={`mailto:${config.about.email}`} method="post" encType="text/plain">
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" name="name" className={styles.input} required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" name="email" className={styles.input} required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.label}>Subject</label>
                            <input type="text" id="subject" name="subject" className={styles.input} required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" name="message" className={styles.textarea} required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
