// pagination.js
import { useState } from "react";

const Pagination = ({ items, itemsPerPage, onPageChange = null, children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedItems.map((item, index) => children(item, index))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-5">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={` ${
                i + 1 === currentPage ? "bg-gray-200" : ""
              } py-2 px-4 rounded-md mx-1`}
              onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Pagination;
