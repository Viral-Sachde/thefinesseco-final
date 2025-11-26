#!/bin/bash

# Script to generate PNG versions from SVG logos
# Requires: ImageMagick or Inkscape

# Check if ImageMagick is installed
if command -v convert &> /dev/null; then
    echo "Using ImageMagick to generate PNGs..."
    
    # Generate different sizes
    convert logo.svg -resize 512x512 logo-512.png
    convert logo.svg -resize 256x256 logo-256.png
    convert logo.svg -resize 128x128 logo-128.png
    convert logo.svg -resize 64x64 logo-64.png
    convert logo.svg -resize 32x32 logo-32.png
    
    convert logo-white.svg -resize 512x512 logo-white-512.png
    convert logo-dark.svg -resize 512x512 logo-dark-512.png
    
    echo "PNG files generated successfully!"
elif command -v inkscape &> /dev/null; then
    echo "Using Inkscape to generate PNGs..."
    
    inkscape logo.svg --export-filename=logo-512.png --export-width=512 --export-height=512
    inkscape logo.svg --export-filename=logo-256.png --export-width=256 --export-height=256
    inkscape logo.svg --export-filename=logo-128.png --export-width=128 --export-height=128
    inkscape logo.svg --export-filename=logo-64.png --export-width=64 --export-height=64
    inkscape logo.svg --export-filename=logo-32.png --export-width=32 --export-height=32
    
    inkscape logo-white.svg --export-filename=logo-white-512.png --export-width=512 --export-height=512
    inkscape logo-dark.svg --export-filename=logo-dark-512.png --export-width=512 --export-height=512
    
    echo "PNG files generated successfully!"
else
    echo "Error: Neither ImageMagick nor Inkscape found."
    echo "Please install one of them:"
    echo "  - ImageMagick: brew install imagemagick (macOS) or apt-get install imagemagick (Linux)"
    echo "  - Inkscape: brew install inkscape (macOS) or apt-get install inkscape (Linux)"
    echo ""
    echo "Alternatively, use an online SVG to PNG converter or design software."
    exit 1
fi

