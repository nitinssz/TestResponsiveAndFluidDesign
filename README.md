# Fluid Design System - Responsive Web Design

A modern fluid design system built with Astro that scales beautifully across all viewport sizes. Choose your approach: pure CSS or integrate with Tailwind CSS.

## 🎯 Features

- **Zero JavaScript** - Pure CSS scaling using `clamp()` and `rem` units
- **Multiple Approaches** - Pure CSS, Tailwind hybrid, auto-scaling, or plugin-based
- **Fluid Scaling** - Content scales proportionally with viewport size
- **Production Ready** - Clean, professional design with modern best practices
- **Developer Friendly** - Clear file naming and comprehensive documentation

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:4321`

## 📁 Project Structure

```
src/
├── pages/
│   ├── index.astro                          # Main navigation hub
│   ├── demo-fluid-pure-css.astro           # Pure CSS demo
│   ├── demo-fluid-tailwind-auto.astro      # Tailwind auto-scaling
│   ├── demo-fluid-tailwind-hybrid.astro    # Hybrid approach
│   └── demo-fluid-tailwind-plugin.astro    # Plugin approach
│
└── styles/
    ├── fluid-pure-css.css                  # Complete pure CSS system
    └── fluid-tailwind-core.css             # Core for Tailwind integration
```

## 🎨 Approaches

### 1. Pure CSS (`demo-fluid-pure-css.astro`)
**Best for:** Projects without frameworks

```astro
---
import '../styles/fluid-pure-css.css';
---

<div class="fluid-container">
  <h1 class="fluid-text-5xl">Hello World</h1>
  <p class="fluid-text-lg">Content scales automatically!</p>
</div>
```

### 2. Tailwind Auto-Scaling (`demo-fluid-tailwind-auto.astro`)
**Best for:** Standard Tailwind workflow

```astro
---
import '../styles/fluid-tailwind-core.css';
---

<div class="container mx-auto">
  <h1 class="text-5xl font-bold">Hello World</h1>
  <p class="text-lg">All Tailwind utilities scale automatically!</p>
</div>
```

### 3. Hybrid Approach (`demo-fluid-tailwind-hybrid.astro`)
**Best for:** Explicit control over what scales

Mix Tailwind utilities with custom fluid classes for maximum flexibility.

### 4. Plugin Approach (`demo-fluid-tailwind-plugin.astro`)
**Best for:** Teams needing consistent naming

Uses custom `fluid-*` utilities integrated into Tailwind.

## 📚 Documentation

- **[FILE-STRUCTURE.md](./FILE-STRUCTURE.md)** - Complete project structure and file naming guide
- **[CSS-FILES-GUIDE.md](./CSS-FILES-GUIDE.md)** - Detailed CSS usage reference with examples

## 🎓 How It Works

The system uses CSS `clamp()` to scale the root `html` font-size based on viewport width:

```css
html {
  /* Fluid scaling between breakpoints */
  font-size: clamp(16px, calc(16px + (21.25 - 16) * ((100vw - 320px) / (425 - 320))), 21.25px);
}
```

All sizing uses `rem` units, which are relative to the root font-size. When the root font-size changes, everything scales proportionally!

### Breakpoint Ranges

| Viewport Range | Behavior | html font-size |
|---------------|----------|----------------|
| **320px - 425px** | Fluid scaling | 16px → 21.25px |
| **426px - 767px** | Static (locked) | 21.25px |
| **768px - 1023px** | Fluid scaling | 16px → 21.33px |
| **1024px - 1279px** | Static (locked) | 21.33px |
| **1280px - 1439px** | Fluid scaling | 16px → 18px |
| **1440px+** | Static (locked) | 18px |

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework (optional)
- **Pure CSS** - Fluid scaling system with zero JavaScript

## 📦 Which CSS File to Use?

### `fluid-pure-css.css`
- Complete standalone system
- Pre-built utility classes (`.fluid-text-*`, `.fluid-padding-*`, etc.)
- No framework required
- **Use when:** Building without Tailwind

### `fluid-tailwind-core.css`
- Core scaling for Tailwind CSS
- Makes ALL Tailwind utilities scale automatically
- No additional utility classes
- **Use when:** Using Tailwind CSS

## 🔧 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Best Practices

1. **Use rem units** - For all sizing (padding, margin, font-size, gap, etc.)
2. **Convert px to rem** - Divide pixel values by 16 (e.g., 24px ÷ 16 = 1.5rem)
3. **Design at breakpoints** - Design at 320px, 768px, and 1280px
4. **Test responsively** - Resize browser to test scaling behavior
5. **Avoid fixed px** - Use rem for elements that should scale

## 🎯 Browser Support

Works in all modern browsers that support CSS `clamp()`:
- Chrome 79+
- Firefox 75+
- Safari 13.1+
- Edge 79+

## 📄 License

MIT License - feel free to use in your projects!

## 🙏 Contributing

This is a demonstration project, but feel free to fork and adapt for your needs!

---

**Made with ❤️ using Astro and Pure CSS**
