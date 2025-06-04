# How to Host Nimbus 1337 on Vercel

This guide explains how to host the Nimbus 1337 challenge on the Vercel platform, which offers free hosting for static websites.

## Prerequisites

1. A [Vercel](https://vercel.com) account
2. Git installed on your computer
3. The Nimbus 1337 source code

## Deployment Steps

### 1. Prepare Your Repository

First, make sure your code is in a Git repository. You can use GitHub, GitLab, or Bitbucket.

```bash
# Initialize Git repository (if not already initialized)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial version of Nimbus 1337"

# Connect to remote repository (replace with your URL)
git remote add origin https://github.com/your-username/nimbus-1337.git

# Push to remote repository
git push -u origin main
```

### 2. Deploy on Vercel

#### Option 1: Using Vercel's web interface

1. Go to [vercel.com](https://vercel.com) and log in
2. Click on "New Project"
3. Import your Git repository
4. Configure build options (usually Vercel automatically detects that it's a static site)
5. Click "Deploy"

#### Option 2: Using Vercel CLI

1. Install the Vercel CLI:

```bash
npm install -g vercel
```

2. In the project directory, run:

```bash
vercel login
vercel
```

3. Follow the on-screen instructions

### 3. Configure a Custom Domain (optional)

After deployment, you can configure a custom domain in the project settings on Vercel.

1. Access the project dashboard
2. Go to "Settings" > "Domains"
3. Add your custom domain
4. Follow the instructions to configure DNS records

## Future Updates

To update the site after making changes:

1. Make changes to the code
2. Commit and push to the repository

```bash
git add .
git commit -m "Site update"
git push
```

Vercel will automatically detect the changes and deploy a new version.

## Notes on Local Storage

The application form in Nimbus 1337 uses localStorage to store submissions:

1. All data is stored in the user's browser
2. Data will persist between sessions on the same device/browser
3. No server-side storage is needed, making it ideal for static hosting
4. Remember that localStorage is limited to the specific browser and device

## Notes on Formspree

The application form in Nimbus 1337 uses Formspree to collect submissions:

1. You need to create a Formspree account at [formspree.io](https://formspree.io)
2. The form in script.js is configured with a Formspree endpoint: `action="https://formspree.io/f/mwpbpooo"`
3. This endpoint is already configured to send submissions to your email
4. All submissions will be forwarded to your email
5. You can also view all submissions in the Formspree dashboard 