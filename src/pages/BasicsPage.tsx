
import GitBasics from '../components/GitBasics';
import PageTitle from '../components/PageTitle';

const BasicsPage = () => {
    return (
        <div className="pt-20 min-h-screen animate-fade-in">
            <PageTitle title="Git Basics" />
            <GitBasics />
        </div>
    );
};

export default BasicsPage;
