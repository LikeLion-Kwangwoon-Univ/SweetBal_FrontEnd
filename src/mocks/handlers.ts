import { getMainData } from './MSWApis/Main/getMain'
import { getBalanceData } from './MSWApis/Balance/getBalance'
import { postPickData } from './MSWApis/Balance/postPick'
import { getCommentsData } from './MSWApis/Comments/getComments'
import { postCommentsData } from './MSWApis/Comments/postComments'

export const handlers = [
	...getMainData,
	...getCommentsData,
	...postCommentsData,
	...getBalanceData,
	...postPickData,
]
