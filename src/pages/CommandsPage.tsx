

import AllCommands from '../components/AllCommands';
import PageTitle from '../components/PageTitle';

const CommandsPage = () => {
    return (
        <div className="pt-20 min-h-screen animate-fade-in">
            <PageTitle title="Command Reference" />
            <div className="border-t border-slate-200 dark:border-slate-800">
                <AllCommands />
            </div>
        </div>
    );
};

export default CommandsPage;
