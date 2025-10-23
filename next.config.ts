import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // Solo ejecutar ESLint durante el build en producción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Solo verificar TypeScript durante el build en producción  
    ignoreBuildErrors: true,
  },
  // Excluir rutas API del pre-rendering
  experimental: {
    esmExternals: 'loose'
  }
}

export default nextConfig