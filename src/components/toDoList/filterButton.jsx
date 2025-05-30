import React from 'react';

const FilterButton = (
    {
        filterName,
        isPressed,
        setFilter,
    }) => {
    return (
        <button
            type="button"
            className={`todo-list__filter-button`}
            aria-pressed= {isPressed}
            onClick={() => setFilter(filterName)}>
            {filterName}
        </button>
    )
};

export default FilterButton;