import { connect } from 'react-redux';
import { logOut } from '../actions';

const Profile = () => (<div>Profile page</div>)

export default connect(
    null,
    { logOut }
)(Profile);
