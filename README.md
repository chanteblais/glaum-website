# Glåüm Website

A modern, accessible website for the Glåüm community built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Custom Design System** - Glåüm brand colors and design tokens
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ♿ **Accessibility First** - Semantic HTML, focus management, and screen reader support
- 🎭 **Gentle Animations** - Framer Motion with reduced motion support
- 🚀 **Static Export Ready** - Optimized for GitHub Pages deployment
- 🧩 **Component Library** - Reusable UI primitives with shadcn/ui
- 🎯 **TypeScript** - Full type safety throughout the codebase

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: shadcn/ui + custom components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theming**: next-themes (optional)
- **Code Quality**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd glaum-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
glaum-site/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Marketing layout group
│   │   └── layout.tsx     # Shared header/footer layout
│   ├── page.tsx           # Home page
│   ├── tenets/            # Tenets page
│   ├── policies/          # Policies page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── Container.tsx      # Layout wrapper
│   ├── Section.tsx        # Section with title/subtitle
│   ├── BadgeButton.tsx    # Button variants
│   ├── Card.tsx           # Card components
│   ├── Kicker.tsx         # Eyebrow text
│   ├── Reveal.tsx         # Animation wrapper
│   ├── Header.tsx         # Site navigation
│   └── Footer.tsx         # Site footer
├── lib/                   # Utility functions
│   └── utils.ts           # Class name utilities
└── public/                # Static assets (empty for now)
```

## Design System

### Colors

- **glaum.pink**: `#FF6FB3` - Primary brand color
- **glaum.lavender**: `#D9B3FF` - Secondary brand color  
- **glaum.plum**: `#5D2B7A` - Accent color
- **glaum.cream**: `#FFF6F9` - Light background
- **glaum.ink**: `#1A1024` - Dark text

### Typography

- **Font Stack**: System fonts (system-ui, -apple-system, etc.)
- **Default Border Radius**: `rounded-2xl` (1rem)

## Deployment to GitHub Pages

### Setup

1. **Update Repository Name**: Edit `next.config.js` and change the `repo` constant to match your actual repository name.

2. **Configure GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages section
   - Set Source to "Deploy from a branch"
   - Select `gh-pages` branch
   - Set folder to `/ (root)`

### Deploy

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

This command will:
1. Build the Next.js application
2. Export static files
3. Deploy to the `gh-pages` branch

### Manual Deployment

```bash
# Build the project
npm run build

# Export static files
npm run export

# Deploy to GitHub Pages
npx gh-pages -d out
```

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run export` - Export static files
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint

## Content Management

The website is currently set up with placeholder content. To add real content:

1. **Replace TODO comments** throughout the codebase with actual Glåüm content
2. **Add images** to the `public/` directory and update image placeholders
3. **Update navigation** links in `components/Header.tsx` if needed
4. **Customize sections** in `app/page.tsx` to match your content needs

## Accessibility Features

- Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Skip link for keyboard navigation
- Focus management and visible focus indicators
- Color contrast compliance
- Reduced motion support
- Screen reader friendly structure

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Note**: Remember to update the repository name in `next.config.js` before deploying to match your actual GitHub repository name.
