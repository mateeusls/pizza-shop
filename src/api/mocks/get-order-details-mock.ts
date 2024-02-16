import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '3213543213581',
    },
    status: 'canceled',
    createdAt: new Date().toISOString(),
    totalInCents: 6000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 5000,
        product: {
          name: 'Pizza de Frango',
        },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 1000,
        product: {
          name: 'Pizza Pepperoni',
        },
        quantity: 1,
      },
    ],
  })
})
