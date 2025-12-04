
import { GitBranch, GitMerge, GitPullRequest } from 'lucide-react';

const Branching = () => {
    return (
        <section id="branching" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Branching & Merging
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                        Branches allow you to work on different versions of a project at one time.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <GitBranch className="h-32 w-32 text-indigo-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                                <GitBranch className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Create Branch</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Create a new isolated path for development.
                            </p>
                            <div className="bg-slate-900 rounded-lg p-3 font-mono text-sm text-slate-300">
                                git checkout -b feature-name
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <GitMerge className="h-32 w-32 text-purple-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                                <GitMerge className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Merge Branch</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Combine changes from one branch into another.
                            </p>
                            <div className="bg-slate-900 rounded-lg p-3 font-mono text-sm text-slate-300">
                                git merge feature-name
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <GitPullRequest className="h-32 w-32 text-emerald-600" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6">
                                <GitPullRequest className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Resolve Conflicts</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Handle overlapping changes between branches.
                            </p>
                            <div className="bg-slate-900 rounded-lg p-3 font-mono text-sm text-slate-300">
                                # Edit files manually
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branching;
