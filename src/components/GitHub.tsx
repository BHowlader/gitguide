
import { Github, Globe, Users } from 'lucide-react';

const GitHub = () => {
    return (
        <section id="github" className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
                            <div className="relative bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800">
                                {/* Mock GitHub Interface */}
                                <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                                    <div className="flex-1">
                                        <div className="h-3 w-24 bg-slate-700 rounded mb-2"></div>
                                        <div className="h-2 w-16 bg-slate-800 rounded"></div>
                                    </div>
                                    <div className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-600/30">Public</div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 text-slate-500">📁</div>
                                            <span className="text-slate-300 text-sm">src</span>
                                        </div>
                                        <span className="text-slate-500 text-xs">2 hours ago</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 text-slate-500">📄</div>
                                            <span className="text-slate-300 text-sm">README.md</span>
                                        </div>
                                        <span className="text-slate-500 text-xs">yesterday</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-800">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 text-slate-500">⚙️</div>
                                            <span className="text-slate-300 text-sm">package.json</span>
                                        </div>
                                        <span className="text-slate-500 text-xs">3 days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                            <Github className="h-4 w-4" />
                            <span>GitHub Integration</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Collaborate with the World
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                            GitHub is a cloud-based hosting service that lets you manage Git repositories. It provides a web-based graphical interface and access control and several collaboration features.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                    <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Remote Hosting</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Store your code safely in the cloud.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                    <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Team Collaboration</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Work together with pull requests.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHub;
