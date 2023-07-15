import React, { useState } from "react";

interface PropTypes {
  data: [];
}

const Pagination = (props: PropTypes) => {
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = props;

  const dataLength = data?.length;

  const pageNumbers: Array<number> = [];
  for (let i = 1; i <= Math.ceil(dataLength / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(5);
  const myPageNumbers = pageNumbers.slice(startPoint, endPoint);

  const endPage = Math.ceil(dataLength / postsPerPage);
  const prevPageHandler = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
    if (currentPage <= startPoint + 1) {
      setStartPoint(startPoint - 5);
      setEndPoint(endPoint - 5);
    }
  };
  const nextPageHandler = () => {
    if (currentPage >= endPage) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
    if (currentPage >= endPoint) {
      setStartPoint(startPoint + 5);
      setEndPoint(endPoint + 5);
    }
  };
  return (
    <div>
      <button onClick={prevPageHandler}>Previous</button>
      {myPageNumbers.map((number) => (
        <div key={number} className="numbers">
          <p
            style={{
              background: currentPage === number ? "#868d024a" : "",
            }}
            key={number}
          >
            {number}
          </p>
        </div>
      ))}
      <button onClick={nextPageHandler}>Next</button>
    </div>
  );
};

export default Pagination;
