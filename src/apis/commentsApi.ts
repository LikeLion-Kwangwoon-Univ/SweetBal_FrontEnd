import { PostCommentType } from "@/interface/CommentsInterface";
import axiosInstance from "./@core";

const PATH = "/goldbalance";

interface commentsType {
  postId: number;
  commentId?: number;
}

interface postLikedType extends commentsType {
  like: number;
}

type postComment = { postId: number; comment: PostCommentType };

const CommentsApi = {
  getComments(postId: number) {
    return axiosInstance.get(`${PATH}/${postId}/comment`);
  },
  getRecomments({ postId, commentId }: commentsType) {
    return axiosInstance.get(`${PATH}/${postId}/recomment/${commentId}`);
  },
  postLiked({ postId, commentId, like }: postLikedType) {
    return axiosInstance.post(
      `${PATH}/${postId}/comment/${commentId}/liked/${like}`
    );
  },
  postComment({ postId, comment }: postComment) {
    return axiosInstance.post(`${PATH}/${postId}/comment/add`, comment);
  },
  postRecomment({ postId, comment }: postComment) {
    return axiosInstance.post(`${PATH}/${postId}/recomment/add`, comment);
  },
};

export default CommentsApi;
