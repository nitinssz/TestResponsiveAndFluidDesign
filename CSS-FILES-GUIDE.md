# CSS Files Guide

Quick reference for understanding and using the CSS files in this project.

## 📁 Available CSS Files

### 1. `fluid-tailwind-core.css`
**Purpose:** Foundation for Tailwind CSS fluid scaling

**What it does:**
- Sets up responsive `html` font-size scaling using CSS `clamp()`
- Makes ALL Tailwind utilities automatically scale with viewport
- Contains ONLY the scaling foundation (no utility classes)

**Contains:**
- Global reset
- Responsive html font-size rules
- Body base styles

**Use when:**
- ✅ Using Tailwind CSS
- ✅ Want all Tailwind utilities to scale automatically
- ✅ Need just the scaling foundation

**Import:**
```astro
---
import '../styles/fluid-tailwind-core.css';
---
```

**Example usage:**
```html
<!-- All Tailwind utilities scale automatically -->
<div class="p-4 text-xl gap-2">
  <h1 class="text-6xl font-bold">Hello</h1>
  <p class="text-lg">Text scales with viewport!</p>
</div>
```

---

### 2. `fluid-pure-css.css`
**Purpose:** Complete standalone fluid design system (Pure CSS)

**What it does:**
- Sets up responsive `html` font-size scaling
- Provides pre-built utility classes for typography, spacing, padding, gaps
- Complete system - no Tailwind needed

**Contains:**
- Global reset
- Responsive html font-size rules
- `.fluid-container` wrapper
- Typography utilities (`.fluid-text-*`)
- Spacing utilities (`.fluid-spacing-*`)
- Padding utilities (`.fluid-padding-*`)
- Gap utilities (`.fluid-gap-*`)
- Image utilities (`.fluid-img`)

**Use when:**
- ✅ Not using Tailwind CSS
- ✅ Want a complete utility class system
- ✅ Need pre-built fluid classes

**Import:**
```astro
---
import '../styles/fluid-pure-css.css';
---
```

**Example usage:**
```html
<div class="fluid-container">
  <h1 class="fluid-text-5xl">Hello</h1>
  <div class="fluid-padding-lg">
    <p class="fluid-text-lg">Text scales with viewport!</p>
  </div>
</div>
```

---

## 🎯 Which CSS File Should I Use?

### Decision Tree

```
Are you using Tailwind CSS?
├─ YES → Use fluid-tailwind-core.css
│   └─ All Tailwind utilities will scale automatically
│
└─ NO → Use fluid-utilities.css
    └─ Complete system with .fluid-* utility classes
```

### Comparison Table

| Feature | fluid-tailwind-core.css | fluid-pure-css.css |
|---------|------------------------|---------------------|
| **Scaling foundation** | ✅ Yes | ✅ Yes |
| **Utility classes** | ❌ No (use Tailwind) | ✅ Yes (.fluid-*) |
| **File size** | ~3KB | ~6KB |
| **Requires Tailwind** | ✅ Yes | ❌ No |
| **Standalone** | ❌ No | ✅ Yes |
| **Best for** | Tailwind projects | Pure CSS projects |

---

## 📚 Available Utility Classes

### In `fluid-pure-css.css`

#### Typography
```css
.fluid-text-xs      /* 0.75rem */
.fluid-text-sm      /* 0.875rem */
.fluid-text-base    /* 1rem */
.fluid-text-lg      /* 1.125rem */
.fluid-text-xl      /* 1.25rem */
.fluid-text-2xl     /* 1.5rem */
.fluid-text-3xl     /* 1.875rem */
.fluid-text-4xl     /* 2.25rem */
.fluid-text-5xl     /* 3rem */
```

#### Padding
```css
.fluid-padding-xs   /* 0.25rem */
.fluid-padding-sm   /* 0.5rem */
.fluid-padding-md   /* 1rem */
.fluid-padding-lg   /* 1.5rem */
.fluid-padding-xl   /* 2rem */
.fluid-padding-2xl  /* 3rem */
```

