import React from 'react';
import './Sidebar.css';

import { Avatar } from '@material-ui/core';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>David Lin</h2>
        <h4>david11yf29@gmail.com</h4>
      </div>

      <div className="sidebar__state">
        
      </div>
    </div>
  )
}

export default Sidebar;