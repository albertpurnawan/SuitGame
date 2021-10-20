/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import BiodataRaw from "../BiodataRaw";
import UrlSwitch from "../Card/UrlSwitch";

const Profil = () => {
  const username = useSelector((state) => state.newUser);
  const maleAvatar = "/images/male-avatar.jpg";
  const femaleAvatar = "/images/female-avatar.jpg";
  const score = useSelector((state) => state.score);
  const totalScore = score.winScore + score.drawScore + score.loseScore;
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const bio = BiodataRaw;
  const link = UrlSwitch();

  const winRate = () => {
    if (totalScore > 0) {
      const percentScore = (score.winScore / totalScore) * 100;
      return Math.round((percentScore + Number.EPSILON) * 100) / 100;
    } else {
      return 0;
    }
  };

  const choiceAvatar = (kelamin) => {
    if (kelamin == "male") {
      return maleAvatar;
    } else {
      return femaleAvatar;
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get(`${link}/api/auth/profil`, {
        headers: { authorization: token },
      })
      .then(function (response) {
        console.log(response);
        setEmail(response.data.email);
        setCity(response.data.city);
        setGender(response.data.gender);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <section id="profile">
      <div className="body-profile">
        <div className="profile-card">
          <header>
            <div className="profile-card-img">
              <img src={choiceAvatar(gender)}></img>
            </div>
            <h1>{username}</h1>
            <h2>{email}</h2>
            <h3>
              Win ({score.winScore}), Draw ({score.drawScore}), Lose (
              {score.loseScore})
            </h3>
            <h2>Win Rate : {winRate()} %</h2>
          </header>
          <div className="profile-bio">
            <h1></h1>
            <p>
              <h1 className="text-white">Biodata</h1>
              Lahir di {city}, {bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;
