import { Request, Response } from "express";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Bitch!");
});

app.post("/login", (req: Request, res: Response) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000", //process.env.REDIRECT_URI
    clientId: "439a39d07c944a31920a230ffe3b5eed", //process.env.CLIENT_ID
    clientSecret: "b199f78b9fff46d8be5e57789ee0e64e", //process.env.CLIENT_SECRET,
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data: any) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err: Error) => {
      res.sendStatus(400);
    });
});

app.post("/refresh", (req: Request, res: Response) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000", //process.env.REDIRECT_URI
    clientId: "439a39d07c944a31920a230ffe3b5eed", //process.env.CLIENT_ID
    clientSecret: "b199f78b9fff46d8be5e57789ee0e64e", //process.env.CLIENT_SECRET,
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data: any) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err: Error) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(4000, () => {
  console.log("Server listenong on port 4000");
});
