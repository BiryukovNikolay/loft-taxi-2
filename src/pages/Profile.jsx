import '../style/Profil.css';
import PaymentForm from '../components/PaymentForm';
import Header from '../components/Header';

const Profile = () => (<><Header />
            <section className="profil__section">
              { <PaymentForm />}
            </section></>)

export default Profile;
