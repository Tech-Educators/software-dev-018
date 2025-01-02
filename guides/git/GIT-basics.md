
# Creating a GitHub Repository

1. **Go to your GitHub profile.**
2. **Navigate to the "Repositories" tab.**
3. **Click the green "New" button.**
4. **Name your repository, keep it public, and check the box to add a README file.**
5. **Click "Create repository".**

# Cloning a Repository

1. **Click the green "Code" button on your repository page.**
2. **Select the "SSH" tab.**
3. **Copy the URL.**
4. **Open your terminal and navigate to the desired directory.**
5. **Run the command:**
   ```bash
   git clone <your-ssh-url>
   ```
   For example:
   ```bash
   git clone git@github.com:username/repo-name.git
   ```

   You should see output like this:
   ```bash
   Cloning into 'repo-name'...
   Enter passphrase for key '/Users/youruser/.ssh/id_rsa':
   remote: Enumerating objects: 3, done.
   remote: Counting objects: 100% (3/3), done.
   remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
   Receiving objects: 100% (3/3), done.
   ```

6. **Navigate into your repository:**
   ```bash
   cd repo-name
   ```

# Using Git

1. **Make your changes.**
2. **Add all changes:**
   ```bash
   git add .
   ```
3. **Commit your changes with a message:**
   ```bash
   git commit -m 'Your commit message'
   ```
4. **Push your changes to GitHub:**
   ```bash
   git push
   ```

# Deploying a Site with GitHub Pages

1. **Go to the "Settings" tab of your repository.**
2. **Select "Pages" from the left sidebar.**
3. **Under "Source", select "main" as the branch and "root" as the folder.**
4. **Save your changes.**

   To verify your deployment:
   1. **Go to the "Code" tab to return to the main repository page.**
   2. **Look for the "Environments" section on the right. Your deployed site should be listed there.**
   3. **Check the "Actions" tab for deployment progress.**

# Handling Commit Message Issues in Ubuntu

If you forget to finish your quotes in a commit message:

1. **Press `Esc`.**
2. **Type `:wq` and press Enter.**

If you don't provide a commit message, you'll enter a default editor:

1. **Close the terminal and restart your commit message process.**


