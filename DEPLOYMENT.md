# Deployment Guide - Pintu Portfolio

## Deploy to Vercel (Recommended)

Vercel is the best platform for Next.js applications. It's free, fast, and has excellent integration with GitHub.

### Step 1: Push to GitHub

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Create a new repository named `pintu-portfolio`
   - Don't initialize with README (we already have one)

2. **Initialize git and push your code:**
   ```bash
   cd /home/code/pintu-portfolio
   git init
   git add .
   git commit -m "Initial commit: Netlify-styled portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pintu-portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Sign Up" and choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub account

2. **Import your project:**
   - Click "New Project"
   - Select your `pintu-portfolio` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Wait for deployment:**
   - Vercel will build and deploy your site
   - You'll get a live URL like: `https://pintu-portfolio.vercel.app`

### Step 3: Custom Domain (Optional)

1. **Add your domain:**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `pintu.dev`)
   - Follow DNS configuration instructions

## Environment Variables

Your portfolio doesn't require any environment variables currently. If you add features that need them:

1. In Vercel dashboard: Settings → Environment Variables
2. Add your variables
3. Redeploy

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Preview deployments for pull requests
- Rollback to previous versions anytime

## Performance Optimization

Your portfolio is already optimized:
- ✅ Next.js 15 with Turbopack
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS minification
- ✅ Automatic compression

## Monitoring

In Vercel dashboard:
- **Analytics**: View page performance and user metrics
- **Logs**: Check deployment and runtime logs
- **Deployments**: See all deployment history

## Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

**Site looks different?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that all images are in `/public` folder
- Verify environment variables are set

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create an issue in your repository

---

**Your portfolio is production-ready!** 🚀
