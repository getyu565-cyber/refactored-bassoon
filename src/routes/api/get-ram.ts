import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/get-ram')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          ram_mb: 1024,
          status: 'success',
          timestamp: new Date().toISOString(),
        })
      },
      POST: async () => {
        return Response.json({
          ram_mb: 1024,
          status: 'success',
          timestamp: new Date().toISOString(),
        })
      },
    },
  },
})
