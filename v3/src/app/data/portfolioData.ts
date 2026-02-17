import { Mail, Github, Linkedin, MapPin, Phone, Terminal, Server, Cloud, Database } from 'lucide-react';

export const personalInfo = {
    name: 'Abhishek Pokhrel',
    email: 'abhishehpokhrel001@gmail.com',
    phone: '+977 9868136515',
    location: 'Kathmandu, Nepal',
    socialLinks: [
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:abhishehpokhrel001@gmail.com',
            color: '#22D3EE',
            text: 'abhishehpokhrel001@gmail.com'
        },
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/AbhishekPok',
            color: '#22D3EE',
            text: 'github.com/AbhishekPok'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://linkedin.com/in/abhishehpokhrel001',
            color: '#38BDF8',
            text: 'linkedin.com/in/abhishehpokhrel001'
        }
    ]
};

export const heroData = {
    title: 'DevOps & Backend Engineer',
    tagline: 'Building scalable, automated, and reliable systems',
    techStack: [
        'Python',
        'Django',
        'AWS',
        'Terraform',
        'Git',
        'Linux'
    ]
};

export const aboutData = {
    summary: [
        "I'm Abhishek Pokhrel, a passionate DevOps and Backend Engineer currently pursuing my B.Sc. CSIT at Patan Multiple Campus. My focus is on building scalable, automated, and reliable systems that bridge the gap between development and operations.",
        "Currently, as a Backend Intern at Spark Workshop, I specialize in developing web applications using Django and DRF, implementing academic algorithms for efficiency, and exploring cloud-native solutions on AWS.",
        "I'm driven by practical problem-solving and have a keen interest in Infrastructure as Code (Terraform), containerization, and monitoring. I believe in continuous learning and the power of automation to solve complex technical challenges."
    ],
    stats: [
        { label: 'Years of Academic & Prof. Exp', value: '2+' },
        { label: 'Projects Completed', value: '10+' }
    ]
};

export const experiences = [
    {
        title: 'DevOps Intern',
        company: 'Cloudlaya LLC',
        period: 'January 2026- Present',
        description: 'Working on building and maintaining CI/CD pipelines for automated software delivery and managing containerized applications using Docker and Kubernetes.',
        highlights: [
            'Built and maintained CI/CD pipelines for automated software delivery',
            'Implemented Infrastructure as Code (IaC) using Terraform for provisioning and managing cloud resources',
            'Managed containerized applications using Docker and orchestrated deployments with Kubernetes',
            'Supported and maintained existing cloud infrastructure, applications and mail services',
            'Collaborated with senior team members in an agile environment',
            'Provided support related to cloud services, DNS and domain management to clients'
        ]
    },
    {
        title: 'Backend Intern',
        company: 'Spark Workshop',
        period: 'August 2025 - Present',
        description: 'Developing web applications using Django and DRF, focusing on industry-standard practices and efficient problem-solving.',
        highlights: [
            'Built REST APIs and web applications using Django and Django Rest Framework',
            'Implemented clustering and other academic algorithms for enhanced efficiency',
            'Conducted containerization and explored cloud hosting on AWS',
            'Collaborated with senior team members in an agile environment'
        ]
    }
];

export const education = [
    {
        degree: 'B.Sc. CSIT',
        institution: 'Patan Multiple Campus (Tribhuwan University)',
        period: '2022 - Present',
        description: 'Focusing on computer science fundamentals, software development, and cloud computing.',
        achievements: [
            'Maintaining strong academic performance in technical subjects',
            'Active participation in coding workshops and tech seminars'
        ]
    },
    {
        degree: 'Pre-University Education',
        institution: 'Viswa Niketan Sec. School',
        period: 'Graduated 2021',
        description: 'Science stream with a focus on Mathematics and Computer Science.',
        achievements: [
            'GPA: 3.35/4.00',
            'Participated in science exhibitions and coding competitions'
        ]
    }
];

export const projects = [
    {
        title: 'Multi-VM WordPress Deployment',
        description: 'Automated the deployment of a WordPress site with a separate MySQL database across multiple virtual machines with secure networking using Vagrant.',
        tech: ['Vagrant', 'WordPress', 'MySQL', 'Apache', 'Linux'],
        gradient: 'from-[#22D3EE] to-[#38BDF8]',
        github: 'https://github.com/AbhishekPok',
        demo: '#'
    },
    {
        title: 'FinTrack – Expense Tracker',
        description: 'Full-stack application for managing transactions, featuring summary dashboards, charts, and secure user authentication.',
        tech: ['Django', 'DRF', 'React', 'PostgreSQL', 'REST API'],
        gradient: 'from-[#38BDF8] to-[#22D3EE]',
        github: 'https://github.com/AbhishekPok/FinTrack',
        demo: '#'
    },
    {
        title: 'Travomind – AI Travel Assistant',
        description: 'AI-powered travel assistant that suggests destinations and itineraries via a real-time chatbot interface using GPT API.',
        tech: ['NestJS', 'Angular', 'MongoDB', 'OpenAI', 'TypeScript'],
        gradient: 'from-[#22D3EE] to-[#38BDF8]',
        github: 'https://github.com/Abhisha-Sharma/travomind',
        demo: '#'
    },
    {
        title: 'Portfolio website',
        description: 'A small self experimentation about myself. To portray my capability and small introduction over web. ',
        tech: ['NextJs', 'OpenAI', ],
        gradient: 'from-[#22D3EE] to-[#38BDF8]',
        github: 'https://github.com/AbhishekPok/portfolio',
        demo: 'https://pokhrelabhishek.com.np'
    }
];

export const skillsData = {
    categories: [
        {
            title: 'Languages',
            icon: Terminal,
            color: '#22D3EE',
            skills: ['Python', 'Bash/Shell', 'YAML/JSON']
        },
        {
            title: 'Backend',
            icon: Server,
            color: '#38BDF8',
            skills: ['Django', 'DRF', 'NestJS']
        },
        {
            title: 'Cloud & DevOps',
            icon: Cloud,
            color: '#22D3EE',
            skills: ['AWS', 'Terraform', 'Docker', 'Vagrant', 'Linux', 'Nginx']
        },
        {
            title: 'Databases & Tools',
            icon: Database,
            color: '#38BDF8',
            skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Git']
        }
    ],
    additionalSkills: [
        'Prometheus', 'Grafana', 'REST APIs',
        'Problem Decomposition', 'Analytical Thinking',
        'Technical Documentation', 'GitHub',
        'Agile', 'Daily Stand-ups', 'Academic Algorithms'
    ]
};
