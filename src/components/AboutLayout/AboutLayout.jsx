import AboutBanner from "./AboutBanner"
import AboutOurMission from "./AboutOurMission";
import AboutOurValues from "./AboutOurValues";
import AboutUsSection from "./AboutUsSection";
import EndBanner from "../../EndBanner";
import Footer from "../../Footer";
import { Helmet } from 'react-helmet-async';

function AboutLayout() {
        return (
          <>
            <Helmet>
              <title>About Us | Niranjan Indoor Plants</title>
              <meta name="description" content="Learn about our mission to bring nature indoors. We are passionate about providing high-quality indoor plants." />
            </Helmet>
            <main>
              <AboutBanner />
              <AboutUsSection />
              <AboutOurValues />
              <AboutOurMission />
              <EndBanner />
              <Footer />
            </main>
          </>
        );
}

export default AboutLayout