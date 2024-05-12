import { HttpResponse, http } from 'msw';

export const postBalanceData = [
  http.post('/goldbalance/posts/make', () => {
    return HttpResponse.json({
      status: 200,
      message: 'success',
    });
  }),
];
