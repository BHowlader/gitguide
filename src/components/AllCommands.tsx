import { useState, useMemo } from 'react';
import { Search, Terminal, Settings, FolderPlus, Save, GitBranch, Share2, Eye, FileDiff, Bug, Mail, Server, Shield, Wrench, Cloud, Copy, Check } from 'lucide-react';
import { gitCommands } from '../data/gitCommands';

const AllCommands = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

    const categories = useMemo(() => {
        const cats = new Set(gitCommands.map(c => c.category));
        return ['All', ...Array.from(cats)];
    }, []);

    const filteredCommands = useMemo(() => {
        return gitCommands.filter(cmd => {
            const matchesSearch = cmd.name.toLowerCase().includes(search.toLowerCase()) ||
                cmd.description.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || cmd.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [search, selectedCategory]);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedCommand(text);
        setTimeout(() => setCopiedCommand(null), 2000);
    };

    const getIcon = (category: string) => {
        switch (category) {
            case 'Setup and Config': return <Settings className="h-5 w-5" />;
            case 'Getting and Creating Projects': return <FolderPlus className="h-5 w-5" />;
            case 'Basic Snapshotting': return <Save className="h-5 w-5" />;
            case 'Branching and Merging': return <GitBranch className="h-5 w-5" />;
            case 'Sharing and Updating Projects': return <Share2 className="h-5 w-5" />;
            case 'Inspection and Comparison': return <Eye className="h-5 w-5" />;
            case 'Patching': return <FileDiff className="h-5 w-5" />;
            case 'Debugging': return <Bug className="h-5 w-5" />;
            case 'Email': return <Mail className="h-5 w-5" />;
            case 'External Systems': return <Server className="h-5 w-5" />;
            case 'Hosting & Deployment': return <Cloud className="h-5 w-5" />;
            case 'Administration': return <Shield className="h-5 w-5" />;
            case 'Plumbing': return <Wrench className="h-5 w-5" />;
            default: return <Terminal className="h-5 w-5" />;
        }
    };

    return (
        <section id="all-commands" className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Complete Git Command Reference
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                        Explore the full power of Git with our comprehensive command library.
                    </p>

                    {/* Search and Filter */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center max-w-4xl mx-auto">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search commands..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCommands.map((cmd) => (
                        <div key={cmd.name} className="group perspective-1000 h-64 cursor-pointer">
                            <div className="relative w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180">

                                {/* Front Face */}
                                <div className="absolute w-full h-full backface-hidden bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                                    <div className={`p-4 rounded-2xl mb-6 ${cmd.isPlumbing ? 'bg-slate-100 dark:bg-slate-800 text-slate-500' : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'}`}>
                                        {getIcon(cmd.category)}
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">
                                        {cmd.name}
                                    </h3>
                                    <span className="text-sm text-slate-500">{cmd.category}</span>

                                    <div className="absolute bottom-4 text-slate-400 dark:text-slate-600 flex items-center gap-1 text-xs font-medium uppercase tracking-wider">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
                                        Hover to view
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-600 dark:bg-indigo-900 rounded-xl p-6 shadow-xl border border-indigo-500 flex flex-col justify-between text-center">
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-3">{cmd.name}</h3>
                                        <p className="text-indigo-100 text-sm leading-relaxed mb-4">
                                            {cmd.description}
                                        </p>
                                    </div>

                                    <div className="bg-indigo-950/50 rounded-lg p-3 border border-indigo-500/30 text-left relative group/code">
                                        <code className="text-xs font-mono text-indigo-200 break-all block pr-8">
                                            {cmd.usage}
                                        </code>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCopy(cmd.usage);
                                            }}
                                            className="absolute top-2 right-2 p-1.5 rounded-md hover:bg-indigo-500/50 text-indigo-300 hover:text-white transition-colors"
                                            title="Copy command"
                                        >
                                            {copiedCommand === cmd.usage ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {filteredCommands.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-500 dark:text-slate-400 text-lg">No commands found matching your search.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllCommands;
