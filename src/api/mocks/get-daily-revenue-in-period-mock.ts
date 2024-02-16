import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/02/2024', receipt: 12000 },
    { date: '02/02/2024', receipt: 16000 },
    { date: '03/07/2024', receipt: 20000 },
    { date: '04/02/2024', receipt: 13000 },
    { date: '05/07/2024', receipt: 800 },
    { date: '06/02/2024', receipt: 8000 },
    { date: '07/02/2024', receipt: 2450 },
  ])
})
