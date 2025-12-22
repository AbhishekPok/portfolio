import React from 'react';
import styles from './Contact.module.css';
import { config } from '../data/config';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact" className={`${styles.contact} section container`}>
            <div className={styles.container}>
                {/* Left Column: Contact Info */}
                <div className={styles.contactInfo}>
                    <h3 className={styles.infoTitle}>Contact Info</h3>

                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}>
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
                        <div className={styles.iconBox}>
                            <FaMapMarkerAlt />
                        </div>
                        <div className={styles.infoContent}>
                            <span className={styles.infoLabel}>Location</span>
                            <span className={styles.infoValue}>{config.about.location}</span>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.iconBox}>
                            <FaPhoneAlt />
                        </div>
                        <div className={styles.infoContent}>
                            <span className={styles.infoLabel}>Phone</span>
                            <a href={`tel:${config.about.phone}`} className={styles.infoValue}>
                                {config.about.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form - Temporarily Disabled
                <div className={styles.formContainer}>
                    <form className={styles.form} action={`mailto:${config.about.email}`} method="post" encType="text/plain">
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input type="text" id="name" name="name" className={styles.input} placeholder="Your Name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input type="email" id="email" name="email" className={styles.input} placeholder="Your Email" required />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.label}>Subject</label>
                            <input type="text" id="subject" name="subject" className={styles.input} placeholder="Project Inquiry" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" name="message" className={styles.textarea} placeholder="Tell me about your project..." required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            <FaPaperPlane className={styles.btnIcon} /> Send Message
                        </button>
                    </form>
                </div>
                */}
            </div>
        </section>
    );
};

export default Contact;
