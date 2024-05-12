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
  setTargetComment?: React.Dispatch<SetStateAction<BubbleType | undefined>>;
}

export interface CommentsTabType {
  comments: BubbleType[];
  setIsOpenComment: React.Dispatch<SetStateAction<boolean>>;
  setTargetComment: React.Dispatch<SetStateAction<BubbleType | undefined>>;
}

export interface RecommentsTabType {
  recomments: BubbleType[];
  targetComment: BubbleType | undefined;
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
