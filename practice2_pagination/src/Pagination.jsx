import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {


  //номер текущей страницы через количество страниц
  //используем Math.ceil чтобы показать остаток юзеров
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  //отрисовка состояния кнопок
  if (currentPage === 0) {
    isPrevPageAvaible = true;
  }

  if (currentPage === totalPages - 1) {
    isNextPageAvaible = true;
  }

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvaible}>
        {isPrevPageAvaible ? "" : "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvaible}>
        {isNextPageAvaible ? "" : "→"}
      </button>
    </div>
  );
};
export default Pagination;