import React from 'react';


const Comment = ({ comment, handleAddToComments }) => {
  const { body } = comment;

  return (
    <div className="">
    
        <div className="d-flex">
          <div className="">
            <h6 class="card-text text-start m-2  p-2">{body.substr(0, 30) + "..."} </h6>
          </div>
          <div className="mt-3 ">
            <input
              onClick={() => handleAddToComments(comment)}
              class="form-check-input text-end"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </div>
   
    </div>
  );
};

export default Comment;