import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, handlePaginationClick }) => {
  const renderPaginationItems = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(renderPageButton(i));
        }
        pages.push(renderEllipsis());
        pages.push(renderPageButton(totalPages));
      } else if (currentPage >= totalPages - 3) {
        pages.push(renderPageButton(1));
        pages.push(renderEllipsis());
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(renderPageButton(i));
        }
      } else {
        pages.push(renderPageButton(1));
        pages.push(renderEllipsis());
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(renderPageButton(i));
        }
        pages.push(renderEllipsis());
        pages.push(renderPageButton(totalPages));
      }
    }

    return pages;
  };

  const renderPageButton = (pageNumber) => {
    return (
      <button
        key={pageNumber}
        className={pageNumber === currentPage ? "active" : ""}
        onClick={() => handlePaginationClick(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderEllipsis = () => {
    return <span key="ellipsis">...</span>;
  };

  return <div className="pagination">{renderPaginationItems()}</div>;
};

export default Pagination;

