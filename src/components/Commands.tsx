
import { Terminal } from 'lucide-react';

const Commands = () => {
    const commands = [
        {
            cmd: 'git init',
            desc: 'Initialize a new Git repository'
        },
        {
            cmd: 'git clone <url>',
            desc: 'Clone a repository into a new directory'
        },
        {
            cmd: 'git add .',
            desc: 'Add all changes to the staging area'
        },
        {
            cmd: 'git commit -m "msg"',
            desc: 'Commit changes with a message'
        },
        {
            cmd: 'git status',
            desc: 'Show the working tree status'
        },
        {
            cmd: 'git push',
            desc: 'Update remote refs along with associated objects'
        },
        {
            cmd: 'git pull',
            desc: 'Fetch from and integrate with another repository'
        },
        {
            cmd: 'git branch',
            desc: 'List, create, or delete branches'
        }
    ];

    return (
        <section id="commands" className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Essential Commands
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        The most commonly used Git commands you'll need for your daily workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {commands.map((item, index) => (
                        <div key={index} className="group bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500">
                            <div className="flex items-center gap-3 mb-3">
                                <Terminal className="h-5 w-5 text-indigo-500" />
                                <span className="font-mono text-sm font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                    {item.cmd.split(' ')[0]} {item.cmd.split(' ')[1]}
                                </span>
                            </div>
                            <code className="block font-mono text-sm text-indigo-600 dark:text-indigo-400 mb-2 break-words">
                                {item.cmd}
                            </code>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Commands;
