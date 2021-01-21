import React from 'react';
import './Widgets.css';

import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )
  } 

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is back", "Top news - 9999 readers")}
      {newsArticle("Opportunities is everywhere", "Top news - 5678 readers")}
      {newsArticle("Tesla hit high price", "Auto - 8878 readers")}
      {newsArticle("Bitcoins sky high", "Crypto - 1112 readers")}
      {newsArticle("Redux is convenient", "Code - 3679 readers")}
      {newsArticle("New President", "US news - 4932 readers")}
    </div>
  )
}

export default Widgets;