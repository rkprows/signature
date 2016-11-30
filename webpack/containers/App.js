import React from 'react';
import Card from '../components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.addReception = this.addReception.bind(this);
    this.state = {
      signature: {}
    }
  }

  addReception() {
    
  }

  
  render() {
    return (
      <div className='row'>
        <div id='form' className='col s5'>
          <h4>Step 1: Enter Your Information</h4>
          <label for='field-full-name'>Full Name</label>
          <input type='text'id='field-full-name'/>
          <label htmlFor='field-job-title'>Job Title</label>
          <input type='text'id='field-job-title'/>
          <label htmlFor='field-phone-number'>Phone Number</label>
          <input type='tel'id='field-phone-number'/>
          <label htmlFor='field-email'>E-mail</label>
          <input type='email'id='field-email'/>
          <input type='checkbox'id='field-front-desk'/>
          <label htmlFor='field-front-desk' onClick={this.addReception}>Include Front Desk Number</label>
        </div>
        <div id='card' className='col s6'>
          <h4>Step 2: Copy Your Signature</h4>
          <p>After filling out the form on the left, place your cursor inside the box below, select all (Control + A on a PC, Command + A on a Mac), and copy. Then open Microsoft Outlook, paste into the Edit Signature box, and set as default signature.</p>
          <Card addReception = { this.addReception }/>
        </div>
      </div>
    )
  }
};

export default App;

