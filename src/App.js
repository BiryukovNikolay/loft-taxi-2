import './style/App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Map from './pages/Map.jsx';
import Profile from './pages/Profile.jsx';
import Start from './pages/Start';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

const PAGES = {
  'map': (props) => <Map {...props}/>,
  'profile': (props) => <Profile {...props} />,
  'start': (props) => <Start {...props} />,
}

class App extends React.Component {  

  state = { page: 'start'}

  goToPage = (page) => {
    console.log('App', this.props.isLoggedIn);

    if (!this.props.isLoggedIn) {
      this.setState( {page: 'start'} );
      return
    }

    if (!page) {
      this.setState( {page: 'map'} );
      return
    }

    this.setState({ page });
  };

  render() {
    return <div className="App">
      {this.state.page !== 'start' && <Header goToPage={this.goToPage} />}
      {this.state.page === 'start' ? PAGES[this.state.page]({onSubmit: this.goToPage}) : PAGES[this.state.page]()}
    </div>
  };
}

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);

Start.propTypes = {
  isLoggedIn: PropTypes.bool
}
