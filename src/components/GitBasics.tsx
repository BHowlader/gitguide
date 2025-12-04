
import { Database, Save, Upload, ArrowRight } from 'lucide-react';

const GitBasics = () => {
    return (
        <section id="basics" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Understanding the Basics
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                            Git works by recording the changes you make to a project over time. This allows you to revert to specific versions, compare changes, and collaborate with others seamlessly.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                                    <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Repository</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        A storage space where your project lives. It can be local to a folder on your computer, or hosted on GitHub.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center">
                                    <Save className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Commit</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        A snapshot of your repository at a specific point in time. Think of it as a save point in a game.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                                    <Upload className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Push & Pull</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Syncing your local changes with a remote repository. Push sends changes, Pull retrieves them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
                        <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    <div className="text-xs font-mono text-slate-500">Working Directory</div>
                                </div>
                                <div className="flex justify-center">
                                    <ArrowRight className="h-6 w-6 text-slate-400 transform rotate-90" />
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    <div className="text-xs font-mono text-slate-500">Staging Area</div>
                                </div>
                                <div className="flex justify-center">
                                    <ArrowRight className="h-6 w-6 text-slate-400 transform rotate-90" />
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    <div className="text-xs font-mono text-slate-500">Local Repository</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitBasics;
