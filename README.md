# HostFolio Template 3 - Next.js Glassmorphism

A stunning ultra-modern portfolio built with Next.js 15, featuring glassmorphism effects, dark mode, and advanced animations.

## 🎨 Design Features

- **Glassmorphism Effects**: Frosted glass aesthetic with backdrop blur
- **Dark Mode**: Seamless theme switching with system preference detection
- **Parallax Effects**: Depth and motion on scroll
- **3D Card Interactions**: Interactive hover effects
- **Gradient Animations**: Dynamic color transitions
- **Micro-interactions**: Subtle animations on every interaction

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Next.js Font Optimization

## 📦 Installation

```bash
# Create Next.js app
npx create-next-app@latest hostfolio_template_3 --typescript --tailwind --app

# Navigate to directory
cd hostfolio_template_3

# Install dependencies
npm install framer-motion clsx tailwind-merge lucide-react

# Run development server
npm run dev
```

## 📁 Project Structure

```
hostfolio_template_3/
├── app/
│   ├── layout.tsx          # Root layout with font and metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with glassmorphism
│   ├── About.tsx           # About section with parallax
│   ├── Experience.tsx      # Timeline with 3D cards
│   ├── Projects.tsx        # Project grid with hover effects
│   ├── Contact.tsx         # Contact form with animations
│   └── Navbar.tsx          # Sticky navigation
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── data.json           # Portfolio data
└── tailwind.config.ts      # Tailwind configuration
```

## 🎨 Customization

### Update Your Data

Edit `public/data.json` with your personal information:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com"
    // ... more fields
  }
  // ... other sections
}
```

### Color Scheme

Update colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...},
      accent: {...}
    }
  }
}
```

### Glassmorphism Settings

Adjust blur and opacity in component styles:

```css
backdrop-blur-md bg-white/10
backdrop-blur-lg bg-white/20
backdrop-blur-xl bg-white/5
```

## 🌟 Key Components

### Hero Section
- Animated gradient background
- Floating particle effects
- CTA buttons with hover animations

### About Section
- Parallax image reveal
- Skill tags with pulse animations
- Education timeline

### Experience Section
- 3D rotating cards
- Achievement badges
- Technology stack icons

### Projects Section
- Masonry grid layout
- Image zoom on hover
- Live demo previews
- GitHub integration

### Contact Section
- Animated contact form
- Social media links
- Email integration
- Success animations

## 🔧 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_EMAIL_SERVICE=your-email-service
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy dist folder
netlify deploy --prod
```

## 📱 Responsive Design

- Mobile: < 768px - Single column, mobile navigation
- Tablet: 768px - 1024px - Two columns, adapted layouts
- Desktop: > 1024px - Full multi-column layouts

## ⚡ Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for below-fold content
- Code splitting with dynamic imports
- Reduced motion for accessibility
- Optimized font loading

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for HostFolio
