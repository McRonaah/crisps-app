import { useState, useEffect } from 'react';
import { auth, googleProvider, facebookProvider, emailProvider } from './firebase.config';
import { signInWithPopup } from "firebase/auth";
import { FaGoogle, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
// import Services from "./components/Services/Services";

import welcome1 from "./assets/crisps-welcome.jpeg";
import logo from "./assets/logo.png";
import avatar from "./assets/avatar.png";

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleClick = (provider) => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        localStorage.setItem('email', data.user.email);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      // If the user is already logged in, set the user state.
      setUser({ email: userEmail });
    }
  }, []);

  return (
    <Router>
      {user ? (
        <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
          {/* <Redirect to="/home" />
          <Switch>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" component={Contact} />
          </Switch> */}
        </>
      ) : (
        <div className="welcome-page">
          <img src={logo} alt="Logo" className="logo" />
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="content-column">
            <h1 className="app-title">Welcome to the Crisps App</h1>
            <p className="app-description">
              Discover a world of delicious snacks. From classic potato chips to exotic flavors, we've got it all.
            </p>
            <div className="sign-in-buttons">
              <button onClick={() => handleClick(googleProvider)}>
                <FaGoogle /> Sign in with Google
              </button>
              <button onClick={() => handleClick(facebookProvider)}>
                <FaFacebook /> Sign in with Facebook
              </button>
              <button onClick={() => handleClick(emailProvider)}>
                <FaEnvelope /> Sign in with Email
              </button>
            </div>
          </div>
          <div className="image-column">
            <img src={welcome1} alt="welcome page" />
          </div>
        </div>
      )}
    </Router>
  );
//     <>
//       {value ? <Home/> : (
//         <div className="welcome-page">
//           <img src={logo} alt="Logo" className="logo" />
//           <img src={avatar} alt="Avatar" className="avatar" />
//         <div className="content-column">
//           <h1 className="app-title">Welcome to the Crisps App</h1>
//           <p className="app-description">
//             Discover a world of delicious snacks. From classic potato chips to exotic flavors, we've got it all.
//           </p>
//           <div  className="sign-in-buttons">
//          <button onClick={() => handleClick(googleProvider)}>
//             <FaGoogle /> Sign in with Google
//           </button> 
//           <button onClick={() => handleClick(facebookProvider)}>
//             <FaFacebook /> Sign in with Facebook
//           </button>
//           <button onClick={() => handleClick(emailProvider)}>
//             <FaEnvelope /> Sign in with Email
//           </button>
//          </div>
//         </div>
//         <div className="image-column">
//           <img src={welcome1} alt="welcome page" />
//         </div>
//       </div>
      
//       )}
//     </>
    
//   )
}

export default App;