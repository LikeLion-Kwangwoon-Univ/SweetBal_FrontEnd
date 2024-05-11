export interface BubbleType {
  id: number;
  sideInfo: number;
  content: string;
  childCount?: number;
  likeCount: number;
  parentCommentId: number;
}

export interface CommentsQueryType {
  postId: number;
  commentId?: number | undefined;
}

export interface PostCommentType {
  sideInfo: number;
  content: string;
  parentCommentId?: number;
}
