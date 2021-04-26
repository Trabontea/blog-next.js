import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const list_view_icons = ['list', 'border-all']

const FilteringMenu =({onChange, filter}) => {
  // console.log('filter', filter)
  return (
    <div className='filtering-menu mb-2'>
      <FontAwesomeIcon
        className='clickable hoverable'
        size='2x'
        icon={list_view_icons[filter.view.list]}
        onClick={()=> onChange('view', {list: +!filter.view.list})}
      />
    </div>
  )
}

export default FilteringMenu;