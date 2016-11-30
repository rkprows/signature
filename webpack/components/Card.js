import React from 'react';

class Card extends React.Component {

  render() {
    return(
      <div id='example'>
        <div id='card-header'>
          <img src='../assets/logo.png' id='logo'></img>
        </div>
        <div id='card-details'>
          <p>rachelprowstechnologies.com</p>
        </div>
      </div> 
    )
  }
  
}

export default Card;