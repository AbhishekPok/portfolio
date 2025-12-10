import React, { useRef, useState } from 'react';
import GlassCard from '../components/GlassCard';
import { Mail, Send, MapPin, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            toast.error('EmailJS configuration missing. Please check your .env file.');
            return;
        }

        setIsLoading(true);

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );
            toast.success('Message sent successfully! I will get back to you soon.');
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error('Failed to send message. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Get In <span className="text-primary">Touch</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss DevOps best practices? Let's connect.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
                    <div className="md:col-span-2 space-y-6">
                        <GlassCard className="h-full bg-white/5 border-white/10 hover:border-primary hover:shadow-[0_0_20px_rgba(64,224,208,0.15)] hover:bg-primary/5 transition-all duration-300">
                            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg shadow-sm text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email</p>
                                        <a href="mailto:abhishekpokhrel001@gmail.com" className="font-medium text-gray-200 hover:text-primary transition-colors">
                                            abhishekpokhrel001@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg shadow-sm text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Location</p>
                                        <p className="font-medium text-gray-200">Kathmandu, Nepal</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg shadow-sm text-primary">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Phone</p>
                                        <p className="font-medium text-gray-200">+977 9868136515</p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    <div className="md:col-span-3">
                        <GlassCard className="bg-white/5 border-white/10 hover:border-primary hover:shadow-[0_0_20px_rgba(64,224,208,0.15)] hover:bg-primary/5 transition-all duration-300">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            id="user_name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-500"
                                            placeholder="Abhishek Pokhrel"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            id="user_email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-500"
                                            placeholder="abhishekpokhrel001@gmail.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-500"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-gray-500"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} /> Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
