import React from 'react';

const Comment = (props) => {
  const { body } = props.comment;
  return (
    <div>
      <div>
        <h6 class="card-text text-start m-2 border-bottom p-2">{body}</h6>
      </div>
    </div>
  );
};

export default Comment;