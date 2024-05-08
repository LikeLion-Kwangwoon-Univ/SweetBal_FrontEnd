import { HttpResponse, http } from 'msw'
import { getMainDataType } from '../../../query/get/useGetMain'

let mainData: getMainDataType[] = []
for (let i = 0; i < 3; i++) {
	mainData.push({
		subject: '최고인기',
		title1: '오늘 저녁은 돈까스',
		title2: '오늘 저녁은 치킨',
		balanceId: 1,
	})
}

export const getMainData = [
	http.get('/goldbalance/home', () => {
		return HttpResponse.json(mainData)
	}),
]
