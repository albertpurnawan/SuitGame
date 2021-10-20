/* eslint-disable @next/next/no-img-element */
import { Button } from "reactstrap";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { winAction, drawAction, loseAction } from "../../redux/actions";

const Suwit = () => {
  const crown = "/images/suwit/crown.png";
  const gambarbatu = "/images/suwit/batu.png";
  const gambarkertas = "/images/suwit/kertas.png";
  const gambargunting = "/images/suwit/gunting.png";
  const refresh = "/images/suwit/refresh.png";

  const username = useSelector((state) => state.newUser);
  const dispatch = useDispatch();

  const icon = ["batu", "kertas", "gunting"];
  const [winBoard, setWinBoard] = useState("result-begin");
  const [textComp, setTextComp] = useState(false);
  const [textPlayer, setTextPlayer] = useState(false);
  const [textDraw, setTextDraw] = useState(false);
  const [batu, setBatu] = useState(false);
  const [kertas, setKertas] = useState(false);
  const [gunting, setGunting] = useState(false);
  const [active, setActive] = useState(false);
  const [batuComp, setBatuComp] = useState(false);
  const [kertasComp, setKertasComp] = useState(false);
  const [guntingComp, setGuntingComp] = useState(false);
  const [crownComp, setCrownComp] = useState(false);
  const [crownPlayer, setCrownPlayer] = useState(false);
  const [comScore, setComScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);
  const [counter, setCounter] = useState(0);
  const [ronde, setRonde] = useState(1);
  const [loseScore, setLoseScore] = useState(0);
  const [winScore, setWinScore] = useState(0);
  const [drawFinalScore, setDrawFinalScore] = useState(0);

  useEffect(() => {
    dispatch(winAction(winScore));
    dispatch(drawAction(drawFinalScore));
    dispatch(loseAction(loseScore));
  });

  const reset = () => {
    setBatu(false);
    setKertas(false);
    setGunting(false);
    setBatuComp(false);
    setKertasComp(false);
    setGuntingComp(false);
    setTextComp(false);
    setTextDraw(false);
    setTextPlayer(false);
    setComScore(0);
    setPlayerScore(0);
    setDrawScore(0);
  };

  const handleBatu = () => {
    setBatu(true);
    setKertas(false);
    setGunting(false);
    suit("batu");
    handleGame();
  };

  const handleKertas = () => {
    setBatu(false);
    setKertas(true);
    setGunting(false);
    suit("kertas");
    handleGame();
  };

  const handleGunting = () => {
    setBatu(false);
    setKertas(false);
    setGunting(true);
    suit("gunting");
    handleGame();
  };

  const handleReset = () => {
    reset();
    setWinBoard("result-begin");
  };

  const handlePlay = () => {
    setActive(true);
    setWinBoard("result-begin");
  };

  const handleGame = () => {
    setCounter(counter + 1);
    if (counter == 2) {
      setCounter(0);
      setActive(false);
      reset();
      setRonde(ronde + 1);
      if (playerScore > comScore) {
        setWinScore(winScore + 1);
        setWinBoard("result-player-win");
        setTextComp(false);
        setTextDraw(false);
        setTextPlayer(true);
        setCrownComp(false);
        setCrownPlayer(true);
      } else if (playerScore < comScore) {
        setLoseScore(loseScore + 1);
        setWinBoard("result-com-win");
        setTextComp(true);
        setTextDraw(false);
        setTextPlayer(false);
        setCrownComp(true);
        setCrownPlayer(false);
      } else {
        setDrawFinalScore(drawFinalScore + 1);
        setWinBoard("result-draw");
        setTextComp(false);
        setTextDraw(true);
        setTextPlayer(false);
        setCrownComp(false);
        setCrownPlayer(false);
      }
    }
  };

  const suit = (choice) => {
    const playerChoice = choice;
    const randomNumber = Math.floor(Math.random() * 3);
    const comChoice = icon[randomNumber];
    if (comChoice === "batu") {
      setBatuComp(true);
      setKertasComp(false);
      setGuntingComp(false);
    } else if (comChoice === "kertas") {
      setBatuComp(false);
      setKertasComp(true);
      setGuntingComp(false);
    } else {
      setBatuComp(false);
      setKertasComp(false);
      setGuntingComp(true);
    }

    const result = winChecking(playerChoice, comChoice);
    if (result === "result-com-win") {
      setComScore(comScore + 1);
    } else if (result === "result-player-win") {
      setPlayerScore(playerScore + 1);
    } else {
      setDrawScore(drawScore + 1);
    }

    setWinBoard(result);
  };

  function winChecking(playerChoice, comChoice) {
    if (playerChoice === comChoice) return "result-draw";

    if (playerChoice === "batu" && comChoice === "kertas") {
      return "result-com-win";
    }

    if (playerChoice === "batu" && comChoice === "gunting") {
      return "result-player-win";
    }

    if (playerChoice === "kertas" && comChoice === "batu") {
      return "result-player-win";
    }

    if (playerChoice === "kertas" && comChoice === "gunting") {
      return "result-player-win";
    }

    if (playerChoice === "gunting" && comChoice === "batu") {
      return "result-player-win";
    }

    if (playerChoice === "gunting" && comChoice === "kertas") {
      return "result-player-win";
    }
  }

  const initialGame = () => {
    return (
      <>
        <div className="suwit-row">
          <div className="suwit-column-left">
            <img src={crown} alt="" className="hide-crown"></img>
            <p className="suwit-h1" style={{ textTransform: "capitalize" }}>
              <u>{username}</u>
            </p>
          </div>
          <div className="suwit-column-right">
            <img src={crown} alt="" className="hide-crown"></img>
            <p className="suwit-h1">
              <u>Computer</u>
            </p>
          </div>
        </div>
        <div className="suwit-row">
          <div className="suwit-column-left">
            <img id="batu" src={gambarbatu} alt="" className="tangan-disable" />
          </div>
          <div className="suwit-column-right">
            <img
              id="batu-comp"
              src={gambarbatu}
              alt=""
              className="tangan-disable"
            />
          </div>
        </div>
        <div className="suwit-row">
          <div className="suwit-column-left">
            <img
              id="kertas"
              src={gambarkertas}
              alt=""
              className="tangan-disable"
            />
          </div>
          <div className="suwit-column-mid">
            <div id="versus-h1" className={winBoard}></div>
          </div>
          <div className="suwit-column-right">
            <img
              id="kertas-comp"
              src={gambarkertas}
              alt=""
              className="tangan-disable"
            />
          </div>
        </div>
        <div className="suwit-row">
          <div className="suwit-column-left">
            <img
              id="gunting"
              src={gambargunting}
              alt=""
              className="tangan-disable"
            />
          </div>
          <div className="suwit-column-right">
            <img
              id="gunting-comp"
              src={gambargunting}
              alt=""
              className="tangan-disable"
            />
          </div>
        </div>
        <div className="suwit-row-2">
          <Button className="btn-play" onClick={handlePlay}>
            Play
          </Button>
        </div>
      </>
    );
  };

  const startGame = () => {
    return (
      <>
        <div className="suwit-row">
          <div className="suwit-column-left">
            <img
              src={crown}
              alt=""
              className={crownPlayer ? "show-crown" : "hide-crown"}
            ></img>
            <p className="suwit-h1" style={{ textTransform: "capitalize" }}>
              <u>{username}</u>
              <span> ({playerScore})</span>
            </p>
          </div>
          <div className="suwit-column-mid">
            <img src={crown} alt="" className="show-crown"></img>
            <p className="suwit-h1">Round: {ronde}</p>
          </div>
          <div className="suwit-column-right">
            <img
              src={crown}
              alt=""
              className={crownComp ? "show-crown" : "hide-crown"}
            ></img>
            <p className="suwit-h1">
              <u>Computer</u>
              <span> ({comScore})</span>
            </p>
          </div>
        </div>
        <div className="suwit-row">
          <div className="suwit-column-left">
            <img
              id="batu"
              src={gambarbatu}
              alt=""
              className={batu ? "tangan active-pulse" : "tangan"}
              onClick={handleBatu}
            />
          </div>
          <div className="suwit-column-right">
            <img
              id="batu-comp"
              src={gambarbatu}
              alt=""
              className={
                batuComp ? "tangan active-pulse not-allow" : "tangan not-allow"
              }
            />
          </div>
        </div>
        <div className="suwit-row">
          <div className="suwit-column-left">
            <img
              id="kertas"
              src={gambarkertas}
              alt=""
              className={kertas ? "tangan active-pulse" : "tangan"}
              onClick={handleKertas}
            />
          </div>
          <div className="suwit-column-mid">
            <div id="versus-h1" className={winBoard}></div>
          </div>
          <div className="suwit-column-right">
            <img
              id="kertas-comp"
              src={gambarkertas}
              alt=""
              className={
                kertasComp
                  ? "tangan active-pulse not-allow"
                  : "tangan not-allow"
              }
            />
          </div>
        </div>
        <div className="suwit-row">
          <div className="suwit-column-left">
            <img
              id="gunting"
              src={gambargunting}
              alt=""
              className={gunting ? "tangan active-pulse" : "tangan"}
              onClick={handleGunting}
            />
          </div>
          <div className="suwit-column-right">
            <img
              id="gunting-comp"
              src={gambargunting}
              alt=""
              className={
                guntingComp
                  ? "tangan active-pulse not-allow"
                  : "tangan not-allow"
              }
            />
          </div>
        </div>
        <div className="suwit-row-2">
          <img
            id="reset"
            src={refresh}
            alt=""
            className="suwit-refresh"
            onClick={handleReset}
          />
        </div>
      </>
    );
  };

  return (
    <section id="suwit">
      <div className="body-profile">
        <div className="suwit-game">
          {active ? startGame() : initialGame()}
          <div className="suwit-row suwit-border">
            <div className="suwit-column-left">
              <p className="suwit-h3 " style={{ textTransform: "capitalize" }}>
                {username}
                {"'s "}Score:
              </p>
              <div className={textPlayer ? "text-red" : ""} id="player_score">
                {winScore}
              </div>
            </div>
            <div className="suwit-column-mid">
              <p className="suwit-h3">Draw:</p>
              <div className={textDraw ? "text-red" : ""} id="draw_score">
                {drawFinalScore}
              </div>
            </div>
            <div className="suwit-column-right">
              <p className="suwit-h3">Computer{"'"}s Score:</p>
              <div className={textComp ? "text-red" : ""} id="com_score">
                {loseScore}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suwit;
