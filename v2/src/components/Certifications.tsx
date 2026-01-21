import React from 'react';
import styles from './Certifications.module.css';
import { FaAward, FaCertificate } from 'react-icons/fa';

interface Certification {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
    link?: string;
}

const certifications: Certification[] = [
    {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        link: "#"
    },
    {
        name: "Certified Kubernetes Administrator (CKA)",
        issuer: "Cloud Native Computing Foundation",
        date: "2024",
        link: "#"
    },
    {
        name: "HashiCorp Certified: Terraform Associate",
        issuer: "HashiCorp",
        date: "2023",
        link: "#"
    }
];

const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="section container">
            <h2><span className="gradient-text">Certifications</span></h2>

            <div className={styles.grid}>
                {certifications.map((cert, index) => (
                    <div key={index} className={styles.certCard}>
                        <div className={styles.iconBox}>
                            <FaAward />
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.certName}>{cert.name}</h3>
                            <p className={styles.issuer}>{cert.issuer}</p>
                            <span className={styles.date}>{cert.date}</span>

                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.verifyLink}
                                >
                                    <FaCertificate /> Verify
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <p className={styles.note}>
                * Replace placeholder links with actual certification URLs and credentials
            </p>
        </section>
    );
};

export default Certifications;
