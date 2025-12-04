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
        description: 'Get and set repository or global options',
        category: 'Setup and Config',
        usage: 'git config --global user.name "My Name"'
    },
    {
        name: 'git help',
        description: 'Display help information about Git',
        category: 'Setup and Config',
        usage: 'git help <command>'
    },
    {
        name: 'git bugreport',
        description: 'Collect information for the user to file a bug report',
        category: 'Setup and Config',
        usage: 'git bugreport'
    },

    // Getting and Creating Projects
    {
        name: 'git init',
        description: 'Create an empty Git repository or reinitialize an existing one',
        category: 'Getting and Creating Projects',
        usage: 'git init'
    },
    {
        name: 'git clone',
        description: 'Clone a repository into a new directory',
        category: 'Getting and Creating Projects',
        usage: 'git clone <url>'
    },

    // Basic Snapshotting
    {
        name: 'git add',
        description: 'Add file contents to the index',
        category: 'Basic Snapshotting',
        usage: 'git add <file>'
    },
    {
        name: 'git status',
        description: 'Show the working tree status',
        category: 'Basic Snapshotting',
        usage: 'git status'
    },
    {
        name: 'git diff',
        description: 'Show changes between commits, commit and working tree, etc',
        category: 'Basic Snapshotting',
        usage: 'git diff'
    },
    {
        name: 'git commit',
        description: 'Record changes to the repository',
        category: 'Basic Snapshotting',
        usage: 'git commit -m "message"'
    },
    {
        name: 'git notes',
        description: 'Add or inspect object notes',
        category: 'Basic Snapshotting',
        usage: 'git notes add'
    },
    {
        name: 'git restore',
        description: 'Restore working tree files',
        category: 'Basic Snapshotting',
        usage: 'git restore <file>'
    },
    {
        name: 'git reset',
        description: 'Reset current HEAD to the specified state',
        category: 'Basic Snapshotting',
        usage: 'git reset --hard HEAD'
    },
    {
        name: 'git rm',
        description: 'Remove files from the working tree and from the index',
        category: 'Basic Snapshotting',
        usage: 'git rm <file>'
    },
    {
        name: 'git mv',
        description: 'Move or rename a file, a directory, or a symlink',
        category: 'Basic Snapshotting',
        usage: 'git mv <old> <new>'
    },

    // Branching and Merging
    {
        name: 'git branch',
        description: 'List, create, or delete branches',
        category: 'Branching and Merging',
        usage: 'git branch <name>'
    },
    {
        name: 'git checkout',
        description: 'Switch branches or restore working tree files',
        category: 'Branching and Merging',
        usage: 'git checkout <branch>'
    },
    {
        name: 'git switch',
        description: 'Switch branches',
        category: 'Branching and Merging',
        usage: 'git switch <branch>'
    },
    {
        name: 'git merge',
        description: 'Join two or more development histories together',
        category: 'Branching and Merging',
        usage: 'git merge <branch>'
    },
    {
        name: 'git mergetool',
        description: 'Run merge conflict resolution tools to resolve merge conflicts',
        category: 'Branching and Merging',
        usage: 'git mergetool'
    },
    {
        name: 'git log',
        description: 'Show commit logs',
        category: 'Branching and Merging',
        usage: 'git log'
    },
    {
        name: 'git stash',
        description: 'Stash the changes in a dirty working directory away',
        category: 'Branching and Merging',
        usage: 'git stash'
    },
    {
        name: 'git tag',
        description: 'Create, list, delete or verify a tag object signed with GPG',
        category: 'Branching and Merging',
        usage: 'git tag -a v1.0 -m "version 1.0"'
    },
    {
        name: 'git worktree',
        description: 'Manage multiple working trees',
        category: 'Branching and Merging',
        usage: 'git worktree add <path>'
    },

    // Sharing and Updating Projects
    {
        name: 'git fetch',
        description: 'Download objects and refs from another repository',
        category: 'Sharing and Updating Projects',
        usage: 'git fetch origin'
    },
    {
        name: 'git pull',
        description: 'Fetch from and integrate with another repository or a local branch',
        category: 'Sharing and Updating Projects',
        usage: 'git pull origin main'
    },
    {
        name: 'git push',
        description: 'Update remote refs along with associated objects',
        category: 'Sharing and Updating Projects',
        usage: 'git push origin main'
    },
    {
        name: 'git remote',
        description: 'Manage set of tracked repositories',
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
        description: 'Show various types of objects',
        category: 'Inspection and Comparison',
        usage: 'git show <commit>'
    },
    {
        name: 'git shortlog',
        description: 'Summarize "git log" output',
        category: 'Inspection and Comparison',
        usage: 'git shortlog'
    },
    {
        name: 'git describe',
        description: 'Give an object a human readable name based on an available ref',
        category: 'Inspection and Comparison',
        usage: 'git describe'
    },

    // Patching
    {
        name: 'git apply',
        description: 'Apply a patch to files and/or to the index',
        category: 'Patching',
        usage: 'git apply <patch>'
    },
    {
        name: 'git cherry-pick',
        description: 'Apply the changes introduced by some existing commits',
        category: 'Patching',
        usage: 'git cherry-pick <commit>'
    },
    {
        name: 'git rebase',
        description: 'Reapply commits on top of another base tip',
        category: 'Patching',
        usage: 'git rebase main'
    },
    {
        name: 'git revert',
        description: 'Revert some existing commits',
        category: 'Patching',
        usage: 'git revert <commit>'
    },

    // Debugging
    {
        name: 'git bisect',
        description: 'Use binary search to find the commit that introduced a bug',
        category: 'Debugging',
        usage: 'git bisect start'
    },
    {
        name: 'git blame',
        description: 'Show what revision and author last modified each line of a file',
        category: 'Debugging',
        usage: 'git blame <file>'
    },
    {
        name: 'git grep',
        description: 'Print lines matching a pattern',
        category: 'Debugging',
        usage: 'git grep "pattern"'
    },

    // Email
    {
        name: 'git am',
        description: 'Apply a series of patches from a mailbox',
        category: 'Email',
        usage: 'git am < file.patch'
    },
    {
        name: 'git format-patch',
        description: 'Prepare patches for e-mail submission',
        category: 'Email',
        usage: 'git format-patch -1 HEAD'
    },
    {
        name: 'git send-email',
        description: 'Send a collection of patches as emails',
        category: 'Email',
        usage: 'git send-email *.patch'
    },
    {
        name: 'git request-pull',
        description: 'Generates a summary of pending changes',
        category: 'Email',
        usage: 'git request-pull v1.0 <url>'
    },

    // External Systems
    {
        name: 'git svn',
        description: 'Bidirectional operation between a Subversion repository and Git',
        category: 'External Systems',
        usage: 'git svn clone <url>'
    },
    {
        name: 'git fast-import',
        description: 'Backend for fast Git data importers',
        category: 'External Systems',
        usage: 'git fast-import'
    },

    // Hosting & Deployment
    {
        name: 'git subtree push',
        description: 'Deploy a subfolder (like dist) to a branch (like gh-pages)',
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
        description: 'Remove untracked files from the working tree',
        category: 'Administration',
        usage: 'git clean -fd'
    },
    {
        name: 'git gc',
        description: 'Cleanup unnecessary files and optimize the local repository',
        category: 'Administration',
        usage: 'git gc'
    },
    {
        name: 'git fsck',
        description: 'Verifies the connectivity and validity of the objects in the database',
        category: 'Administration',
        usage: 'git fsck'
    },
    {
        name: 'git reflog',
        description: 'Manage reflog information',
        category: 'Administration',
        usage: 'git reflog'
    },
    {
        name: 'git filter-branch',
        description: 'Rewrite branches',
        category: 'Administration',
        usage: 'git filter-branch'
    },
    {
        name: 'git instaweb',
        description: 'Instantly browse your working repository in gitweb',
        category: 'Administration',
        usage: 'git instaweb'
    },
    {
        name: 'git archive',
        description: 'Create an archive of files from a named tree',
        category: 'Administration',
        usage: 'git archive --format=zip HEAD'
    },
    {
        name: 'git bundle',
        description: 'Move objects and refs by archive',
        category: 'Administration',
        usage: 'git bundle create <file> <branch>'
    },

    // Plumbing
    {
        name: 'git cat-file',
        description: 'Provide content or type and size information for repository objects',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git cat-file -p <object>'
    },
    {
        name: 'git check-ignore',
        description: 'Debug gitignore / exclude files',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git check-ignore <file>'
    },
    {
        name: 'git checkout-index',
        description: 'Copy files from the index to the working tree',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git checkout-index'
    },
    {
        name: 'git commit-tree',
        description: 'Create a new commit object',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git commit-tree <tree>'
    },
    {
        name: 'git count-objects',
        description: 'Count unpacked number of objects and their disk consumption',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git count-objects'
    },
    {
        name: 'git diff-index',
        description: 'Compare a tree to the working tree or index',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git diff-index'
    },
    {
        name: 'git for-each-ref',
        description: 'Output information on each ref',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git for-each-ref'
    },
    {
        name: 'git hash-object',
        description: 'Compute object ID and optionally creates a blob from a file',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git hash-object -w <file>'
    },
    {
        name: 'git ls-files',
        description: 'Show information about files in the index and the working tree',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git ls-files'
    },
    {
        name: 'git ls-tree',
        description: 'List the contents of a tree object',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git ls-tree <tree>'
    },
    {
        name: 'git merge-base',
        description: 'Find as good common ancestors as possible for a merge',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git merge-base <commit> <commit>'
    },
    {
        name: 'git read-tree',
        description: 'Reads tree information into the index',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git read-tree <tree>'
    },
    {
        name: 'git rev-list',
        description: 'Lists commit objects in reverse chronological order',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git rev-list HEAD'
    },
    {
        name: 'git rev-parse',
        description: 'Pick out and massage parameters',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git rev-parse HEAD'
    },
    {
        name: 'git show-ref',
        description: 'List references in a local repository',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git show-ref'
    },
    {
        name: 'git symbolic-ref',
        description: 'Read, modify and delete symbolic refs',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git symbolic-ref HEAD'
    },
    {
        name: 'git update-index',
        description: 'Register file contents in the working tree to the index',
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
        description: 'Create a tree object from the current index',
        category: 'Plumbing',
        isPlumbing: true,
        usage: 'git write-tree'
    }
];
