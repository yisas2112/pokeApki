import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve :{
    alias: {
      '@styles' : '/src/styles',
      '@styledComponents' : '/src/styledComponents',
      '@components': '/src/components',
      '@utilities': '/src/utilities',
      '@services' : '/src/services',
      '@hooks' : '/src/hooks',
      '@adapters' : '/src/adapters',
      '@pages' : '/src/pages',
      '@constants' : '/src/constants',
      '@context' : '/src/context',
    },    
  },
})
