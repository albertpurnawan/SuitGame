/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/dist/client/link";
import { useSelector } from "react-redux";

const ListGame = () => {
  const game1 = "/images/suwit/LogoSuwit.png";
  const game2 = "https://i.redd.it/b3esnz5ra34y.jpg";
  const game3 = "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif";
  const game4 = "https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif";

  const score = useSelector((state) => state.score);
  return (
    <section id="list-game">
      <div className="body-profile">
        <div className="cards-list">
          <Link href="#suwit">
            <div className="card" style={{ textDecoration: "none" }}>
              <div className="card_image">
                <img alt="" src={game1} />
              </div>
              <div className="card_title title-score">
                <p>
                  Win: {score.winScore} Lose: {score.loseScore}{" "}
                </p>
              </div>
            </div>
          </Link>

          <div className="card comingsoon">
            <div className="card_image">
              <img alt="" src={game2} />
            </div>
            <div className="card_title title-white">
              <p>Coming Soon!</p>
            </div>
          </div>

          <div className="card comingsoon">
            <div className="card_image">
              <img alt="" src={game3} />
            </div>
            <div className="card_title ">
              <p>Coming Soon!</p>
            </div>
          </div>

          <div className="card 4 comingsoon">
            <div className="card_image">
              <img alt="" src={game4} />
            </div>
            <div className="card_title title-black">
              <p>Coming Soon!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListGame;
