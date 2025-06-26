import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.get('/api/kpis', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ totalOrders: 120, activeUsers: 50, errorRate: 0.02 })
    )
  })
)

export function initMocks() {
  worker.start()
}
