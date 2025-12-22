import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="dark:bg-background bg-primary/5 border-t border-border py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2 text-foreground">Abhishek Pokhrel</h3>
                        <p className="text-muted-foreground">DevOps Engineer & Linux Enthusiast</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/AbhishekPok" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/abhishekpokhrel001" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors"> */}
                        {/* <Twitter size={24} /> */}
                        {/* </a> */}
                        <a href="mailto:abhishekpokhrel001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
                    <p>© {new Date().getFullYear()} Abhishek Pokhrel. Built with React & Tailwind.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
