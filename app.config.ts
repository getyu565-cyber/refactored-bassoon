import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    preset: 'github-pages',
    prerender: {
      routes: ['/', '/api/get-ram'],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      {
        name: 'vite-allow-post-json',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.method === 'POST' && req.url?.endsWith('.json')) {
              req.method = 'GET'
            }
            next()
          })
        },
      },
    ],
  },
})
