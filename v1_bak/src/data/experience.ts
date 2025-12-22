export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    date: string;
    description: string;
    technologies: string[];
}

export const experienceData: ExperienceItem[] = [
    // {
    //     id: 1,
    //     role: "Senior Software Engineer",
    //     company: "Tech Corp",
    //     date: "2023 - Present",
    //     description: "Leading the backend team in migrating legacy monoliths to microservices architecture. Improved system reliability by 40% and reduced deployment time by 60%.",
    //     technologies: ["Go", "Kubernetes", "AWS", "gRPC"]
    // },
    {
        id: 1,
        role: "Backend Engineer Intern",
        company: "Insight Workshop",
        date: "Sep 2025 - Dec 2025",
        description: "Worked on a team to develop interactive learning platfrom for school childrens. Worked on Self projects, like Expense Tracker and Portfolio design.",
        technologies: ["ReactJs", "Python", "Django", "DRF"]
    },
    // {
    //     id: 3,
    //     role: "Full Stack Developer",
    //     company: "StartUp Hub",
    //     date: "2019 - 2021",
    //     description: "Developed and maintained multiple client-facing web applications. Collaborated with design team to implement responsive UI/UX.",
    //     technologies: ["React", "Node.js", "PostgreSQL", "Redis"]
    // }
];
