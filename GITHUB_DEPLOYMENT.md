# 🚀 GitHub & Vercel Deployment Guide

Your portfolio code is ready to be pushed to GitHub and deployed to Vercel!

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository with these settings:
   - **Repository name**: `pintu-portfolio`
   - **Description**: Professional portfolio website with Netlify-inspired design
   - **Visibility**: Public (so you can share it)
   - **Do NOT initialize** with README, .gitignore, or license (we already have these)
3. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, you'll see instructions. Run these commands:

```bash
cd /home/code/pintu-portfolio
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pintu-portfolio.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

Example:
```bash
git remote add origin https://github.com/suresh-sharma/pintu-portfolio.git
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "New Project"
5. Select your `pintu-portfolio` repository
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"
8. Wait for deployment to complete (usually 1-2 minutes)

## Step 4: Get Your Live URL

After deployment completes, Vercel will show you a URL like:
```
https://pintu-portfolio.vercel.app
```

This is your live portfolio! 🎉

## Step 5: Custom Domain (Optional)

To use your own domain:
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., `pintu.dev`)
3. Follow the DNS configuration instructions
4. Your site will be accessible at your custom domain

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Preview deployments for pull requests
- Rollback to previous versions anytime

## Troubleshooting

**"Repository not found" error?**
- Make sure you created the GitHub repository first
- Check that YOUR_USERNAME is correct
- Verify the repository is public

**Build fails on Vercel?**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

**Site looks different?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that images are in `/public` folder
- Wait a few minutes for Vercel to fully deploy

## What's Deployed

Your portfolio includes:
- ✅ 9 complete sections
- ✅ 4 companies with achievements
- ✅ 5 featured projects
- ✅ 13 technical skills
- ✅ 3 testimonials
- ✅ 3 blog posts
- ✅ Contact form
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Netlify-inspired design

## Next Steps After Deployment

1. **Share your portfolio**: Send the Vercel URL to recruiters, clients, and on your resume
2. **Update content**: Edit `lib/portfolio-data.ts` to keep information current
3. **Monitor analytics**: Use Vercel Analytics dashboard to track visitors
4. **Add custom domain**: Optional but recommended for professional appearance

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Help: https://docs.github.com

---

**Your portfolio is production-ready! 🚀**

Once you complete these steps, your portfolio will be live on the internet!
