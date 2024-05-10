export interface BubbleType {
  id: number;
  sideInfo: number;
  content: string;
  childCount?: number;
  likeCount: number;
  parentCommnetId: number;
}

export interface CommentsQueryType {
  postId: number;
  commentId?: number | undefined;
}
