import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, removeComment, addComment} from './actions'


const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(Comment);