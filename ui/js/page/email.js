import React from 'react';
import lbryio from '../lbryio.js';
import {getLocal, setLocal} from '../utils.js';
import FormField from '../component/form.js'
import {Link} from '../component/link.js'
import rewards from '../rewards.js';

const EmailPage = React.createClass({
  handleSubmit: function(event) {
    if (event !== undefined) {
      event.preventDefault();
    }

    if (!this.state.email) {
      this._emailField.warnRequired();
    }
  },
  componentWillMount: function() {
    this._getRewardType();
  },
  render: function() {
    return (
      <main>
        <section className="card">
          <h1>Verify your Email Address</h1>
          <form onSubmit={this.handleSubmit}>
            <section><label>Email <FormField ref={(field) => { this._emailField = field }} type="text" name="email" value={this.state.email} /></label></section>
            <div><Link button="primary" label="Submit" onClick={this.handleSubmit} /></div>
          </form>
        </section>
      </main>
    );
  }
});

export default EmailPage;
