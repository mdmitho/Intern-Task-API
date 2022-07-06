import React from 'react';

const Name = (props) => {
  const { name } = props.comment;
    return (
      <div>
        <h6 class="card-text text-start m-2  p-2">{name.slice(0, 12) + "..."}</h6>
      </div>
    );
};

export default Name;