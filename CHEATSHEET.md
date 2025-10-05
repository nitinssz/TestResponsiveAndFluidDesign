# 📋 Fluid Design System - Quick Reference

## 🎯 The One Formula

```css
actual-value = calc(design-value * var(--scale-factor))
```

**That's literally it!** Apply this to EVERY measurement.

---

## ⚡ Quick Setup

```astro
---
import '../styles/fluid-design-system.css';
---

<div class="fluid-container">
  <!-- Your content -->
</div>
```

---

## 📐 Design Breakpoints

| Device | Width | Designer Designs At |
|--------|-------|-------------------|
| Mobile | Any | **320px exactly** |
| Tablet | Any | **768px exactly** |
| Desktop | Any | **1280px exactly** |

---

## 🔢 Conversion Formula

**Design gives you pixels → Convert to rem → Apply scale factor**

```
Step 1: Get pixel value from design
Example: 24px padding

Step 2: Convert to rem
Mobile: 24 / 14 = 1.714rem
Tablet: 24 / 16 = 1.5rem  
Desktop: 24 / 18 = 1.333rem

Step 3: Apply scale factor
padding: calc(1.714rem * var(--scale-factor));
```

---

## 🎨 Common Patterns

### Text
```css
font-size: calc(1rem * var(--scale-factor));
```

### Spacing
```css
padding: calc(1.5rem * var(--scale-factor));
margin: calc(2rem * var(--scale-factor));
gap: calc(1rem * var(--scale-factor));
```

### Borders & Radius
```css
border-radius: calc(0.5rem * var(--scale-factor));
border-width: calc(2px * var(--scale-factor));
```

### Sizes
```css
width: calc(200px * var(--scale-factor));
height: calc(50px * var(--scale-factor));
```

---

## 🛠️ Utility Classes

### Typography Sizes
```html
<h1 class="fluid-text-5xl">Huge</h1>      <!-- 3rem scaled -->
<h2 class="fluid-text-4xl">Big</h2>       <!-- 2.25rem scaled -->
<h3 class="fluid-text-3xl">Large</h3>     <!-- 1.875rem scaled -->
<h4 class="fluid-text-2xl">Medium</h4>    <!-- 1.5rem scaled -->
<p class="fluid-text-base">Normal</p>     <!-- 1rem scaled -->
<small class="fluid-text-sm">Small</small> <!-- 0.875rem scaled -->
```

### Spacing
```html
<div class="fluid-spacing-xs">Tiny</div>     <!-- 0.25rem -->
<div class="fluid-spacing-sm">Small</div>    <!-- 0.5rem -->
<div class="fluid-spacing-md">Medium</div>   <!-- 1rem -->
<div class="fluid-spacing-lg">Large</div>    <!-- 1.5rem -->
<div class="fluid-spacing-xl">XL</div>       <!-- 2rem -->
<div class="fluid-spacing-2xl">Huge</div>    <!-- 3rem -->
```

### Images
```html
<img src="..." class="fluid-img" alt="...">
```

---

## 📱 Component Template

```css
.my-component {
  /* MOBILE (320px base) */
  padding: calc(1rem * var(--scale-factor));
  font-size: calc(0.875rem * var(--scale-factor));
}

@media (min-width: 768px) {
  .my-component {
    /* TABLET (768px base) */
    padding: calc(1.5rem * var(--scale-factor));
    font-size: calc(1rem * var(--scale-factor));
  }
}

@media (min-width: 1280px) {
  .my-component {
    /* DESKTOP (1280px base) */
    padding: calc(2rem * var(--scale-factor));
    font-size: calc(1.125rem * var(--scale-factor));
  }
}
```

---

## 🎯 What Scales Automatically

| Viewport Range | What Happens |
|---------------|--------------|
| 320px → 425px | ✅ Everything scales (zoom effect) |
| 425px → 768px | 🔒 Content locked, margins grow |
| 768px → 1024px | ✅ Everything scales (zoom effect) |
| 1024px → 1280px | 🔒 Content locked, margins grow |
| 1280px → 1440px | ✅ Everything scales (zoom effect) |
| 1440px+ | 🔒 Content locked, margins grow |

---

## ✅ Testing Checklist

Test at these exact widths:
- [ ] 320px (mobile min)
- [ ] 375px (mobile common)
- [ ] 425px (mobile max → tablet min transition)
- [ ] 768px (tablet design)
- [ ] 1024px (tablet max → desktop min transition)
- [ ] 1280px (desktop design)
- [ ] 1440px (desktop max transition)
- [ ] 1920px (large desktop)

---

## 🚫 Don't Do This

```css
/* ❌ Don't use fixed values */
font-size: 1.5rem;

/* ❌ Don't use clamp() for this system */
font-size: clamp(1rem, 2vw, 2rem);

/* ❌ Don't skip the scale factor */
padding: 2rem;
```

---

## ✅ Do This

```css
/* ✅ Always use scale factor */
font-size: calc(1.5rem * var(--scale-factor));

/* ✅ Apply to ALL measurements */
padding: calc(2rem * var(--scale-factor));
gap: calc(1rem * var(--scale-factor));
border-radius: calc(0.5rem * var(--scale-factor));

/* ✅ Use utility classes */
<div class="fluid-text-2xl fluid-spacing-lg">
```

---

## 🎨 Real World Example

**Designer says**: "Button should be 16px top/bottom padding, 32px left/right, 14px font, at 320px"

**You write**:
```css
.button {
  /* 16px / 14 = 1.143rem, 32px / 14 = 2.286rem, 14px / 14 = 1rem */
  padding: calc(1.143rem * var(--scale-factor)) calc(2.286rem * var(--scale-factor));
  font-size: calc(1rem * var(--scale-factor));
}
```

**Result**: Button looks perfect at 320px, scales proportionally to 425px, stays locked 425-768px, then tablet design kicks in!

---

## 🔍 Debug Helper

Add this anywhere to see current scale:

```html
<div style="position: fixed; top: 0; right: 0; background: black; color: white; padding: 0.5rem; z-index: 9999;">
  Viewport: <span id="vp-width"></span>px
  <br>
  Scale: <span id="scale"></span>
</div>

<script>
  function updateDebug() {
    document.getElementById('vp-width').textContent = window.innerWidth;
    const scale = getComputedStyle(document.documentElement).getPropertyValue('--scale-factor');
    document.getElementById('scale').textContent = (parseFloat(scale) * 100).toFixed(1) + '%';
  }
  updateDebug();
  window.addEventListener('resize', updateDebug);
</script>
```

---

## 💡 Pro Tips

1. **Start with mobile** (320px) - it's the base
2. **Everything gets scale factor** - no exceptions
3. **Use `.fluid-container`** for all main wrappers
4. **Test at breakpoint edges** - that's where bugs hide
5. **Rem over px** - more flexible

---

## 📚 Need More?

- **Full Docs**: `FLUID-DESIGN-SYSTEM.md`
- **Overview**: `README-FLUID-SYSTEM.md`
- **Example**: `src/components/HeroFluid.astro`
- **System**: `src/styles/fluid-design-system.css`

---

**Remember**: The system handles ALL the complexity. You just apply the formula! 🎉

