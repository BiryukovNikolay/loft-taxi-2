import './App.css';
import React from 'react';
import Header from './Header.jsx';
import Map from './Map.jsx';
import Profile from './Profile.jsx';
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import { widthAuth } from './AuthContext';

const PAGES = {
  'map': (props) => <Map {...props}/>,
  'profile': (props) => <Profile {...props} />,
  'login': (props) => <Login {...props} />,
  'registration': (props) => <Registration {...props} />
}

class App extends React.Component {  

  state = { page: 'registration'}

  goToPage = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ page })
      return
    }
    this.setState({ page })
    //this.setState({page: 'login'})
  };

  render() {
    return <div className="App">
      <Header goToPage={this.goToPage} />
 
      {PAGES[this.state.page]({onSubmit: this.goToPage})}
    </div>
  };
}


export default widthAuth(App);
