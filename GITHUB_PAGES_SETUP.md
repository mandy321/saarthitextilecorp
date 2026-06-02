# GitHub Pages Deployment Guide

## Quick Start - Deploy Your Landing Page

Follow these steps to deploy your Saarthi Textile Corp landing page on GitHub Pages:

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub: https://github.com/mandy321/saarthitextilecorp
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and folder `/root`
   - Click **Save**

### Step 2: Wait for Deployment
- GitHub will automatically build and deploy your site
- Look for a green checkmark next to your commit (takes 1-2 minutes)
- Your site will be live at: `https://mandy321.github.io/saarthitextilecorp/`

### Step 3: Verify Deployment
Visit your new URL and check that:
- [ ] Tennis ball animation appears on page load
- [ ] Navigation menu works smoothly
- [ ] All product cards display correctly
- [ ] Chatbot widget is accessible
- [ ] Google Maps embed loads
- [ ] Contact form is interactive
- [ ] Blog section displays properly

## Setup Custom Domain (Optional)

If you want to use a custom domain like `www.saarthitextile.com`:

1. Go to **Settings > Pages**
2. Under "Custom domain", enter your domain name
3. GitHub will check the domain and provide DNS records to add
4. Update your domain's DNS settings with GitHub's records
5. GitHub will automatically provision an SSL certificate

## Important Notes

- The site is deployed from the `/root` folder of your repository
- All files (HTML, CSS, JS) are served directly as static files
- No server-side processing is supported on GitHub Pages
- Forms using Formspree will work for email notifications
- The site updates automatically when you push to the main branch

## Troubleshooting

**Site not appearing after enabling Pages:**
- Wait 2-3 minutes for GitHub to build and deploy
- Check that the `.nojekyll` file is present in the repo
- Verify the branch is set to `main` in Pages settings

**CSS/JS files not loading:**
- Clear browser cache (Ctrl+Shift+Del)
- Check file paths are relative (e.g., `styles/main.css` not `/styles/main.css`)
- Ensure all files are committed and pushed to GitHub

**Chatbot emails not sending:**
- Set up a Formspree account at https://formspree.io/
- Create a new form for saarthitextilecorp@gmail.com
- Replace `YOUR_FORM_ID` in `js/chatbot.js` with your form ID
- Test by submitting through the chatbot widget

## Monitoring Performance

After deployment, you can monitor:
- Page load times using GitHub's insights
- Analytics by adding Google Analytics (optional)
- Form submissions through Formspree dashboard

## Next Steps for Production

1. **Custom Domain**: Set up company domain
2. **Email Service**: Configure Formspree for chatbot emails
3. **Analytics**: Add Google Analytics tracking
4. **SEO**: Update meta tags and add sitemap.xml
5. **Backup**: Regular backups of your repository
6. **SSL**: Automatic via GitHub Pages (HTTPS enabled by default)

---

**Your site is ready for the world!** 🎉
