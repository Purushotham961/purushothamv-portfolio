# 🚀 Deploy Your Portfolio on GitHub Pages

Your portfolio website is complete! Follow this step-by-step guide to deploy it on GitHub Pages and make it accessible at `https://Purushotham961.github.io/Portfolio_AI/`

---

## 📋 What You Have

Your portfolio website consists of:
- `index.html` - Main HTML structure
- `style.css` - Colorful, creative styling with animations
- `script.js` - Interactive features and animations
- This deployment guide

---

## 🎯 Deployment Steps

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Fill in the details:
   - **Repository name:** `Portfolio_AI` (or any name you prefer)
   - **Description:** "My professional QA automation portfolio"
   - **Visibility:** Public (required for GitHub Pages)
   - **Initialize this repository with:** Leave unchecked
4. Click **Create repository**

---

### Step 2: Clone the Repository Locally

Open your terminal and run:

```bash
cd c:\projects\New folder\Portfolio_Website

# Initialize git repository
git init

# Add GitHub as remote
git remote add origin https://github.com/Purushotham961/Portfolio_AI.git

# Verify remote is added
git remote -v
```

---

### Step 3: Add Your Files to Git

```bash
# Stage all files
git add .

# Commit changes
git commit -m "Initial commit: Add portfolio website"

# Verify status
git status
```

---

### Step 4: Push to GitHub

```bash
# Push to GitHub (main branch)
git branch -M main
git push -u origin main

# Verify upload
git log
```

---

### Step 5: Enable GitHub Pages

1. Go to your repository: `https://github.com/Purushotham961/Portfolio_AI`
2. Click **Settings** (right side menu)
3. Go to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select "main" and "/" (root)
5. Click **Save**

✅ **Your site is now live!** It will be available at:
```
https://Purushotham961.github.io/Portfolio_AI/
```

---

## ⏳ Wait for Deployment

GitHub Pages takes 1-5 minutes to deploy. You'll see:
- **Your site is live at:** `https://Purushotham961.github.io/Portfolio_AI/`

Refresh the page after a minute to see your portfolio live!

---

## ✅ Verify Deployment

1. Visit: `https://Purushotham961.github.io/Portfolio_AI/`
2. Check that:
   - ✅ All sections load (Home, About, Experience, Skills, etc.)
   - ✅ Navigation works
   - ✅ Links and buttons respond
   - ✅ Colors and animations display correctly

---

## 🎨 Customize Your Portfolio

### Update Personal Information

Edit `index.html` and find these sections to customize:

**1. Hero Section:**
```html
<h1 class="hero-title">Hi, I'm <span class="highlight">Purushotham</span></h1>
<p class="hero-subtitle">Automation QA Engineer | Test Automation Framework Designer</p>
```

**2. Contact Information:**
- Replace `purushothamvilasagaram95@gmail.com` with your email
- Update LinkedIn URL
- Update GitHub profile URL

**3. Social Links:**
Look for sections with:
- Email: `mailto:your-email@example.com`
- LinkedIn: `https://www.linkedin.com/in/your-profile`
- GitHub: `https://github.com/your-username`

**4. Project Links:**
Update project URLs to point to your actual repositories

**5. Blog Articles:**
Update dates and article titles in the Blog section

---

## 🎯 Add a Resume PDF

1. **Create your resume** as a PDF file
2. **Name it:** `resume.pdf`
3. **Place it** in the same folder as `index.html`
4. **The download button** will automatically work!

Download button is here:
```html
<a href="resume.pdf" download class="btn btn-primary">
    <i class="fas fa-download"></i> Download Resume (PDF)
</a>
```

---

## 📱 Test on Different Devices

Your portfolio is **responsive** and works on:
- ✅ Desktop (1920px, 1440px, etc.)
- ✅ Tablet (768px)
- ✅ Mobile (320px - 480px)

Test using Chrome DevTools:
1. Press `F12` to open Developer Tools
2. Click the **device toggle** icon (top left)
3. Test on different screen sizes

---

## 🔄 Update Your Portfolio

After making changes locally:

```bash
# Add changes
git add .

# Commit
git commit -m "Update: [describe changes]"

# Push to GitHub
git push origin main
```

Your live site updates automatically!

---

## 🎨 Color Customization

Modify colors in `style.css`:

```css
:root {
    --primary-color: #6366f1;      /* Indigo */
    --secondary-color: #ec4899;    /* Pink */
    --accent-color: #f59e0b;       /* Amber */
    --dark-color: #1f2937;         /* Dark Gray */
    --light-color: #f9fafb;        /* Light Gray */
}
```

Change these hex values to your preferred colors!

---

## 🎬 Animation Customization

Modify animations in `style.css`:

**Change animation speed:**
```css
animation: fadeInUp 0.6s ease;  /* Change 0.6s to your preferred duration */
```

