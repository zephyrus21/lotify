import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = (code: any) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:4000/login", {
        code,
      })
      .then((res) => {
        // setAccessToken(res.data.accessToken);
        // setRefreshToken(res.data.refreshToken);
        // setExpiresIn(res.data.expiresIn);
        // window.history.pushState({}, null, "/");
        console.log(res.data);
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);
};

export default useAuth;
