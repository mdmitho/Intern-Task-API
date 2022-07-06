import React from 'react';

const SetOrder = ({Order}) => {

    const {body}=Order

    return (
      <div className='d-flex'>
        <div className="">
          <p>{body}</p>
        </div>
        <div className="">
          <button type="button" class="btn btn-outline-primary">
            Edit
          </button>
        </div>
      </div>
    );
};

export default SetOrder;