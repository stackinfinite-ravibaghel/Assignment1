import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


interface Props {
  currentPage: number;
  totalPages: number;
  handlePaginationChange: (page: number) => void;
}

const PaginationCom: React.FC<Props> = ({
  totalPages,
  currentPage,
  handlePaginationChange,
}: Props) => {
  if (totalPages <= 1) {
    return null; // Hide pagination if there is only one page
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = totalPages;
    // console.log("TotalPage", maxVisiblePages);
    // Maximum number of visible pages in pagination

    // Calculate start and end page numbers based on current page and total pages
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(maxVisiblePages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <PaginationItem
          key="start-ellipsis"
          page={1}
          onClick={handlePaginationChange}
        />
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem
          key={i}
          page={i}
          active={i === currentPage}
          onClick={handlePaginationChange}
        />
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(
        <PaginationItem
          key="end-ellipsis"
          page={totalPages}
          onClick={handlePaginationChange}
        />
      );
    }

    return pageNumbers;
  };

  return (
    <Stack
      spacing={4}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => handlePaginationChange(value)}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
      {renderPageNumbers()}
    </Stack>
  );
};

interface PaginationItemProps {
  page: number;
  active?: boolean;
  onClick: (page: number) => void;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  page,
  active = false,
  onClick,
}: PaginationItemProps) => <></>;

export default PaginationCom;
