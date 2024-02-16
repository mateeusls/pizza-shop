import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'Pizza shop',
    createdAt: new Date(),
    updatedAt: null,
    description: 'This is restaurant of Typescript users',
    managerId: 'custom-managed-id',
  })
})
