import { connect } from 'react-redux';
import { logOut } from '../actions';
import Header from '../components/Header';

const Profile = () => (<><Header />
<div>Profile page</div></>)

export default connect(
    null,
    { logOut }
)(Profile);
