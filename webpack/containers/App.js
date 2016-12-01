import React from 'react';
import Card from '../components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.state = {
      signature: {
        fullName:'',
        jobTitle:'',
        phone_number:' ',
        email:''
      },
      frontDesk: ''
    }
  }

  onChange() {
    let fullName = this.refs.fullName.value.toUpperCase()
    let jobTitle = this.refs.jobTitle.value.toUpperCase()
    let phoneNumber 
      if (this.refs.phoneNumber.value) {
        phoneNumber = 'DIRECT: (' + this.refs.phoneNumber.value.substring(0,3) + ') ' + this.refs.phoneNumber.value.substring(3,6) + '-' + this.refs.phoneNumber.value.substring(6,10);
      } else {
        phoneNumber = ' '
      }
    let email
      if (this.refs.email.value) {
        email = 'EMAIL:' + ' ' + this.refs.email.value
      } else {
        email = ''
      }
    
    this.setState({ signature: { fullName, jobTitle, phoneNumber, email}})
  }
  
  phoneChange() {
    let frontDesk
    if (this.refs.frontDesk.checked === true) {
      frontDesk = 'FRONT DESK: 801-555-1234'
    } else {
      frontDesk = ''
    }
    this.setState({ frontDesk })
  }
 

  
  render() {
    return (
      <div className='wrapper'>
        <div className='row'>
          <div id='form' className='col s12 l5'>
          <h4>Step 1: Enter Your Information</h4>
          <form onChange={ this.onChange }>
            <label htmlFor='field-full-name'>Full Name</label>
            <input type='text'id='field-full-name' ref='fullName'/>
            <label htmlFor='field-job-title'>Job Title</label>
            <input type='text'id='field-job-title'ref='jobTitle'/>
            <label htmlFor='field-phone-number'>Phone Number</label>
            <input type='tel'id='field-phone-number'ref='phoneNumber'/>
            <label htmlFor='field-email' >E-mail</label>
            <input type='email'id='field-email' ref='email'/>
            <input type='checkbox'id='field-front-desk' ref='frontDesk' onClick={ this.phoneChange }/>
            <label htmlFor='field-front-desk'>Include Front Desk Number</label>
          </form>
          </div>
          <div id='card' className='col s12 l5'>
            <h4>Step 2: Copy Your Signature</h4>
            <p>After filling out the form on the left, place your cursor inside the box below, select all (Control + A on a PC, Command + A on a Mac), and copy. Then open Microsoft Outlook, paste into the Edit Signature box, and set as default signature.</p>
            <Card signature={this.state.signature} frontDesk={this.state.frontDesk} />
          </div>
        </div>
      </div>
    )
  }
};

export default App;