#### Spacing (Margin)
```css
.fluid-spacing-xs   /* 0.25rem */
.fluid-spacing-sm   /* 0.5rem */
.fluid-spacing-md   /* 1rem */
.fluid-spacing-lg   /* 1.5rem */
.fluid-spacing-xl   /* 2rem */
.fluid-spacing-2xl  /* 3rem */
```

#### Gaps
```css
.fluid-gap-xs       /* 0.25rem */
.fluid-gap-sm       /* 0.5rem */
.fluid-gap-md       /* 1rem */
.fluid-gap-lg       /* 1.5rem */
.fluid-gap-xl       /* 2rem */
```

#### Container
```css
.fluid-container    /* Responsive container with max-widths */
```

---

## 🔧 How The Scaling Works

Both CSS files use the same scaling foundation:

### Breakpoint Ranges

| Viewport Range | Behavior | html font-size |
|---------------|----------|----------------|
| **320px - 425px** | Fluid scaling | 16px → 21.25px |
| **426px - 767px** | Static (locked) | 21.25px |
| **768px - 1023px** | Fluid scaling | 16px → 21.33px |
| **1024px - 1279px** | Static (locked) | 21.33px |
| **1280px - 1439px** | Fluid scaling | 16px → 18px |
| **1440px+** | Static (locked) | 18px |

### Why This Works

1. **HTML font-size scales** with viewport width using CSS `clamp()`
2. **All sizing uses REM units** (relative to html font-size)
3. **When html font-size changes**, everything using rem scales proportionally
4. **Zero JavaScript needed** - pure CSS handles everything

---

## 💡 Usage Examples by Project Type

### Example 1: Pure Astro Project (No Tailwind)
```astro
---
import '../styles/fluid-pure-css.css';
---

<div class="fluid-container">
  <h1 class="fluid-text-5xl">Title</h1>
  <div class="fluid-padding-lg">
    <p class="fluid-text-lg">Content</p>
  </div>
</div>
```

### Example 2: Astro + Tailwind Project
```astro
---
import '../styles/fluid-tailwind-core.css';
---

<div class="container mx-auto">
  <h1 class="text-5xl font-bold">Title</h1>
  <div class="p-8">
    <p class="text-lg">Content</p>
  </div>
</div>
<!-- All Tailwind utilities scale automatically! -->
```

### Example 3: Hybrid Approach
```astro
---
import '../styles/fluid-tailwind-core.css';
---

<div class="container mx-auto">
  <!-- Use Tailwind for layout -->
  <div class="grid grid-cols-2 gap-4">
    
    <!-- Mix with custom rem values for scaling -->
    <div style="padding: 2rem; font-size: 1.5rem;">
      Custom scaled content
    </div>
    
    <!-- Or use Tailwind classes -->
    <div class="p-8 text-2xl">
      Tailwind scaled content
    </div>
  </div>
</div>
```

---

## 🚀 Quick Start

### For Tailwind Users
1. Import `fluid-tailwind-core.css`
2. Use Tailwind utilities as normal
3. Everything scales automatically!

### For Non-Tailwind Users
1. Import `fluid-pure-css.css`
2. Use `.fluid-*` utility classes
3. Everything scales automatically!

### For Custom CSS
1. Import either CSS file
2. Use `rem` units for all sizing
3. Example: `padding: 1.5rem;` will scale with viewport

---

## 📝 Developer Notes

### Converting px to rem
- Always divide by 16 (base font size at breakpoints)
- Example: `24px ÷ 16 = 1.5rem`

### Best Practices
- ✅ Use rem units for all sizing (padding, margin, font-size, gap)
- ✅ Design at 320px, 768px, and 1280px breakpoints
- ✅ Test across different viewport sizes
- ❌ Don't mix px and rem for sizing elements
- ❌ Don't use fixed px values for scalable elements

### Performance
- Both files are lightweight (~3-6KB)
- Zero JavaScript overhead
- Hardware-accelerated CSS scaling
- Works offline and with JS disabled

---

*Last Updated: CSS files renamed for developer clarity*

