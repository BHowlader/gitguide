import React from 'react';
import { FileText, Copy, Check } from 'lucide-react';

const CheatSheet = () => {
    const [copied, setCopied] = React.useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    const sections = [
        {
            title: 'Setup & Config',
            commands: [
                { cmd: 'git config --global user.name "name"', desc: 'Set user name' },
                { cmd: 'git config --global user.email "email"', desc: 'Set user email' },
                { cmd: 'git init', desc: 'Initialize repo' }
            ]
        },
        {
            title: 'Stage & Snapshot',
            commands: [
                { cmd: 'git status', desc: 'Check status' },
                { cmd: 'git add .', desc: 'Add all files' },
                { cmd: 'git commit -m "msg"', desc: 'Commit changes' }
            ]
        },
        {
            title: 'Branch & Merge',
            commands: [
                { cmd: 'git branch', desc: 'List branches' },
                { cmd: 'git checkout -b <branch>', desc: 'Create & switch branch' },
                { cmd: 'git merge <branch>', desc: 'Merge branch' }
            ]
        }
    ];

    return (
        <section id="cheatsheet" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Quick Reference
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        A handy cheat sheet for the most common Git operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 overflow-hidden">
                            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-indigo-500" />
                                    {section.title}
                                </h3>
                            </div>
                            <div className="p-6 space-y-4">
                                {section.commands.map((item, idx) => (
                                    <div key={idx} className="group">
                                        <div className="flex justify-between items-center mb-1">
                                            <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
                                                {item.cmd}
                                            </code>
                                            <button
                                                onClick={() => copyToClipboard(item.cmd)}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                                                title="Copy command"
                                            >
                                                {copied === item.cmd ? (
                                                    <Check className="h-4 w-4 text-green-500" />
                                                ) : (
                                                    <Copy className="h-4 w-4 text-slate-400" />
                                                )}
                                            </button>
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CheatSheet;
