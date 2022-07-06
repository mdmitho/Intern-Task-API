import React from 'react';
import Comment from '../Comment/Comment';
import Comments from '../Hook/Comments';
import Name from '../Name/Name';


const Card = () => {

const [comments,setComments]=Comments([])

console.log(comments);

    return (
      <div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div className="m-2">
              <form class="d-flex">
                <h5 className="m-1 text-info">Comments</h5>
                <input
                  class="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div class="card border">
              <div className="d-flex">
                <div class="card-body">
                  <div className="border-bottom">
                    <h5 class="card-title text-start ps-2">Name</h5>
                  </div>
                  <p class="card-text">
                    {comments.map((comment) => (
                      <Name key={comment.id} comment={comment}></Name>
                    ))}
                  </p>
                </div>
                <div class="card-body border">
                  <div className="border-bottom">
                    <h5 class="card-title  text-start  ps-2">Comment</h5>
                  </div>
                  <p class="card-text">
                    {comments.map((comment) => (
                      <Comment key={comment.id} comment={comment}></Comment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-5">
            <h5 className=" text-info text-start">Set Order</h5>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;