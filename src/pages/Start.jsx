import '../style/Start.css';
import React from 'react';
import StartLogo from '../components/Startlogo';
import StartForm from '../components/StartForm';
import { connect } from 'react-redux';
import { authenticate } from '../actions';

class Start extends React.Component {  
    render() {

      return <div className="start-page">
          <section className="start-logo-section" >
            <StartLogo />
          </section>
          <section className="reg-login-section">
              { <StartForm onSubmit={this.props.onSubmit} />}
          </section>
        </div>
    };
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { authenticate }
)(Start);
