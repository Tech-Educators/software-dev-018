# Getting Started

## Initial Setup

1. **Choose ONE person from your group to take care of the following steps:**

   - Create a new repository and go to settings.
   - Add everyone in your team to the contributors list.
   - Everyone will have to accept the invitation via email/GitHub notification.
   - Create the repository. This is what your group will push to.
   - The person creating the file structure can do it on the main branch and push it.
   - After this, never work on the main branch again.
   - EACH TEAM MEMBER MUST CLONE THE PROJECT — DO NOT FORK IT!

## Cloning the Project and Setting Up

2. Each team member must clone the repository:

```sh
   git clone <repository_url>
   cd <repository_name>
```

3. Go into the server folder and install the necessary node modules: 

```sh
cd server
npm install
```
4. Add a .env file to the server folder with the necessary environment variables.

5. Similarly, go into the client folder and install the necessary node modules:

```sh
cd ../client
npm install
```

## Setting Up Your Branches

6. Before creating a new branch, make sure you are up to date with the main branch. Simply:

`git pull origin main`

7. Don't ever work on the main branch. Here's how to make branches:

`git checkout -b branchName`

Tip: Each branch should be made based on each feature, not page. For example, some branches could be: fetchBooksClient, expressPostRoute, fix/css-colors, etc.

8. When you make a branch, it's only created locally. So, we need to make it exist on your remote so your team members can see it.

`git push --set-upstream origin branchName`

- This will make your branch visible on GitHub to other team members and set the upstream to push to your specific branch. Double check to make sure your new branch is there by going to your organization on GitHub, then to branches.

## Adding, Committing, and Pushing

9. If you've completed the steps above, you're ready to code on your branch now!

- Add and commit your files the same way you've always done it when you’re on a branch, but:

**BEFORE YOU COMMIT, MAKE SURE YOU ARE ON YOUR BRANCH, NOT MAIN.**

- After you add and commit your files, push your changes to your branch on GitHub:

`git push origin branchName`

## Making a Pull Request
10. Now, if you’re ready to make a pull request in order to merge your branch's code with Main, head over to GitHub:
- GitHub Repo >> Branches >> Your Branch >> Compare & Pull Request

- NEVER MERGE YOUR OWN PULL REQUEST UNTIL SOMEONE IN YOUR GROUP APPROVES IT!

## Merging Main Into Your Branch

11. You should keep your branch up-to-date with main. First, commit any changes on your branch. Make sure your work is in good shape and committed, so it won't be a difficult process if there are conflicts.

```sh
# on your branch
git add -A
git commit -m "commit message"
git checkout main
git pull origin main
```

12. Now, merge your branch with main. There could be conflicts if you haven't been pulling regularly. No worries, this can usually be fixed in just a few minutes.

```sh
git checkout branchName
git merge main
```

13.If you tried a merge which resulted in complex conflicts and want to start over, you can recover:

`git merge --abort`

## Deleting Branches
When you are finished with a feature, and everything has been merged with the main branch via pull request, you should delete your branch associated with that feature locally and on GitHub to keep things clean and organized. You can delete it manually on GitHub by going to the organization then to branches, or you can delete it with:

```sh
 git push origin :branchName
```

The difference from before is simply the colon `:`

15. To delete your branch locally:

`git branch -d branchName`

## Important Reminders
- Tell your team every time a pull request has been merged with main. Don’t let your team members fall behind main.
- Pull often, just to be sure. Even if no one has told you about changes on main, pull anyways. It doesn’t hurt.
- Under Branches on GitHub, you can find a message with the number of commits behind or ahead your branch is from main.
- Double check with team members before merging.
- Make sure you are on a branch before you start working. Get in the habit of checking.