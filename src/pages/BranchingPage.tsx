
import Branching from '../components/Branching';
import PageTitle from '../components/PageTitle';

const BranchingPage = () => {
    return (
        <div className="pt-20 min-h-screen animate-fade-in">
            <PageTitle title="Branching & Merging" />
            <Branching />
        </div>
    );
};

export default BranchingPage;
