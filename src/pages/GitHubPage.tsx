
import GitHub from '../components/GitHub';
import PageTitle from '../components/PageTitle';

const GitHubPage = () => {
    return (
        <div className="pt-20 animate-fade-in">
            <PageTitle title="GitHub Guide" />
            <GitHub />
        </div>
    );
};

export default GitHubPage;
