import { HttpResponse, http } from 'msw'
import { BubbleType } from '../interface/BubbleInterface'
import { getMainData } from './MSWApis/Main/getMain'
import { getBalanceData } from './MSWApis/Balance/getBalance'
import { postPickData } from './MSWApis/Balance/postPick'

let comments: BubbleType[] = [
    { id: '1', position: 'left', message: 'comment', recomment: 0, liked: 0 },
]
let recomments: BubbleType[] = []

export const handlers = [
    ...getMainData,
    ...getBalanceData,
    ...postPickData,
    // 댓글 가져오기
    http.get('/comments/1', () => {
        return HttpResponse.json(comments)
    }),

    // 대댓글 가져오기
    http.get('/comments/1/1', () => {
        return HttpResponse.json(recomments)
    }),

    // 댓글 좋아요 추가
    http.patch('/comments/1/liked/1', async () => {
        const commentIndex = comments.findIndex((c) => c.id === '1')
        if (commentIndex !== -1) {
            comments[commentIndex] = {
                ...comments[commentIndex],
                liked: comments[commentIndex].liked + 1,
            }
        }
        return HttpResponse.json(comments)
    }),

    // 댓글 좋아요 삭제
    http.patch('/comments/1/unliked/1', async () => {
        const commentIndex = comments.findIndex((c) => c.id === '1')
        if (commentIndex !== -1) {
            comments[commentIndex] = {
                ...comments[commentIndex],
                liked: comments[commentIndex].liked - 1,
            }
        }
        return HttpResponse.json(comments)
    }),

    // 댓글 추가
    http.patch('/comments/1/comment', async ({ request }) => {
        const newComment: BubbleType = (await request.json()) as BubbleType
        comments = [newComment, ...comments]
        return HttpResponse.json({
            comments: [...comments, newComment],
        })
    }),

    // 대댓글 추가
    // `/comments/밸런스게임 id/recomment/target id`
    http.patch(`/comments/1/recomment/1`, async ({ request }) => {
        const newRecomment: BubbleType = (await request.json()) as BubbleType
        recomments = [newRecomment, ...recomments]
        return HttpResponse.json({
            recomments: [...recomments, newRecomment],
        })
    }),
]

// rest.get("/users", async (req, res, ctx) => {
//   const { searchParams } = req.url;
//   const size = Number(searchParams.get("size"));
//   const page = Number(searchParams.get("page"));
//   const totalCount = users.length;
//   const totalPages = Math.ceil(totalCount / size);

//   return res(
//     ctx.status(200),
//     ctx.json({
//       contents: users.slice(page * size, (page + 1) * size),
//       pageNumber: page,
//       pageSize: size,
//       totalPages,
//       totalCount,
//       isLastPage: totalPages <= page,
//       isFirstPage: page === 0,
//     }),
//     ctx.delay(500)
//   );
// }),
http.post('/login', async ({ request }) => {
    const info = await request.formData()
    console.log('Logging in as "%s"', info.get('username'))
})
