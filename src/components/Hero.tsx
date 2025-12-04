
import { Terminal, ArrowRight, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium mb-8 animate-fade-in-up">
                    <GitBranch className="h-4 w-4" />
                    <span>Master Git & GitHub Today</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                    Version Control <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                        Made Simple
                    </span>
                </h1>

                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    The complete guide to mastering Git and GitHub. From your first commit to advanced branching strategies, we've got you covered.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/quick-start"
                        className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-indigo-500/30 flex items-center gap-2"
                    >
                        Start Learning
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/cheatsheet"
                        className="px-8 py-4 bg-slate-800 text-slate-200 border border-slate-700 hover:border-indigo-500 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2"
                    >
                        <Terminal className="h-5 w-5" />
                        Cheat Sheet
                    </Link>
                </div>

                {/* Code Preview */}
                <div className="mt-20 mx-auto max-w-3xl bg-slate-900 rounded-xl shadow-2xl overflow-hidden border border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-xs text-slate-400 font-mono">bash</span>
                    </div>
                    <div className="p-6 text-left font-mono text-sm sm:text-base">
                        <div className="flex gap-4 mb-2">
                            <span className="text-green-400">$</span>
                            <span className="text-slate-300">git init</span>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <span className="text-green-400">$</span>
                            <span className="text-slate-300">git add .</span>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <span className="text-green-400">$</span>
                            <span className="text-slate-300">git commit -m "Initial commit"</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-green-400">$</span>
                            <span className="text-slate-300">git push origin main</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
