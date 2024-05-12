import { SetStateAction } from "react";

export interface BubbleType {
  id: number;
  sideInfo: number;
  content: string;
  childCount?: number;
  likeCount: number;
  parentCommentId: number;
}

export interface BubbleTabType {
  comment: BubbleType;
}

export interface CommentsTabType {
  comments: BubbleType[];
  setIsOpenComment: React.Dispatch<SetStateAction<boolean>>;
}

export interface RecommentsTabType {
  recomments: BubbleType[];
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

export interface LikedQueryType {
  postId: number;
  commentId: number;
  like: number;
}
