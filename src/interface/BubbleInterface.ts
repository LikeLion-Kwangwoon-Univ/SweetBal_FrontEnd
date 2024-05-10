export interface BubbleType {
  id: number;
  position: string;
  message: string;
  recomment: number;
  liked: number;
}

export interface CommentsQueryType {
  postId: number;
  commentId?: number | undefined;
}
