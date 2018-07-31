import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, addComment, editComment}) =>
  <li>
    <div className="commentText"> {text} </div>
    <div className="commentVotes"> <span> votes: { votes} </span> </div>
    <div className="commentButton">
      <button className="bUp" onClick={() => thumbUpComment(id)}>Thumb up</button> 
      <button className="bDown" onClick={() => thumbDownComment(id)}>Thumb down</button>
      <button className="bDelete" onClick={() => removeComment(id)}>Delete</button>
      <button className="bEdit" onClick={() => editComment(text=window.prompt("edit comment:"))}>Edit comment</button>
      <button className="bAdd" onClick={() => addComment( text=window.prompt("new comment:"))}>New comment</button>   
    </div>
  </li>;

export default Comment;