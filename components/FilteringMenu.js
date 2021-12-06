import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const list_view_icons = ['list', 'border-all'];
const date_filtering_icons = ['sort-numeric-down', 'sort-numeric-up'];

const FilteringMenu =({onChange, filter}) => {
  // console.log('filter', filter)
  return (
    <div className='filtering-menu mt-4 mb-2'>
      <FontAwesomeIcon
        className='clickable hoverable mr-3'
        size='2x'
        icon={list_view_icons[filter.view.list]}
        onClick={()=> onChange('view', {list: +!filter.view.list})}
      />
      <FontAwesomeIcon
          className='clickable hoverable'
          size='2x'
          icon={ date_filtering_icons[filter.date.asc]}
          onClick={()=> onChange('date', {asc: +!filter.date.asc})}
      />
    </div>
  )
}

export default FilteringMenu;