/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← Esto es clave
  trailingSlash: true,        // ← Para GitHub Pages
  images: {
    unoptimized: true         // ← Para imágenes en export estático
  }
};

export default nextConfig;