import { http, HttpResponse } from 'msw'

export const postPickData = [
    http.post('/pick', () => {
        return HttpResponse.json({
            message: 'success',
        })
    }),
]
