import { useState, useMemo } from 'react';
import { Search, Terminal, Settings, FolderPlus, Save, GitBranch, Share2, Eye, FileDiff, Bug, Mail, Server, Shield, Wrench } from 'lucide-react';
import { gitCommands } from '../data/gitCommands';

const AllCommands = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

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
                        <div key={cmd.name} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 group">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`p-2 rounded-lg ${cmd.isPlumbing ? 'bg-slate-100 dark:bg-slate-800 text-slate-500' : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'}`}>
                                    {getIcon(cmd.category)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {cmd.name}
                                    </h3>
                                    <span className="text-xs text-slate-500">{cmd.category}</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10 line-clamp-2">
                                {cmd.description}
                            </p>
                            <div className="bg-slate-50 dark:bg-slate-800 rounded px-3 py-2 font-mono text-xs text-slate-600 dark:text-slate-300 overflow-x-auto">
                                {cmd.usage}
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
