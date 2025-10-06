# 🎨 Fluid Design System + Tailwind CSS

## ⚡ Quick Start

```bash
# Already installed!
npm install -D tailwindcss @astrojs/tailwind
```

```astro
---
import '../styles/fluid-base.css';
---

<div class="p-8 text-2xl">
  Everything scales! 🎉
</div>
```

## 🎯 Three Ways to Use

### 1️⃣ Side-by-Side (Easy)
```html
<div class="flex gap-4">
  <h1 class="fluid-text-4xl">Scales</h1>
</div>
```

### 2️⃣ Pure Tailwind (Recommended) ⭐
```html
<div class="p-8 text-4xl">
  Everything scales automatically!
</div>
```

### 3️⃣ Custom Plugin (Explicit)
```html
<div class="fluid-padding-lg">
  <h1 class="fluid-text-4xl">Clear intent</h1>
</div>
```

## 📂 Demo Pages

- [Main Demo](http://localhost:4321/index-tailwind) - Overview
- [Approach 1](http://localhost:4321/approach-1-side-by-side) - Side-by-side
- [Approach 2](http://localhost:4321/approach-2-tailwind-scales) - Pure Tailwind ⭐
- [Approach 3](http://localhost:4321/approach-3-custom-plugin) - Custom plugin

## 🚀 Start Dev Server

```bash
npm run dev
```

Then visit: http://localhost:4321/index-tailwind

## 📖 Full Documentation

See [TAILWIND-INTEGRATION.md](./TAILWIND-INTEGRATION.md) for complete guide.

## ✨ How It Works

1. **HTML font-size changes** with viewport (fluid-base.css)
2. **Tailwind uses rem** values (tailwind.config.mjs)
3. **Everything scales** automatically! 🎉

## 🎓 Example

```astro
---
import '../styles/fluid-base.css';
---

<section class="fluid-container">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
    <div>
      <h1 class="text-6xl font-bold mb-4">Title</h1>
      <p class="text-xl mb-6">Description</p>
      <button class="px-8 py-4 bg-blue-500 text-white rounded-xl">
        Button
      </button>
    </div>
  </div>
</section>
```

**At 320px:** All values at base size  
**At 425px:** Everything ~33% larger  
**At 768px:** Reset to base for tablet  
**At 1440px:** Everything scales perfectly!

## 🎯 Which Approach?

| You Want | Use This |
|----------|----------|
| Quick start | Approach 1 |
| Production app | Approach 2 ⭐ |
| Explicit names | Approach 3 |
| Maximum flexibility | Mix them all! |

## 🔥 Key Benefits

- ✅ **Zero JavaScript** - Pure CSS
- ✅ **Use Pure Tailwind** - No custom classes needed (Approach 2)
- ✅ **Everything Scales** - Text, spacing, borders, everything!
- ✅ **Works Offline** - No dependencies
- ✅ **Lightning Fast** - Hardware accelerated

## 📐 Scaling Ranges

| Viewport | Behavior |
|----------|----------|
| 320px - 425px | Fluid scaling |
| 425px - 768px | Static (margins grow) |
| 768px - 1024px | Fluid scaling |
| 1024px - 1280px | Static (margins grow) |
| 1280px - 1440px | Fluid scaling |
| 1440px+ | Static (margins grow) |

## 💡 Pro Tips

1. **Import fluid-base.css** in every page or layout
2. **Use fluid-container** for max-width constraints
3. **Use rem everywhere** (Tailwind config already does this)
4. **Test at breakpoints:** 320, 425, 768, 1024, 1280, 1440
5. **Approach 2 is recommended** for most projects

## 🎨 Custom Utilities Available

```
fluid-text-xs → fluid-text-9xl
fluid-padding-xs → fluid-padding-2xl
fluid-spacing-xs → fluid-spacing-2xl
fluid-gap-xs → fluid-gap-2xl
fluid-container
fluid-img
```

## 🐛 Troubleshooting

**Not scaling?**
```astro
---
import '../styles/fluid-base.css'; // Add this!
---
```

**Config not working?**
```bash
# Restart dev server
npm run dev
```

## 📚 More Info

- [TAILWIND-INTEGRATION.md](./TAILWIND-INTEGRATION.md) - Complete guide
- [FLUID-DESIGN-SYSTEM.md](./FLUID-DESIGN-SYSTEM.md) - Original system docs
- [tailwind.config.mjs](./tailwind.config.mjs) - See the config

---

**Ready to build? 🚀**

```bash
npm run dev
```

Then visit: **http://localhost:4321/index-tailwind**

