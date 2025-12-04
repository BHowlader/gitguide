
import Hero from '../components/Hero';
import { ArrowRight, Terminal, GitBranch, Github, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        {
            title: 'Quick Start',
            desc: 'Install and configure Git in minutes',
            icon: <Terminal className="h-6 w-6 text-blue-500" />,
            link: '/quick-start',
            color: 'bg-blue-50 dark:bg-blue-900/20'
        },
        {
            title: 'Git Basics',
            desc: 'Learn the core concepts and workflow',
            icon: <BookOpen className="h-6 w-6 text-green-500" />,
            link: '/basics',
            color: 'bg-green-50 dark:bg-green-900/20'
        },
        {
            title: 'Commands',
            desc: 'Comprehensive command reference',
            icon: <Terminal className="h-6 w-6 text-purple-500" />,
            link: '/commands',
            color: 'bg-purple-50 dark:bg-purple-900/20'
        },
        {
            title: 'Branching',
            desc: 'Master parallel development',
            icon: <GitBranch className="h-6 w-6 text-orange-500" />,
            link: '/branching',
            color: 'bg-orange-50 dark:bg-orange-900/20'
        },
        {
            title: 'GitHub',
            desc: 'Collaborate with the world',
            icon: <Github className="h-6 w-6 text-slate-800 dark:text-white" />,
            link: '/github',
            color: 'bg-slate-100 dark:bg-slate-800'
        }
    ];

    return (
        <div className="animate-fade-in">
            <Hero />

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Everything you need to master Git
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Choose a topic to get started or browse our complete reference guide.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <Link
                            key={feature.title}
                            to={feature.link}
                            className="group bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                {feature.title}
                                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-indigo-500" />
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                {feature.desc}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
