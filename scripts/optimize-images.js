const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration for different image types
const config = {
  photos: {
    // For portrait photos (dani-*.png), keep as PNG but highly optimized
    format: 'png',
    quality: 85,
    maxWidth: 1000, // Reasonable max for web display
    maxHeight: 1500,
  },
  screenshots: {
    // For screenshots, convert to WebP for better compression
    format: 'webp',
    quality: 80,
    maxWidth: 2400, // Keep high quality for screenshots
    maxHeight: 1600,
  },
  og: {
    // OG images
    format: 'png',
    quality: 90,
    maxWidth: 1200,
    maxHeight: 630,
  },
  map: {
    // Small map images, optimize JPGs
    format: 'jpg',
    quality: 85,
    maxWidth: 200,
    maxHeight: 200,
  },
};

async function optimizeImage(inputPath, outputPath, options) {
  try {
    const { format, quality, maxWidth, maxHeight } = options;
    
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    // If optimizing in place, use temp file
    const isInPlace = inputPath === outputPath;
    const tempPath = isInPlace ? outputPath + '.tmp' : outputPath;
    
    let pipeline = sharp(inputPath);
    
    // Get image metadata
    const metadata = await pipeline.metadata();
    const { width, height } = metadata;
    
    // Calculate resize dimensions if needed
    let resizeOptions = null;
    if (width > maxWidth || height > maxHeight) {
      resizeOptions = {
        width: width > maxWidth ? maxWidth : undefined,
        height: height > maxHeight ? maxHeight : undefined,
        fit: 'inside',
        withoutEnlargement: true,
      };
      pipeline = pipeline.resize(resizeOptions);
    }
    
    // Apply format-specific optimizations
    if (format === 'webp') {
      await pipeline
        .webp({ quality, effort: 6 })
        .toFile(tempPath);
    } else if (format === 'png') {
      await pipeline
        .png({ 
          quality,
          compressionLevel: 9,
          adaptiveFiltering: true,
        })
        .toFile(tempPath);
    } else if (format === 'jpg') {
      await pipeline
        .jpeg({ 
          quality,
          mozjpeg: true,
        })
        .toFile(tempPath);
    }
    
    // Replace original if optimizing in place
    if (isInPlace) {
      fs.renameSync(tempPath, outputPath);
    }
    
    const optimizedStats = fs.statSync(outputPath);
    const savings = ((1 - optimizedStats.size / originalSize) * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedStats.size / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
    
    return true;
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    return false;
  }
}

async function optimizeDirectory(dir, config) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const inputPath = path.join(dir, file);
    const stat = fs.statSync(inputPath);
    
    if (stat.isDirectory()) {
      await optimizeDirectory(inputPath, config);
      continue;
    }
    
    if (!/\.(png|jpg|jpeg)$/i.test(file)) {
      continue;
    }
    
    // Determine which config to use based on file path
    let options;
    let outputPath;
    let createWebP = false;
    
    if (inputPath.includes('dani-')) {
      options = config.photos;
      // Optimize in place, keep as PNG
      outputPath = inputPath;
      await optimizeImage(inputPath, outputPath, options);
    } else if (inputPath.includes('screenshots')) {
      options = config.screenshots;
      // First create optimized PNG version
      outputPath = inputPath;
      await optimizeImage(inputPath, outputPath, { ...options, format: 'png', quality: 85 });
      // Also create WebP version for better compression
      const webpPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      await optimizeImage(inputPath, webpPath, options);
      createWebP = true;
    } else if (inputPath.includes('og-image')) {
      options = config.og;
      outputPath = inputPath;
      await optimizeImage(inputPath, outputPath, options);
    } else if (inputPath.includes('map')) {
      options = config.map;
      outputPath = inputPath;
      await optimizeImage(inputPath, outputPath, options);
    } else {
      // Default: optimize as PNG
      options = { format: 'png', quality: 85, maxWidth: 2000, maxHeight: 2000 };
      outputPath = inputPath;
      await optimizeImage(inputPath, outputPath, options);
    }
  }
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  console.log('Starting image optimization...\n');
  
  await optimizeDirectory(publicDir, config);
  
  console.log('\n✓ Image optimization complete!');
}

main().catch(console.error);

