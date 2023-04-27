import Wrapper from "../Assets/Wrappers/LandingPageWrapper"
import { Link } from "react-router-dom";
import main from "../Assets/Images/main.jpg"

const LandingPage = () => {
    return (
      <Wrapper>
        <nav>
        </nav>
        <div className="container page">
          {/* Info */}
          <div className="info">
            <h1>
            <span>Welcome to my Profile Site, Please select where you'd like to go first...</span> 
            </h1>
            <p>
              I'm baby squid vegan bodega boys solarpunk portland ut yes plz four
              loko +1. Mumblecore jean shorts cronut bespoke, JOMO tacos literally
              green juice plaid. Taxidermy jianbing fit, truffaut actually ramps
              tilde unicorn kale chips cold-pressed ut. Est kickstarter culpa duis
              umami hashtag sriracha lumbersl.
            </p>
          </div>
          <div className="link-container">
          <Link to="/Technical-page" className="btn btn-hero1">Technical Page</Link>
          <Link to="/Travel-page" className="btn btn-hero2">Travel Page</Link>
          <Link to="/Personal-page" className="btn btn-hero3">Personal Page</Link>
          </div>
  
          {/* Image */}
          <img src={main} alt="Main" className="img main-img" />
          
        </div>
      </Wrapper>
    );
  };
  
  export default LandingPage;