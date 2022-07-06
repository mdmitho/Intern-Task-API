import React from 'react';

const Name = (props) => {
  const { name } = props.comment;
    return (
      <div>
        <h6 class="card-text text-start m-2 border-bottom p-2">{name}</h6>
      </div>
    );
};

export default Name;