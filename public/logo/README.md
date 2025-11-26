# The Finesse Co. Logo Files

This folder contains high-quality logo files in multiple formats for use across different platforms and contexts.

## Available Files

### SVG Files (Vector - Scalable)
- **logo.svg** - Main logo with purple sparkle icon (#B0A9F8)
- **logo-white.svg** - White version for dark backgrounds
- **logo-dark.svg** - Dark version (#0F0F0F) for light backgrounds
- **logo-with-text.svg** - Logo with "The Finesse Co." text

### Usage Guidelines

#### logo.svg
- Use on light backgrounds
- Primary brand color: #B0A9F8 (eddie-purple)
- Best for: Website headers, light UI elements

#### logo-white.svg
- Use on dark backgrounds
- Best for: Dark themes, overlays, dark UI elements

#### logo-dark.svg
- Use on light backgrounds when you need contrast
- Best for: Light backgrounds, print materials

#### logo-with-text.svg
- Use when you need the full brand identity
- Best for: Marketing materials, presentations, email signatures

## Technical Specifications

- **Format**: SVG (Scalable Vector Graphics)
- **ViewBox**: 0 0 24 24 (base icon)
- **Colors**: 
  - Primary: #B0A9F8 (eddie-purple)
  - Dark: #0F0F0F (eddie-dark)
  - White: #FFFFFF

## Usage in Code

### Next.js Image Component
```tsx
import Image from 'next/image';

<Image 
  src="/logo/logo-dark.svg" 
  alt="The Finesse Co. Logo" 
  width={40} 
  height={40}
  unoptimized
/>
```

### Direct SVG
```tsx
<img src="/logo/logo.svg" alt="The Finesse Co. Logo" />
```

## Generating PNG Files

PNG versions can be generated from the SVG files using the provided script:

```bash
cd public/logo
./generate-pngs.sh
```

This will create PNG files in multiple sizes (32px, 64px, 128px, 256px, 512px).

**Requirements:**
- ImageMagick (`brew install imagemagick` on macOS)
- OR Inkscape (`brew install inkscape` on macOS)

**Alternative Methods:**
1. Online converters: Use tools like CloudConvert, Convertio, or SVG2PNG
2. Design software: Open SVG in Figma, Sketch, or Adobe Illustrator and export as PNG
3. Browser: Open SVG in browser, take screenshot, or use browser dev tools

## Notes

- All SVG files are optimized for web use and are vector-based (infinitely scalable)
- Files are located in `/public/logo/` and accessible at `/logo/[filename]`
- SVG is recommended for web use (smaller file size, scalable, crisp at any size)
- PNG is recommended for: print materials, email signatures, social media (when PNG is required)
- Maintain aspect ratio when resizing
- Minimum recommended size: 32x32px
- Maximum recommended size: 512x512px (for web use, SVG can go larger)

