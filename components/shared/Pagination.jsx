// components/Pagination.js
import React from "react";
import {
  Pagination as ShadCNPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 3; 

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
      let endPage = Math.min(totalPages, currentPage + Math.floor(visiblePages / 2));

      if (startPage === 1) {
        endPage = visiblePages;
      }
      if (endPage === totalPages) {
        startPage = totalPages - visiblePages + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <ShadCNPagination className="flex justify-center mt-6">
      <PaginationContent className="flex md:space-x-2 space-x-0 ">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="px-1 py-2 gradient-black text-[#f5f5f5] rounded hover:bg-gray-500"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>
        {pageNumbers[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="px-3 py-2  text-[#f5f5f5] rounded hover:bg-gray-500"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="flex items-center px-3 py-2 text-[#f5f5f5]" />
            </PaginationItem>
          </>
        )}
        {pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href="#"
              className={`px-3 py-2 rounded ${currentPage === pageNumber ? 'gradient-black text-white' : 'text-[#f5f5f5]'}`}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(pageNumber);
              }}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            <PaginationItem>
              <PaginationEllipsis className="flex items-center px-3 py-2 text-[#f5f5f5]" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="px-3 py-2  text-[#f5f5f5] rounded hover:bg-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(totalPages);
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            className="px-3 py-2 gradient-black text-white rounded hover:bg-gray-500"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadCNPagination>
  );
};

export default Pagination;
