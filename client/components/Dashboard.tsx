import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyPlayer from "react-spotify-web-playback";
import useAuth from "../hooks/useAuth";

interface DashboardProps {
  code: string | string[];
}

const spotifyApi = new SpotifyWebApi({
  clientId: "439a39d07c944a31920a230ffe3b5eed",
});

const Dashboard: React.FC<DashboardProps> = ({ code }) => {
  const token = useAuth(code);

  useEffect(() => {
    if (!token) return;
    spotifyApi.setAccessToken(token);
  }, [token]);

  return (
    <div>
      <SpotifyPlayer
        token={token as unknown as string}
        uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
      />
      ;
    </div>
  );
};

export default Dashboard;
