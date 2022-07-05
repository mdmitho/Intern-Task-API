import React from 'react';

const Home = () => {
    return (
      <div>
        <h1 className="fs-1 fw-bold mt-5">Manage Comments</h1>
        <button type="button" class="btn btn-dark mt-3">
          Active Comments
        </button>
        <button type="button" class="btn btn-dark ms-5 mt-3">
          Deleted Comments
        </button>
      </div>
    );
};

export default Home;