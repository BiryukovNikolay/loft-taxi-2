import './App.css';
import React from 'react';
import Header from './Header.jsx';
import Map from './Map.jsx';
import Profile from './Profile.jsx';
import Login from './Login.jsx';
import Registration from './Registration.jsx';

const getPage = (page, callback) => {

  if (page === 'map') {
    return <Map />;
  }

  if (page === 'profile') {
    return <Profile />
  }

  if (page === 'login') {
    return <Login onSubmit={callback}/>
  }

  if (page === 'registration') {
    return <Registration onSubmit={callback}/>
  }

}

class App extends React.Component {  

  state = { page: 'login'}

  goToPage = (page) => {
    this.setState({ page })
  };

  render() {
    return <div className="App">
      <Header goToPage={this.goToPage} />
 
      {getPage(this.state.page, this.goToPage)}
    </div>
  };
}


export default App;
