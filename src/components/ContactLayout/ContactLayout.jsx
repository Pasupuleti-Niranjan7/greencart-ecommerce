import EndBanner from "../../EndBanner";
import Footer from "../../Footer";
import ContactBanner from "./ContactBanner";
import ContactUs from "./ContactUs";
import { Helmet } from 'react-helmet-async';

let ContactLayout = () => {
        return (
                <>
                <Helmet>
                  <title>Contact Us | Niranjan Indoor Plants</title>
                  <meta name="description" content="Get in touch with us. We are here to help you with your indoor plant needs." />
                </Helmet>
                <ContactBanner />
                <ContactUs />
                <EndBanner />
                <Footer />
                </>
        )
}

export default ContactLayout;