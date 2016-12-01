import React from 'react';
import Card from '../components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.state = {
      signature: {
        full_name:'',
        job_title:'',
        phone_number:'',
        email:''
      },
      frontDesk: ''
    }
  }

  onChange() {
    let full_name = this.refs.full_name.value.toUpperCase()
    let job_title = this.refs.job_title.value
    let phone_number 
      if (this.refs.phone_number.value) {
        phone_number = 'Direct:' + ' ' + this.refs.phone_number.value
      } else {
        phone_number = ''
      }
    let email
      if (this.refs.email.value) {
        email = 'Email:' + ' ' + this.refs.email.value
      } else {
        email = ''
      }
    
    this.setState({ signature: { full_name, job_title, phone_number, email}})
  }
  
  phoneChange() {
    let frontDesk
    if (this.refs.frontDesk.checked === true) {
      frontDesk = 'Front Desk: 801-555-1234'
    } else {
      frontDesk = ''
    }
    this.setState({ frontDesk })
  }
 

  
  render() {
    return (
      <div className='row'>
        <div id='form' className='col s5'>
        <h4>Step 1: Enter Your Information</h4>
        <form onChange={ this.onChange }>
          <label htmlFor='field-full-name'>Full Name</label>
          <input type='text'id='field-full-name' ref='full_name'/>
          <label htmlFor='field-job-title'>Job Title</label>
          <input type='text'id='field-job-title'ref='job_title'/>
          <label htmlFor='field-phone-number'>Phone Number</label>
          <input type='tel'id='field-phone-number'ref='phone_number'/>
          <label htmlFor='field-email' >E-mail</label>
          <input type='email'id='field-email' ref='email'/>
          <input type='checkbox'id='field-front-desk' ref='frontDesk' onClick={ this.phoneChange }/>
          <label htmlFor='field-front-desk'>Include Front Desk Number</label>
        </form>
        </div>
        <div id='card' className='col s6'>
          <h4>Step 2: Copy Your Signature</h4>
          <p>After filling out the form on the left, place your cursor inside the box below, select all (Control + A on a PC, Command + A on a Mac), and copy. Then open Microsoft Outlook, paste into the Edit Signature box, and set as default signature.</p>
          <Card signature={this.state.signature} frontDesk={this.state.frontDesk} />
        </div>
      </div>
    )
  }
};

export default App;

