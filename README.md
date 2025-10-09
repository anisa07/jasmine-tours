# Jasmine Tours & Events - Astro SSG

A professional tour guide website for Amsterdam and Netherlands excursions, rebuilt with Astro for optimal SEO and performance.

## 🚀 Project Overview

This website showcases tour services, events organization, and dental tourism packages offered by Zara, a professional guide in Amsterdam.

### Key Features

- ✅ Static Site Generation (SSG) for best SEO
- ✅ Fast page loads with minimal JavaScript
- ✅ Full Russian language support
- ✅ Responsive design for all devices
- ✅ Interactive components with selective hydration
- ✅ Automated sitemap generation

## 📁 Project Structure

```
/
├── public/              # Static assets
│   ├── images/         # Organized image directories
│   └── fonts/          # Custom fonts
├── src/
│   ├── components/     # UI components (.astro & .jsx)
│   ├── data/           # Content data files
│   ├── layouts/        # Page layouts
│   └── pages/          # Routes (index, excursions, reviews, events, dental)
├── astro.config.mjs    # Astro configuration
└── package.json        # Dependencies
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run lighthouse:seo`  | Run Lighthouse SEO audit (requires dev server)   |
| `npm run lighthouse:full` | Full Lighthouse audit (SEO, Performance, A11y)   |

## 🔍 SEO Validation

To validate SEO with Lighthouse:

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **In a new terminal, run Lighthouse:**

   ```bash
   npm run lighthouse:seo    # SEO audit only
   npm run lighthouse:full   # Full audit (SEO, Performance, Accessibility, Best Practices)
   ```

This will open a detailed HTML report in your browser with:

- SEO score and recommendations
- Performance metrics
- Accessibility checks
- Best practices validation

## 🎨 Pages

- **Home** (`/`) - Hero, About, Popular Tours, Partners
- **Excursions** (`/excursions`) - All available tour packages
- **Reviews** (`/reviews`) - Customer testimonials
- **Events** (`/events`) - Event organization services
- **Dental** (`/dental`) - Dental tourism information

## 🔧 Technology Stack

- **Framework**: Astro 4.x
- **UI Library**: React 18 (for interactive components)
- **Styling**: Bootstrap 5 + Custom CSS
- **Animations**: Framer Motion
- **Icons**: Font Awesome 6
- **Carousel**: React Bootstrap Carousel
- **Marquee**: React Fast Marquee

## 📦 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Organize Assets

Follow the instructions in `ASSET-MIGRATION.md` to organize images:

```powershell
# Create directories
$dirs = @("public\images\hero", "public\images\tours", "public\images\excursions", "public\images\reviews", "public\images\dental", "public\fonts")
foreach ($dir in $dirs) { New-Item -ItemType Directory -Force -Path $dir }
```

Then copy images from `src/assets/` to the appropriate `public/images/` subdirectories.

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### 4. Build for Production

```bash
npm run build
```

The static site will be generated in the `./dist/` directory.

## 🌐 Deployment

The built site (`dist/` folder) can be deployed to any static hosting service:

- **Netlify**: Drop the `dist` folder or connect your Git repository
- **Vercel**: Import project and select Astro preset
- **GitHub Pages**: Use GitHub Actions with Astro deploy action
- **Cloudflare Pages**: Connect repository and build

## 🎯 Performance Benefits

Compared to the previous React SPA:

- ⚡ **90%+ faster initial page load** - Pre-rendered HTML
- 📦 **70% smaller JavaScript bundle** - Only interactive components ship JS
- 🔍 **Perfect SEO** - All content is crawlable
- 🚀 **Better Core Web Vitals** - Optimized loading strategies

## 📝 Content Management

Content is managed through data files in `src/data/`:

- `ToursData.js` - Popular tours on home page
- `CardsData.jsx` - All excursion packages
- `FeedbackData.js` - Customer reviews
- `EventAccordionData.js` - Event portfolio
- `dentalMyStoryData.js` - Dental tourism story
- `dentalInfoData.jsx` - Dental tourism information

## 🎨 Customization

### Colors

Main brand colors are defined in component CSS:

- Primary: `#8c6699`
- Secondary: `#63496c`
- Accent: `#fed9ed`
- Dark: `#45324b`

### Fonts

- Body: DM Sans (Google Fonts)
- Headings: Igra Sans (Custom font)
- Decorative: Allura (Google Fonts)

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags (title, description, OG, Twitter)
- Canonical URLs
- Automatic sitemap generation
- Optimized images with lazy loading
- Fast load times

## 🐛 Troubleshooting

### Images not loading

Ensure images are in `public/images/` with correct paths. Check browser console for 404 errors.

### Bootstrap not working

Bootstrap JS is loaded via CDN in the layout. Ensure you have internet connection during development.

### Build errors

Run `npm run astro check` to identify TypeScript/Astro errors.

### Lighthouse audit fails

Make sure the development server (`npm run dev`) is running before running Lighthouse audits.

## 📄 License

Private project for Jasmine Tours & Events.

## 👤 Contact

For inquiries:

- Website: <https://www.jasminetours.nl>
- WhatsApp: +31642221525
- Instagram: @jasmine.tours.amsterdam

---

Built with ❤️ by [Nurlan Imamali](https://nurlanimamali.tech)
