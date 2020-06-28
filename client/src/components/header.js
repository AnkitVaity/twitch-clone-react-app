import React from 'react';
import {Link} from "react-router-dom";
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
         <img alt="logo" style={{ height:"25px", width: "30px"}} src="https://pngimage.net/wp-content/uploads/2018/06/twitch-button-png-1.png" />
      </Link>
      <div className="right menu">
        <Link to="/" className="purple item active">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
