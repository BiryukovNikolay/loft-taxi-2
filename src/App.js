import './App.css';
import React from 'react';
import Header from './Header.jsx';
import Map from './Map.jsx';
import Profile from './Profile.jsx';
import Login from './Login.jsx';
import Registration from './Registration.jsx';

const getPage = (page, callback) => {

  switch (page) {
    case 'map':
      return <Map />;
    case 'profile':
      return <Profile />
    case 'login':
      return <Login onSubmit={callback}/>;
    case 'registration':
      return <Registration onSubmit={callback}/>
    default:
      return <Map />;
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
