import React from "react";

interface LoginProps {}

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=439a39d07c944a31920a230ffe3b5eed&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <a className='btn btn-success btn-lg' href={AUTH_URL}>
      Login With Spotify
    </a>
  );
};

export default Login;
