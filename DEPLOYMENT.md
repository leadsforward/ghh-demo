# Netlify Deployment Guide

## Quick Deploy (Drag & Drop)

**Yes, you can drag and drop the root folder**, but you need to do it via Netlify's deploy interface:

1. Go to [app.netlify.com](https://app.netlify.com)
2. Log in to your account
3. Drag the entire `ghh-demo` folder into the deploy area
4. Netlify will automatically detect Next.js and use the `netlify.toml` configuration

## Recommended: Git-Based Deploy

For better CI/CD and automatic deployments:

1. **Push to GitHub/GitLab/Bitbucket:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository
   - Netlify will auto-detect Next.js settings from `netlify.toml`

## Build Settings (Auto-Detected)

The `netlify.toml` file configures:
- **Build command:** `npm run build`
- **Publish directory:** `.next` (handled by Netlify Next.js plugin)
- **Node version:** 18
- **Plugin:** `@netlify/plugin-nextjs` (automatically installed)

## Post-Deployment Checklist

After deployment:

1. **Update Environment Variables** (if needed):
   - Go to Site settings → Environment variables
   - Add any API keys or environment-specific configs

2. **Update Domain Settings:**
   - Configure custom domain (goldhearthomes.com)
   - Set up SSL (automatic with Netlify)

3. **Update Contact Information:**
   - Replace placeholder phone numbers in code
   - Update email addresses
   - Configure form handling (Netlify Forms or external service)

4. **Test Forms:**
   - The contact form will work with Netlify Forms automatically
   - Or configure to send to your CRM/webhook

5. **Verify SEO:**
   - Check structured data with Google Rich Results Test
   - Submit sitemap to Google Search Console

## Important Notes

- **First Deploy:** May take 5-10 minutes (installs dependencies)
- **Subsequent Deploys:** Usually 2-3 minutes
- **Node Version:** Netlify will use Node 18 (specified in config)
- **Image Optimization:** Next.js Image component works automatically on Netlify

## Troubleshooting

If deployment fails:

1. Check build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node version compatibility
4. Check for TypeScript errors: `npm run build` locally first

## Next Steps After Deployment

1. Replace placeholder images with actual project photos
2. Update all contact information
3. Configure form submissions (Netlify Forms or CRM integration)
4. Set up call tracking (if using third-party service)
5. Add Google Analytics / tracking codes
6. Test all forms and CTAs
7. Run Lighthouse audit for performance
