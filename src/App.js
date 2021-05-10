import './style/App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Map from './pages/Map.jsx';
import Profile from './pages/Profile.jsx';
import Start from './pages/Start';
import { widthAuth } from './context/AuthContext';

const PAGES = {
  'map': (props) => <Map {...props}/>,
  'profile': (props) => <Profile {...props} />,
  'start': (props) => <Start {...props} />,
}

class App extends React.Component {  

  state = { page: 'start'}

  goToPage = (page) => {
    console.log(this.props.isLoggedIn);
    if (!this.props.isLoggedIn) {
      return
    }
    this.setState({ page })
  };

  render() {
    return <div className="App">
      {this.state.page !== 'start' && <Header goToPage={this.goToPage} />}
      {PAGES[this.state.page]({onSubmit: this.goToPage})}
    </div>
  };
}

export default widthAuth(App);
