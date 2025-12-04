
import CheatSheet from '../components/CheatSheet';
import PageTitle from '../components/PageTitle';

const CheatSheetPage = () => {
    return (
        <div className="pt-20 min-h-screen animate-fade-in">
            <PageTitle title="Git Cheat Sheet" />
            <CheatSheet />
        </div>
    );
};

export default CheatSheetPage;
