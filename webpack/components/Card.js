import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let { full_name, job_title, phone_number, email } = this.props.signature
    return(
      <div id='example'>
          <div id='card-header'>
            <img src='../assets/logo.png' id='logo' className='left'></img>
            <p>{full_name}</p>
            <p>{job_title}</p>
            <p className='italic'>Rachel Prows Technologies</p>
          </div>
          <div id='card-details'>
            <p>{ email }</p>
            <p>{ phone_number }</p>
            <p>{ this.props.frontDesk }</p>
            <p className='italic'>rachelprowstechnologies.com</p>
          </div>
      </div>
    )
  }
  
}

export default Card;