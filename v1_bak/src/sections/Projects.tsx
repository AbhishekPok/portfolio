
import { Server, Container, Workflow, Cloud, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Vagrant Multi-VM Setup",
            description: "Automated provisioning of WordPress and MySQL servers using shell scripts. Demonstrates Infrastructure as Code principles.",
            tags: ["Vagrant", "Bash", "VirtualBox", "Linux"],
            icon: <Server className="text-blue-400" size={24} />,
            link: "#"
        },
        {
            title: "Docker Compose Stack",
            description: "Full-stack application deployment with Django DRF backend and React frontend. Features multi-stage builds and optimized images.",
            tags: ["Docker", "Django", "React", "Nginx"],
            icon: <Container className="text-green-400" size={24} />,
            link: "#"
        },
        {
            title: "CI/CD Pipelines",
            description: "Comprehensive GitHub Actions workflows for automated testing, linting, and deployment to staging environments.",
            tags: ["GitHub Actions", "YAML", "Testing", "Automation"],
            icon: <Workflow className="text-purple-400" size={24} />,
            link: "#"
        },
        {
            title: "Kubernetes Concepts",
            description: "Collection of K8s manifests demonstrating Deployments, Services, Ingress, and ConfigMaps for microservices.",
            tags: ["Kubernetes", "Minikube", "Helm", "Microservices"],
            icon: <Cloud className="text-sky-400" size={24} />,
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">DevOps <span className="text-primary">Projects</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Practical implementations of infrastructure automation, containerization, and orchestration.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="group relative h-full flex flex-col p-6 bg-secondary/10 backdrop-blur-sm border border-primary/30 rounded-3xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all duration-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="relative">
                                        <div className="p-3 bg-secondary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            {project.icon}
                                        </div>
                                        <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <a href={project.link} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-secondary/20 text-muted-foreground border border-border text-xs font-medium rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Projects;
