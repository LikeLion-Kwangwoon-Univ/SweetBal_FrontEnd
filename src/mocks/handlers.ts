import { HttpResponse, http } from 'msw'
import { BubbleType } from '../interface/BubbleInterface'
import { getMainData } from './MSWApis/Main/getMain'

let comments: BubbleType[] = [
	{ id: '1', position: 'left', message: 'comment', recomment: 0, liked: 0 },
]
let recomments: BubbleType[] = []

export const handlers = [
	...getMainData,
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
		const commentIndex = comments.findIndex(c => c.id === '1')
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
		const commentIndex = comments.findIndex(c => c.id === '1')
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

	http.get('/balancedata', () => {
		return HttpResponse.json({
			eyesScore: 12,
			title1: '내 생각 읽기 가능',
			subtitle1: '내가 1시간 동안 마음 속으로\n상상한 것을 누군가 읽을 수 있음',
			people1: 0,
			title2: '내 카톡 읽기 가능',
			subtitle2: '5년치 카톡을 누군가 읽을 수 있음',
			people2: 0,
		})
	}),
	http.post('/balancedata', () => {
		return HttpResponse.json({
			message: 'success',
		})
	}),
]
