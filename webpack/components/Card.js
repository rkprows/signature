import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { fullName, jobTitle, phoneNumber, email } = this.props.signature
    return(
      <div id='example' >
          <div id='card-header'>
            <img src='../assets/logo.png' id='logo' className='left'></img>
            <p id='card-name'>{fullName}</p>
            <p id='card-title'>{jobTitle}</p>
            <p id='card-company' className='italic'>Rachel Prows Technologies</p>
          </div>
          <div id='card-details'>
            <p id='card-email'>{ email }</p>
            <p id='card-phone'>{ phoneNumber }</p>
            <p id='card-front-desk'>{ this.props.frontDesk }</p>
            <p id='card-website'className='italic'>rachelprowstechnologies.com</p>
          </div>
      </div>
    )
  }
  
}

export default Card;

