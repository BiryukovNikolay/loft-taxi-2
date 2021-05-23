import '../style/Profil.css';
import { connect } from 'react-redux';
import { logOut } from '../actions';
import PaymentForm from '../components/PaymentForm';
import Header from '../components/Header';

const Profile = () => (<><Header />
            <section className="profil__section">
              { <PaymentForm />}
            </section></>)

export default connect(
    null,
    { logOut }
)(Profile);
