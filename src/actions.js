import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  };
}

export function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    id: commentId
  };
}

export function editComment(commentId, commentText) {
  return {
    type: EDIT_COMMENT,
    id: commentId,
    text: commentText
  };
}

export function updateComment(commentId, commentText) {
  return {
    type: UPDATE_COMMENT,
    id: commentId,
    text: commentText
  };
}

export function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  };
}

export function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  };
}
