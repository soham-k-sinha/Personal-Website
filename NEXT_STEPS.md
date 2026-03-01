# Next Steps - Customizing Your Portfolio

Your portfolio website is fully built and ready to customize! Here's what to do next:

## 🎯 Essential Updates (Do First)

### 1. Update Your Personal Information
Edit `data/site.ts`:
```typescript
export const siteConfig = {
  name: "Your Name",              // ← Change this
  headline: "Your headline",       // ← Change this
  subheadline: "Your tagline",    // ← Change this
  // ... update all fields
}
```

### 2. Add Your Projects
Edit `data/projects.ts`:
- **One project is fully filled** as an example (AI Research Platform)
- **Three projects have TODOs** - fill in your own projects
- Follow the example structure for case study details

### 3. Update Your Experience
Edit `data/experience.ts`:
- Replace placeholder companies and roles
- Update dates, locations, and bullet points
- Add/remove entries as needed

### 4. Customize Skills
Edit `data/skills.ts`:
- Update skill groups with your technologies
- Modify the "What I Build" pillars to match your focus areas

### 5. Add Your Resume PDF
- Place your resume at `public/resume.pdf`
- This is linked from the Resume page download button

## 🎨 Optional Customizations

### Add Open Graph Image
Create a 1200x630px image and save as `public/og-image.png`
- Tools: Figma, Canva, or og-playground.vercel.app
- Shows when sharing your site on social media

### Update Navigation Links
Edit `components/site-header.tsx` and `components/site-footer.tsx` if you want to:
- Add/remove navigation links
- Change section anchor IDs

### Customize Theme Colors
Edit `app/globals.css` to change:
- Primary/accent colors
- Border styles
- Background effects

### Contact Form Integration
Currently logs to console. To send emails:
1. Choose service: SendGrid, Resend, Postmark, etc.
2. Update `app/api/contact/route.ts`
3. Add environment variables

## 🚀 Running & Testing

### Development
```bash
npm run dev
```
Visit http://localhost:3000

### Build & Test Production
```bash
npm run build
npm start
```

### Check for Issues
```bash
npm run lint
```

## 📱 Testing Checklist

- [ ] Desktop navigation works
- [ ] Mobile menu opens and closes
- [ ] All sections scroll smoothly
- [ ] Project modals open and close
- [ ] Contact form submits (check console)
- [ ] Resume page looks good
- [ ] Print resume page (Cmd/Ctrl + P)
- [ ] Social links point to your profiles

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import to Vercel
3. Deploy (auto-detects Next.js)
4. **Update `data/site.ts`** with your production URL

### After Deployment
- [ ] Test site on production URL
- [ ] Share on social media (test OG image)
- [ ] Submit to search engines (optional)
- [ ] Update resume with portfolio link

## 📝 Content Tips

### Project Case Studies
For each project, include:
- **Problem**: What challenge did you solve?
- **Solution**: How did you solve it? What tech did you use?
- **Outcome**: What were the measurable results?
- **Decisions**: What technical choices did you make and why?

### Writing Bullet Points
Follow this format:
- Start with action verb (Built, Designed, Implemented, Led)
- Include metrics when possible (40% increase, 5M users, <10ms latency)
- Focus on impact, not just responsibilities

### Hero Section
Your headline should be:
- Clear about what you do
- Memorable and distinctive
- 3-5 words max per descriptor

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Fonts not loading
Fonts require internet connection during build. Ensure network access.

### Contact form not working
Check browser console for errors. The API currently logs to server console.

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion API](https://www.framer.com/motion/)

## 💡 Quick Wins

1. **Update metadata** in `app/layout.tsx` for better SEO
2. **Add real metrics** in hero section (they're currently placeholders)
3. **Customize the About section story** to make it personal
4. **Add project screenshots** by replacing architecture diagram placeholders
5. **Connect email service** for working contact form

---

**Need help?** Check the main README.md for project structure and detailed documentation.

Good luck with your portfolio! 🚀
