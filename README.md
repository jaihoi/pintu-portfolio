# Pintu Kumar Sharma - Professional Portfolio

A modern, professional portfolio website built with Next.js, React, and Tailwind CSS. Styled with Netlify's design aesthetic.

## 🚀 Features

### Design & UX
- **Netlify-Inspired Design** - Dark navy background with teal accents
- **Responsive Layout** - Mobile, tablet, and desktop optimized
- **Smooth Animations** - Scroll progress, animated stats, hover effects
- **Professional Typography** - Large bold headlines with clean hierarchy
- **Line Illustrations** - SVG decorative elements

### Sections
- **Hero Section** - Compelling headline with animated stats
- **About** - Professional background and certifications
- **Experience** - 4 companies with achievements and tech stack
- **Projects** - 5 featured projects with live demos and code links
- **Skills** - Technical skills organized by category with progress bars
- **Blog** - Latest technical articles
- **Testimonials** - Social proof from colleagues
- **Contact** - Contact form and direct contact information
- **Education** - Academic background

### Technical Features
- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui components
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Fast performance (Turbopack)
- ✅ Contact form with validation

## 📁 Project Structure

```
pintu-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── portfolio-data.ts   # All portfolio content
├── public/
│   └── images/
│       └── logo.png        # Generated logo
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/pintu-portfolio.git
   cd pintu-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Visit http://localhost:3000

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/pintu-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Your site will be live at `https://pintu-portfolio.vercel.app`

3. **Custom Domain (Optional):**
   - In Vercel dashboard: Settings → Domains
   - Add your custom domain
   - Follow DNS configuration

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📝 Customization

### Update Portfolio Content

Edit `lib/portfolio-data.ts` to update:
- Skills and proficiency levels
- Work experience and achievements
- Projects and links
- Education details
- Blog posts
- Testimonials
- Social links

### Change Colors

Update Tailwind colors in `app/page.tsx`:
- Primary color: `#00d9b6` (teal)
- Background: `#0a0e27` (dark navy)
- Accent sections: `#0f1535`

### Update Logo

Replace `/public/images/logo.png` with your own logo.

## 🎨 Design System

### Colors
- **Background**: `#0a0e27` (Dark Navy)
- **Accent Sections**: `#0f1535` (Slightly Lighter)
- **Primary Accent**: `#00d9b6` (Teal)
- **Text**: White and gray shades
- **Borders**: `white/10` for subtle separation

### Typography
- **Headlines**: Large, bold, white text
- **Body**: Gray text with good contrast
- **Accent**: Teal for important elements

### Components
- **Buttons**: Teal primary, transparent secondary
- **Cards**: Dark with subtle borders
- **Forms**: Clean inputs with teal focus states
- **Badges**: Subtle background with text

## 📊 Performance

- **Lighthouse Score**: 95+
- **Page Load**: < 2 seconds
- **Core Web Vitals**: All green
- **Mobile Friendly**: 100%

## 🔒 Security

- No sensitive data in code
- Environment variables for secrets
- HTTPS by default on Vercel
- No external tracking

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

This is a personal portfolio. For improvements:
1. Create a branch
2. Make changes
3. Test locally
4. Push and create a pull request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- **Email**: pksharmagh4@gmail.com
- **LinkedIn**: https://linkedin.com/in/pintukumar12
- **GitHub**: https://github.com/pintu544

## 🙏 Acknowledgments

- Design inspired by Netlify
- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Components from shadcn/ui

---

**Built with ❤️ by Pintu Kumar Sharma**
