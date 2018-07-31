import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, addComment}) =>
  <li>
    <div class="commentText"> {text} </div>
    <div class="commentVotes"> <span> votes: { votes} </span> </div>
    <div class="commentButton">
      <button class="bUp" onClick={() => thumbUpComment(id)}>Thumb up</button> 
      <button class="bDown" onClick={() => thumbDownComment(id)}>Thumb down</button>
      <button class="bDelete" onClick={() => removeComment(id)}>Delete</button>
      <button class="bAdd" onClick={() => addComment(text=window.prompt("new comment:"))}>New comment</button>
    </div>
  </li>;

export default Comment;