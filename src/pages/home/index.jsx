import './index.scss';
import Layout from '../layout/layout.jsx';
import Feature from '../../components/feature/index.jsx';
import IconChat from '../../images/icon-chat.png';
import IconMoney from '../../images/icon-money.png';
import IconSecurity from '../../images/icon-security.png';

function Home() {

    const featuresItems = [
        [IconChat, "Chat Icon", "You are our #1 priority", "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "],
        [IconMoney, "Money Icon", "More savings means higher rates", "The more you save with us, the higher your interest rate will be! "],
        [IconSecurity, "Shield Icon", "Security you can trust", "We use top of the line encryption to make sure your data and money is always safe. "]
    ];

    return (
        <Layout>
            <div className="featureContainer">
                <Feature key={featuresItems[0][2]} data={featuresItems[0]} />
                <Feature key={featuresItems[1][2]} data={featuresItems[1]} />
                <Feature key={featuresItems[2][2]} data={featuresItems[2]} />
            </div>
        </Layout>
    );
}

export default Home;