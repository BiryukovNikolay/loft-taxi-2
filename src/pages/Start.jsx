import '../style/Start.css';
import React from 'react';
import StartLogo from '../components/Startlogo';
import { widthAuth } from '../context/AuthContext';
import StartForm from '../components/StartForm';
import PropTypes from "prop-types";

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

export default widthAuth(Start);

Start.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
