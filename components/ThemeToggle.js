import Toggle from 'react-toggle';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ThemeToggle = ({onChange}) => {
  return (
    <label>
      <Toggle className="day-night-toggle"
          icons={{
            checked: <FontAwesomeIcon inverse icon="sun" />,
            unchecked: <FontAwesomeIcon inverse icon="moon" />,
          }}
          onChange={onChange}/>
    </label>
  )
}

export default ThemeToggle;