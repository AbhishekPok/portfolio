import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Github } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProjectDetails() {
  const { id } = useParams();

  const projectsData: Record<string, any> = {
    "1": {
      title: "Travel Management System",
      description:
        "A full-stack web app to manage student records, authentication, and admin dashboards. Includes CRUD, login system, and responsive UI.",
      image:
        "https://images.unsplash.com/photo-1668903678362-0fbcb9108d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkamFuZ28lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjQ2NDgzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        "NestJS",
        "MongoDB",
        "Angular",
        "CRUD",
        "Authentication",
      ],
      githubUrl: "https://github.com",
      overview:
        "Developed a comprehensive student management system with full CRUD functionality, user authentication, and role-based access control. The application provides an intuitive interface for managing student records, grades, and administrative tasks.",
      features: [
        "User authentication and authorization",
        "Student record management (Create, Read, Update, Delete)",
        "Admin dashboard with analytics",
        "Responsive design for all devices",
        "Database optimization with PostgreSQL",
      ],
      techStack:
        "Built with NestJS framework for backend, MongoDB for database management, and Angular for the frontend. Implemented secure authentication using NestJS's built-in auth system.",
    },
    "2": {
      title: "DevOps WordPress Deployment",
      description:
        "Multi-VM environment using Vagrant: Web server (WordPress + Nginx), Database server (MySQL). Automated provisioning using shell scripts and Linux tools.",
      image:
        "https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBzZXJ2ZXJzJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY0NjQ4MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vagrant", "MySQL", "Shell Scripts", "WordPress"],
      githubUrl: "https://github.com",
      overview:
        "Created a multi-server environment using Vagrant for automated WordPress deployment. This project demonstrates infrastructure-as-code principles with separate web and database servers, fully automated provisioning.",
      features: [
        "Multi-VM setup with Vagrant",
        "Nginx web server configuration",
        "MySQL database server setup",
        "Automated provisioning with shell scripts",
        "WordPress installation and configuration",
      ],
      techStack:
        "Infrastructure automation using Vagrant, web serving with Nginx, database management with MySQL, and automation scripting with Bash. Follows DevOps best practices for reproducible deployments.",
    },
    "3": {
      title: "REST API for User Registration",
      description:
        "JWT-based authentication API featuring registration, login, token handling, and permission-based access.",
      image:
        "https://images.unsplash.com/photo-1564865878688-9a244444042a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0JTIwYXBpJTIwY29kZXxlbnwxfHx8fDE3NjQ2NDgzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Django REST Framework", "JWT", "Authentication"],
      githubUrl: "https://github.com",
      overview:
        "Built a secure RESTful API for user authentication using Django REST Framework. Implements JWT token-based authentication with proper permission controls and security best practices.",
      features: [
        "User registration endpoint",
        "JWT token-based authentication",
        "Login and logout functionality",
        "Permission-based access control",
        "Token refresh mechanism",
      ],
      techStack:
        "Developed using Django REST Framework for API development, JWT for secure token management, and implemented RESTful design patterns for scalable authentication services.",
    },
    "4": {
      title: "React + Django Authentication System",
      description:
        "Frontend (React) + Backend (Django) integrated login, protected routes, and session handling.",
      image:
        "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGFwcGxpY2F0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDY0ODM1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Django", "Protected Routes", "Session"],
      githubUrl: "https://github.com",
      overview:
        "Full-stack application integrating React frontend with Django backend for seamless authentication. Features protected routes, session management, and modern UI/UX practices.",
      features: [
        "React frontend with modern UI",
        "Django REST API backend",
        "Protected route implementation",
        "Session and token management",
        "User profile management",
      ],
      techStack:
        "Frontend built with React and modern JavaScript, backend powered by Django REST Framework, integration via REST API, and secure authentication flow between frontend and backend.",
    },
    "5": {
      title: "Hyprland + Arch Linux Custom Setup",
      description:
        "Custom rice for Arch Linux using Hyprland, Waybar, and custom modules.",
      image:
        "https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwc2V0dXB8ZW58MXx8fHwxNzY0NjQ4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Arch Linux", "Hyprland", "Waybar", "Custom"],
      githubUrl: "https://github.com",
      overview:
        "Customized Arch Linux environment featuring Hyprland window manager, Waybar status bar, and personalized modules. Demonstrates advanced Linux customization and workflow optimization.",
      features: [
        "Hyprland window manager configuration",
        "Custom Waybar modules and styling",
        "Optimized keybindings and workspace management",
        "Custom theming and color schemes",
        "Performance-optimized setup",
      ],
      techStack:
        "Built on Arch Linux with Hyprland compositor, Waybar for system status display, custom shell scripts for automation, and configuration files for a personalized development environment.",
    },
  };

  const project = projectsData[id || "1"] || projectsData["1"];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[#2563EB] hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <h1 className="text-4xl lg:text-5xl mb-6 text-[#0F172A]">
              {project.title}
            </h1>

            <p className="text-[#64748B] mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="rounded-lg overflow-hidden border border-[#E2E8F0] mb-12">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl text-[#0F172A] mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm text-[#2563EB] bg-[#EFF6FF] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl text-[#0F172A] mb-4">
                  Overview
                </h2>
                <p className="text-[#64748B] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-[#0F172A] mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map(
                    (feature: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2" />
                        <span className="text-[#64748B]">
                          {feature}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-[#0F172A] mb-4">
                  Technology Details
                </h2>
                <p className="text-[#64748B] leading-relaxed">
                  {project.techStack}
                </p>
              </div>

              {project.githubUrl && (
                <div className="pt-8 border-t border-[#E2E8F0]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}