import Navigation from '../Navigation/Navigation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Home.css';

function Home() {
  return (
    <div>
        <Navigation />
        <div className="home-container">
      <h1>FLORON: We are the leader of Potato chips</h1>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </h4>
      <p>First we eat, then do everything else.</p>
      <button>Learn More</button>
      <br />
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon /> 
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
    </div>
    </div>
  );
}

export default Home;
