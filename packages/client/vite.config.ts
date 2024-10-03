import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fcmSwEnvPlugin from './plugins/fcmSwEnvPlugin'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react(), fcmSwEnvPlugin()],
    }
  }

  return {
    plugins: [react()],
    build: {
      target: 'es2022',
      rollupOptions: {
        input: {
          main: './index.html',
          'firebase-messaging-sw': './src/firebase-messaging-sw.js',
        },
        output: {
          entryFileNames: chunkInfo => chunkInfo.name === 'firebase-messaging-sw'
            ? '[name].js'
            : 'assets/[name]-[hash].js',
        }
      }
    }
  }
})
