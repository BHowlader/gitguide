export interface GitCommand {
    name: string;
    description: string;
    category: string;
    usage: string;
    isPlumbing?: boolean;
}

export const gitCommands: GitCommand[] = [
    // Setup and Config
    {
        name: 'git config',
        description: 'Configure Git settings (like your name and email)',
        category: 'Setup and Config',
        usage: 'git config --global user.name "My Name"'
    },
    {
        name: 'git help',
        description: 'Display help information about Git commands',
        category: 'Setup and Config',
        usage: 'git help <command>'
    },
    {
        name: 'git bugreport',
        description: 'Collect information to file a bug report',
        category: 'Setup and Config',
        usage: 'git bugreport'
    },

    // Getting and Creating Projects
    {
        name: 'git init',
        description: 'Start a new Git repository in the current folder',
        category: 'Getting and Creating Projects',
        usage: 'git init'
    },
    {
        name: 'git clone',
        description: 'Download a copy of an existing repository',
        category: 'Getting and Creating Projects',
        usage: 'git clone <url>'
    },

    // Basic Snapshotting
    {
        name: 'git add',
        description: 'Stage files to be included in the next commit',
        category: 'Basic Snapshotting',
        usage: 'git add <file>'
    },
    {
        name: 'git status',
        description: 'Check which files are changed, staged, or untracked',
        category: 'Basic Snapshotting',
        usage: 'git status'
    },
    {
        name: 'git diff',
        description: 'See the exact changes in your files',
        category: 'Basic Snapshotting',
        usage: 'git diff'
    },
    {
        name: 'git commit',
        description: 'Save your staged changes to the history',
        category: 'Basic Snapshotting',
        usage: 'git commit -m "message"'
    },
    {
        name: 'git notes',
        description: 'Add extra notes to objects without changing them',
        category: 'Basic Snapshotting',
        usage: 'git notes add'
    },
    {
        name: 'git restore',
        description: 'Discard changes in working directory',
        category: 'Basic Snapshotting',
        usage: 'git restore <file>'
    },
    {
        name: 'git reset',
        description: 'Undo commits or unstage files',
        category: 'Basic Snapshotting',
        usage: 'git reset --hard HEAD'
    },
    {
        name: 'git rm',
        description: 'Remove files from the working tree and the index',
        category: 'Basic Snapshotting',
        usage: 'git rm <file>'
    },
    {
        name: 'git mv',
        description: 'Move or rename a file',
        category: 'Basic Snapshotting',
        usage: 'git mv <old> <new>'
    },

    // Branching and Merging
    {
        name: 'git branch',
        description: 'Create, list, or delete branches',
        category: 'Branching and Merging',
        usage: 'git branch <name>'
    },
    {
        name: 'git checkout',
        description: 'Switch to a different branch',
        category: 'Branching and Merging',
        usage: 'git checkout <branch>'
    },
    {
        name: 'git switch',
        description: 'A newer, safer way to switch branches',
        category: 'Branching and Merging',
        usage: 'git switch <branch>'
    },
    {
        name: 'git merge',
        description: 'Combine changes from another branch into this one',
        category: 'Branching and Merging',
        usage: 'git merge <branch>'
    },
    {
        name: 'git mergetool',
        description: 'Run a tool to resolve merge conflicts',
        category: 'Branching and Merging',
        usage: 'git mergetool'
    },
    {
        name: 'git log',
        description: 'View the commit history',
        category: 'Branching and Merging',
        usage: 'git log'
    },
    {
        name: 'git stash',
        description: 'Temporarily save changes without committing',
        category: 'Branching and Merging',
        usage: 'git stash'
    },
    {
        name: 'git tag',
        description: 'Label a specific commit (e.g. v1.0)',
        category: 'Branching and Merging',
        usage: 'git tag -a v1.0 -m "version 1.0"'
    },
    {
        name: 'git worktree',
        description: 'Manage multiple working trees attached to the same repo',
        category: 'Branching and Merging',
        usage: 'git worktree add <path>'
    },

    // Sharing and Updating Projects
    {
        name: 'git fetch',
        description: 'Download updates from remote without merging',
        category: 'Sharing and Updating Projects',
        usage: 'git fetch origin'
    },
    {
        name: 'git pull',
        description: 'Download and merge updates from remote',
        category: 'Sharing and Updating Projects',
        usage: 'git pull origin main'
    },
    {
        name: 'git push',
        description: 'Upload your commits to the remote repository',
        category: 'Sharing and Updating Projects',
        usage: 'git push origin main'
    },
    {
        name: 'git remote',
        description: 'Manage connections to remote repositories',
        category: 'Sharing and Updating Projects',
        usage: 'git remote add origin <url>'
    },
    {
        name: 'git submodule',
        description: 'Initialize, update or inspect submodules',
        category: 'Sharing and Updating Projects',
        usage: 'git submodule add <url>'
    },

    // Inspection and Comparison
    {
        name: 'git show',
        description: 'View details of a specific commit or object',
        category: 'Inspection and Comparison',
        usage: 'git show <commit>'
    },
    {
        name: 'git shortlog',
        description: 'Show a summarized list of commits',
        category: 'Inspection and Comparison',
        usage: 'git shortlog'
    },
    {
        name: 'git describe',
        description: 'Find the most recent tag reachable from a commit',
        category: 'Inspection and Comparison',
        usage: 'git describe'
    },
    {
        name: 'git whatchanged',
        description: 'Show logs along with the files changed in each commit',
        category: 'Inspection and Comparison',
        usage: 'git whatchanged'
    },
    {
        name: 'git verify-commit',
        description: 'Check if a commit is securely signed',
        category: 'Inspection and Comparison',
        usage: 'git verify-commit <commit>'
    },

    // Patching
    {
        name: 'git apply',
        description: 'Apply a patch file to your code',
        category: 'Patching',
        usage: 'git apply <patch>'
    },
    {
        name: 'git cherry-pick',
        description: 'Copy a specific commit from another branch to here',
        category: 'Patching',
        usage: 'git cherry-pick <commit>'
    },
    {
        name: 'git rebase',
        description: 'Move your branch to start from a different commit',
        category: 'Patching',
        usage: 'git rebase main'
    },
    {
        name: 'git revert',
        description: 'Create a new commit that undoes a previous commit',
        category: 'Patching',
        usage: 'git revert <commit>'
    },

    // Debugging
    {
        name: 'git bisect',
        description: 'Find the commit that caused a bug by binary search',
        category: 'Debugging',
        usage: 'git bisect start'
    },
    {
        name: 'git blame',
        description: 'Show who last modified each line of a file',
        category: 'Debugging',
        usage: 'git blame <file>'
    },
    {
        name: 'git grep',
        description: 'Search for text inside any file in your history',
        category: 'Debugging',
        usage: 'git grep "pattern"'
    },

    // Email
    {
        name: 'git am',
        description: 'Apply patches sent via email',
        category: 'Email',
        usage: 'git am < file.patch'
    },
    {
        name: 'git format-patch',
        description: 'Convert commits into email-ready patch files',
        category: 'Email',
        usage: 'git format-patch -1 HEAD'
    },
    {
        name: 'git send-email',
        description: 'Send your patches via email',
        category: 'Email',
        usage: 'git send-email *.patch'
    },
    {
        name: 'git request-pull',
        description: 'Generate a summary to ask someone to pull your changes',
        category: 'Email',
        usage: 'git request-pull v1.0 <url>'
    },

    // External Systems
    {
        name: 'git svn',
        description: 'Interact with Subversion (SVN) repositories',
        category: 'External Systems',
        usage: 'git svn clone <url>'
    },
    {
        name: 'git fast-import',
        description: 'Import large amounts of data into Git quickly',
        category: 'External Systems',
        usage: 'git fast-import'
    },
    {
        name: 'git lfs',
        description: 'Manage large files (like images/videos) with Git LFS',
        category: 'External Systems',
        usage: 'git lfs track "*.psd"'
    },

    // Hosting & Deployment
    {
        name: 'git subtree push',
        description: 'Deploy a specific folder to a branch (e.g. GitHub Pages)',
        category: 'Hosting & Deployment',
        usage: 'git subtree push --prefix dist origin gh-pages'
    },
    {
        name: 'git push origin :gh-pages',
        description: 'Deploy a branch directly to GitHub Pages',
        category: 'Hosting & Deployment',
        usage: 'git push origin main:gh-pages'
    },
    {
        name: 'git push heroku',
        description: 'Deploy the current branch to Heroku',
        category: 'Hosting & Deployment',
        usage: 'git push heroku main'
    },

    // Administration
    {
        name: 'git clean',
        description: 'Remove untracked/new files from your working directory',
        category: 'Administration',
        usage: 'git clean -fd'
    },
    {
        name: 'git gc',
        description: 'Cleanup and optimize the local repository',
        category: 'Administration',
        usage: 'git gc'
    },
    {
        name: 'git maintenance',
        description: 'Run background tasks to keep the repo healthy',
        category: 'Administration',
        usage: 'git maintenance start'
    },
    {
        name: 'git fsck',
        description: 'Check the database for errors and integrity issues',
        category: 'Administration',
        usage: 'git fsck'
    },
    {
        name: 'git reflog',
        description: 'View a log of all your local HEAD movements (undo history)',
        category: 'Administration',
        usage: 'git reflog'
    },
    {
        name: 'git filter-branch',
        description: 'Rewrite history (e.g. remove a file from all commits)',
        category: 'Administration',
        usage: 'git filter-branch'
    },
    {
        name: 'git instaweb',
        description: 'Browse your repo in a web browser instantly',
        category: 'Administration',
        usage: 'git instaweb'
    },
    {
        name: 'git archive',
        description: 'Create a zip/tar archive of the repository',
        category: 'Administration',
        usage: 'git archive --format=zip HEAD'
    },
    {
        name: 'git bundle',
        description: 'Package objects and refs into a single file for transfer',
        category: 'Administration',
        usage: 'git bundle create <file> <branch>'
    },

    // Plumbing (Internal Tools)
    {
        name: 'git cat-file',
        description: 'Show content or details of repository objects',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git cat-file -p <object>'
    },
    {
        name: 'git check-ignore',
        description: 'Check why a file is being ignored',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git check-ignore <file>'
    },
    {
        name: 'git checkout-index',
        description: 'Copy files from the staging area to the working folder',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git checkout-index'
    },
    {
        name: 'git commit-tree',
        description: 'Create a new commit object manually',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git commit-tree <tree>'
    },
    {
        name: 'git count-objects',
        description: 'Count how many objects are in the database',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git count-objects'
    },
    {
        name: 'git diff-index',
        description: 'Compare a tree to the working directory or staging area',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git diff-index'
    },
    {
        name: 'git for-each-ref',
        description: 'List and filter references (branches, tags)',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git for-each-ref'
    },
    {
        name: 'git hash-object',
        description: 'Compute the ID of an object and optionally create it',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git hash-object -w <file>'
    },
    {
        name: 'git ls-files',
        description: 'List all files in the staging area',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git ls-files'
    },
    {
        name: 'git ls-tree',
        description: 'List the contents of a tree object (like a directory)',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git ls-tree <tree>'
    },
    {
        name: 'git merge-base',
        description: 'Find the common ancestor of two commits',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git merge-base <commit> <commit>'
    },
    {
        name: 'git read-tree',
        description: 'Read tree information into the staging area',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git read-tree <tree>'
    },
    {
        name: 'git rev-list',
        description: 'List commit objects in reverse chronological order',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git rev-list HEAD'
    },
    {
        name: 'git rev-parse',
        description: 'Parse and validate parameters (e.g. convert HEAD to ID)',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git rev-parse HEAD'
    },
    {
        name: 'git show-ref',
        description: 'List references in the local repository',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git show-ref'
    },
    {
        name: 'git symbolic-ref',
        description: 'Read or modify symbolic refs (like HEAD)',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git symbolic-ref HEAD'
    },
    {
        name: 'git update-index',
        description: 'Register file contents in the working directory to the staging area',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git update-index'
    },
    {
        name: 'git update-ref',
        description: 'Update the object name stored in a ref safely',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git update-ref'
    },
    {
        name: 'git verify-pack',
        description: 'Validate packed Git archive files',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git verify-pack'
    },
    {
        name: 'git write-tree',
        description: 'Create a tree object from the current staging area',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git write-tree'
    }
];
