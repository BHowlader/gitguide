
import { Download, Play, CheckCircle } from 'lucide-react';

const QuickStart = () => {
    const steps = [
        {
            title: 'Install Git',
            description: 'Download and install Git for your operating system.',
            icon: <Download className="h-6 w-6 text-blue-500" />,
            code: 'https://git-scm.com/downloads'
        },
        {
            title: 'Configure Git',
            description: 'Set up your username and email address.',
            icon: <Play className="h-6 w-6 text-purple-500" />,
            code: 'git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"'
        },
        {
            title: 'Verify Installation',
            description: 'Check if Git is installed correctly.',
            icon: <CheckCircle className="h-6 w-6 text-green-500" />,
            code: 'git --version'
        }
    ];

    return (
        <section id="quick-start" className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Quick Start Guide
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Get up and running with Git in minutes. Follow these simple steps to configure your environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-800">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                {step.description}
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto">
                                <pre>{step.code}</pre>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickStart;
