
import Commands from '../components/Commands';
import AllCommands from '../components/AllCommands';

const CommandsPage = () => {
    return (
        <div className="pt-20 min-h-screen animate-fade-in">
            <Commands />
            <div className="border-t border-slate-200 dark:border-slate-800">
                <AllCommands />
            </div>
        </div>
    );
};

export default CommandsPage;
