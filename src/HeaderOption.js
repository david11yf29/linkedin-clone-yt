import React from 'react';
import { useSelector } from 'react-redux';
import './HeaderOption.css';

import { Avatar } from '@material-ui/core';
import { selectUser } from './features/userSlice';

const HeaderOption = ({ avatar, Icon, title, onClick }) => {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      { Icon ? <Icon className="headerOption__icon" /> : null }
      { avatar ? <Avatar className="headerOption__icon" /> : null }
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption;