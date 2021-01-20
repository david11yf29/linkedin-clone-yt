import React from 'react';

import './HeaderOption.css';

import { Avatar } from '@material-ui/core';

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  return (
    <div onClick={onClick} className="headerOption">
      { Icon ? <Icon className="headerOption__icon" /> : null }
      { avatar ? <Avatar className="headerOption__icon" src={avatar} /> : null }
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption;