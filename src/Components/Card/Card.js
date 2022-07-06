import React from 'react';
import { useState } from 'react';
import Comment from '../Comment/Comment';
import Comments from '../Hook/Comments';
import Name from '../Name/Name';
import SetOrder from '../SetOrder/SetOrder';


const Card = () => {

const [comments,setComments]=Comments([])
const [Orders,setOrders]=useState([])

console.log(Orders);

const handleAddToComments = (comment) => {
let NewComments = []

const exits = Orders.find(comments => comments.id === comment.id)

if(!exits){
    comment.quantity =1
    NewComments = [...Orders, comment];
}
else{
    const rests = Orders.filter((comments) => comments.id !== comment.id);
    NewComments = [...rests, exits];
}

setOrders(NewComments);
};

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
                      <Comment
                        key={comment.id}
                        comment={comment}
                        handleAddToComments={handleAddToComments}
                      ></Comment>
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
                  {Orders.map((Order) => (
                    <SetOrder
                      key={Order.id}
                      Order={Order}
                     
                    ></SetOrder>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;