**Supported animations:**
- `fadeInUp` - Fade in from bottom
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `pulse` - Pulsing effect
- `float` - Floating effect

---

## 🔗 SEO & Metadata

Update in `index.html` head section:

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="Your keywords, QA Engineer, Test Automation">
```

---

## 📊 Domain Name (Optional)

To use a custom domain:

1. Purchase a domain (e.g., purushotham.com)
2. In your repo: **Settings** → **Pages** → **Custom domain**
3. Enter your domain
4. Follow DNS configuration instructions

---

## 🚨 Troubleshooting

### Site Not Loading
- ✅ Wait 5-10 minutes for GitHub Pages to deploy
- ✅ Check GitHub Pages settings are enabled
- ✅ Verify branch is set to "main"

### CSS/JS Not Loading
- ✅ Check file paths are correct (case-sensitive)
- ✅ Verify files are in root directory
- ✅ Hard refresh browser (Ctrl+Shift+R)

### Contact Form Not Working
- ✅ Current setup uses mailto: (opens email client)
- ✅ For advanced form handling, consider services like:
  - Formspree (https://formspree.io)
  - EmailJS (https://www.emailjs.com)
  - Netlify Forms

### Mobile Menu Not Working
- ✅ Check JavaScript is enabled
- ✅ Clear browser cache
- ✅ Test in different browser

---

## 📧 Add Advanced Contact Form (Optional)

To use **Formspree** for email submissions:

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Get your form endpoint
4. Update the form action in `index.html`:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

---

## 🎯 Next Steps After Deployment

### 1. Share Your Portfolio
- [ ] Post on LinkedIn with portfolio link
- [ ] Update LinkedIn profile with portfolio URL
- [ ] Share on GitHub profile README
- [ ] Add to resume

### 2. Enhance Your Portfolio
- [ ] Add more projects as you build them
- [ ] Write blog posts on Medium/Dev.to
- [ ] Update skills and experience regularly
- [ ] Add blog section with your articles

### 3. Monitor Traffic (Optional)
- [ ] Set up Google Analytics
- [ ] Track portfolio views
- [ ] Monitor visitor behavior

### 4. Keep Content Fresh
- [ ] Update projects quarterly
- [ ] Add new blog posts monthly
- [ ] Review and update skills annually

---

## 📚 File Structure

```
Portfolio_AI/
├── index.html           ← Main page
├── style.css            ← Styling & animations
├── script.js            ← Interactivity
├── resume.pdf           ← Your resume (add this)
├── .gitignore           ← (Optional)
└── README.md            ← (Optional - project description)
```

---

## 🔒 Privacy & Security

✅ **Your portfolio is safe:**
- No sensitive data stored
- No user data collection
- Static files only
- HTTPS enabled by default (GitHub Pages)

---

## 💡 Pro Tips

1. **Create a README.md** in your repo to describe the portfolio
2. **Enable GitHub Issues** to track feature requests
3. **Use GitHub Actions** for advanced automation (optional)
4. **Add a robots.txt** for SEO optimization (optional)
5. **Implement Google Analytics** to track visitors (optional)

---

## 🎉 Launch Checklist

- [ ] Repository created on GitHub
- [ ] Files pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site accessible at `https://Purushotham961.github.io/Portfolio_AI/`
- [ ] All sections load correctly
- [ ] Navigation works properly
- [ ] Contact information updated
- [ ] Links to GitHub/LinkedIn work
- [ ] Mobile responsive verified
- [ ] Portfolio shared on LinkedIn

---

## 📞 Quick Reference

| Item | Details |
|------|---------|
| **GitHub Repo** | https://github.com/Purushotham961/Portfolio_AI |
| **Live Portfolio** | https://Purushotham961.github.io/Portfolio_AI/ |
| **Email** | purushothamvilasagaram95@gmail.com |
| **LinkedIn** | https://www.linkedin.com/in/purushothamv/ |
| **GitHub** | https://github.com/Purushotham961 |

---

## 🎬 Video Tutorial (If Needed)

GitHub Pages deployment video on YouTube:
- Search: "Deploy portfolio with GitHub Pages"
- Follow along with your repository

---

## 💬 Getting Help

If you encounter issues:

1. **Check GitHub Pages status:** https://www.githubstatus.com
2. **Read GitHub Pages docs:** https://docs.github.com/en/pages
3. **Search Stack Overflow:** Tag: `github-pages`
4. **Contact GitHub Support:** In your repo settings

---

## 🎊 Congratulations!

Your professional QA portfolio is now live! 

**You're ready to:**
- ✅ Impress potential employers
- ✅ Showcase your automation expertise
- ✅ Network with other professionals
- ✅ Share your projects with the world

**Next:** Customize the content, update with your projects, and share the link on LinkedIn and your resume!

---

**Created:** May 28, 2026  
**Status:** Ready to Deploy  
**Support:** All files included and tested

Good luck with your portfolio! 🚀
