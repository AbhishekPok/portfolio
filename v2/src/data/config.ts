export const config = {
    about: {
        name: "Abhishek Pokhrel",
        role: "DevOps Engineer (Newcomer)",
        tagline: "Building bridges between development and operations.",
        bio: "I am a recent graduate passionate about the DevOps culture. My journey began with a curiosity for Linux systems and has evolved into a deep interest in automating infrastructure and streamlining deployment pipelines. I am eager to apply my skills in Docker, Kubernetes, and CI/CD to real-world challenges.",
        email: "abhishekpokhrel001@gmail.com",
        phone: "+977 9868136515",
        location: "Kathmandu, Nepal",
        social: {
            github: "https://github.com/AbhishekPok",
            linkedin: "https://www.linkedin.com/in/abhishekpokhrel001",
            mail: "mailto:abhishekpokhrel001@gmail.com",
        },
    },
    skills: {
        containerization: {
            description: "Building and orchestrating scalable containerized applications.",
            items: ["Docker", "Kubernetes"]
        },
        cicd: {
            description: "Automating software delivery with continuous integration pipelines.",
            items: ["Jenkins", "ArgoCD", "GitHub Actions"]
        },
        cloud: {
            description: "Leveraging cloud platforms for scalable infrastructure.",
            items: ["AWS"]
        },
        iac: {
            description: "Managing infrastructure through code for consistency.",
            items: ["Terraform", "Ansible"]
        },
        monitoring: {
            description: "Observing system health and performance metrics.",
            items: ["Prometheus", "Grafana"]
        },
        scripting: {
            description: "Automating tasks and system management.",
            items: ["Bash", "Python"]
        },
        versionControl: {
            description: "Tracking changes and collaborating on code.",
            items: ["Git", "GitHub"]
        },
    },
    experience: [
        {
            company: "Cloudaya LLC",
            role: "DevOps Intern",
            duration: "Jan 2026 - Present",
            description: [
                "Assisted in containerizing legacy applications and setting up basic CI/CD pipelines using GitHub Actions."
            ],
            tech: ["Docker", "GitHub Actions", "Bash", "AWS"],
        },
        {
            company: "Insight Workshop",
            role: "Backend Intern",
            duration: "Sep 2025 - Dec 2025",
            description: [
                "Worked on Self projects, like Expense Tracker and Portfolio design.",
                "Developed a fullstack application called Fintrack using Django and Django Rest Framework for Backend support and React for Frontend support."
            ],
            tech: ["Python", "Django", "Django Rest Framework", "PostgreSQL", "Git", "GitHub"],
        },
    ],
    projects: [
        {
            name: "Fintrack",
            description: [
                "A fullstack application developed using Django and Django Rest Framework for Backend support and React for Frontend support.",
                "Used containerization tool: Docker to containerized the Frontend Backend and DB. and devised a compose file so that it can be scaled as per requirements."
            ],
            tech: ["Python", "Django", "Django Rest Framework", "PostgreSQL", "Git", "GitHub", "Docker"],
            links: {
                github: "https://github.com/AbhishekPok/FinTrack",
            },
        },
        {
            name: "K8s Cluster Playground",
            description: ["A reproducible Kubernetes cluster setup using Vagrant and Ansible for learning purposes."],
            tech: ["Vagrant", "Kubernetes"],
            links: {
                github: "https://github.com/AbhishekPok/K8s-Cluster-Playground",
            },
        },
        {
            name: "Arch Linux Setup",
            description: ["A reproducible Arch Linux setup using and learing DevOps practices."],
            tech: ["Hyprland", "Arch Linux"],
            links: {},
        },
        {
            name: "Automated CI Pipeline",
            description: ["A complete CI/CD pipeline allowing automatic deployment of a Node.js app to AWS EC2."],
            tech: ["Jenkins", "AWS", "Docker"],
            links: {
                github: "https://github.com/AbhishekPok/Auto-CI-Pipeline",
            },
        },
        // {
        //     name: "Server Monitor",
        //     description: "A lightweight script to monitor system resources and alert via Discord webhooks.",
        //     tech: ["Python", "Bash", "Cron"],
        //     links: {
        //         github: "#",
        //     },
        // },
    ],
};
