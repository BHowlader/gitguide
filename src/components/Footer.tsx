
import { Github, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.svg" alt="GitGuide Logo" className="h-8 w-8 object-contain" />
                            <span className="font-bold text-xl text-white">GitGuide</span>
                        </div>
                        <p className="text-slate-400 max-w-sm">
                            Helping developers master version control one commit at a time. Built with React, TypeScript, and Tailwind CSS.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="https://git-scm.com/doc" className="hover:text-indigo-400 transition-colors">Official Documentation</a></li>
                            <li><a href="https://github.com" className="hover:text-indigo-400 transition-colors">GitHub</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Interactive Tutorial</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Community</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Stack Overflow</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Discord Server</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} GitGuide. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="https://www.bibekhowlader.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Portfolio">
                            <Globe className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/bibek-howlader-273944221" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://github.com/BHowlader" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
