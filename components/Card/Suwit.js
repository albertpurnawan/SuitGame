/* eslint-disable @next/next/no-img-element */
import { Button } from "reactstrap";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { winAction, drawAction, loseAction } from "../../redux/actions";

const Suwit = () => {
  const icon = ["Rock", "Paper", "Scissor"];
  const [click, setClick] = useState(true);
  const [mulai, setMulai] = useState(false);
  const [textChoose, setTextChoose] = useState("...");
  const [textComChoose, setTextComChoose] = useState("...");
  const [batu, setBatu] = useState(false);
  const [kertas, setKertas] = useState(false);
  const [gunting, setGunting] = useState(false);
  const [batuComp, setBatuComp] = useState(false);
  const [kertasComp, setKertasComp] = useState(false);
  const [guntingComp, setGuntingComp] = useState(false);
  const [result, setResult] = useState("");
  const [textResult, setTextResult] = useState("hint1");
  const [comScore, setComScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);
  const [round, setRound] = useState(1);
  const [match, setMatch] = useState(1);
  const [nextButton, setNextButton] = useState(false);
  const [nextMatch, setNextMatch] = useState("Next Match");
  const [winBord, setWinBoard] = useState("result-begin");
  const [playAgain, setPlayAgain] = useState("Play");
  const [play, setPlay] = useState(true);
  const [textFinal, setTextFinal] = useState("");
  const gambarbatu = "/images/suwit/batu.png";
  const gambarkertas = "/images/suwit/kertas.png";
  const gambargunting = "/images/suwit/gunting.png";
  const refresh = "/images/suwit/refresh.png";

  const username = useSelector((state) => state.newUser);
  const dispatch = useDispatch();

  const [loseScore, setLoseScore] = useState(0);
  const [winScore, setWinScore] = useState(0);
  const [drawFinalScore, setDrawFinalScore] = useState(0);

  useEffect(() => {
    dispatch(winAction(winScore));
    dispatch(drawAction(drawFinalScore));
    dispatch(loseAction(loseScore));
  });

  const handleMulai = () => {
    setMulai(true);
  };

  const step1 = () => {
    setResult("suwit");
    setTextResult("hint2");
  };

  const handleBatu = () => {
    setBatu(true);
    setKertas(false);
    setGunting(false);
    setTextChoose("Rock");
    step1();
  };

  const handleKertas = () => {
    setBatu(false);
    setKertas(true);
    setGunting(false);
    setTextChoose("Paper");
    step1();
  };

  const handleGunting = () => {
    setBatu(false);
    setKertas(false);
    setGunting(true);
    setTextChoose("Scissor");
    step1();
  };

  const handleExit = () => {
    setMulai(false);
  };

  const reset = () => {
    setBatu(false);
    setKertas(false);
    setGunting(false);
    setBatuComp(false);
    setKertasComp(false);
    setGuntingComp(false);
    setClick(true);
  };

  const handleReset = () => {
    reset();
    setTextResult("hint1");
    setResult("");
    setTextChoose("...");
    setTextComChoose("...");
    setNextButton(false);
    handleGame();
  };

  const resetScore = () => {
    setComScore(0);
    setPlayerScore(0);
    setDrawScore(0);
  };

  const handleGame = () => {
    setMatch(match + 1);
    if (match === 2) {
      setNextMatch("Game Over");
    }
    if (match === 3) {
      setNextMatch("Next Match");
      setMatch(1);
      setMulai(false);
      setRound(round + 1);
      if (playerScore > comScore) {
        setWinScore(winScore + 1);
        setWinBoard("result-player-win");
        setTextFinal("win");
      } else if (playerScore < comScore) {
        setLoseScore(loseScore + 1);
        setWinBoard("result-com-win");
        setTextFinal("lose");
      } else {
        setDrawFinalScore(drawFinalScore + 1);
        setWinBoard("result-draw");
        setTextFinal("draw");
      }
    }
    setPlayAgain("Play again!");
    setPlay(false);
    resetScore();
  };

  const suit = (choice) => {
    const playerChoice = choice;
    const randomNumber = Math.floor(Math.random() * 3);
    const comChoice = icon[randomNumber];
    setTextComChoose(comChoice);
    if (comChoice === "Rock") {
      setBatuComp(true);
      setKertasComp(false);
      setGuntingComp(false);
    } else if (comChoice === "Paper") {
      setBatuComp(false);
      setKertasComp(true);
      setGuntingComp(false);
    } else {
      setBatuComp(false);
      setKertasComp(false);
      setGuntingComp(true);
    }

    const resultMatch = winChecking(playerChoice, comChoice);
    if (resultMatch === "result-com-win") {
      setComScore(comScore + 1);
    } else if (resultMatch === "result-player-win") {
      setPlayerScore(playerScore + 1);
    } else {
      setDrawScore(drawScore + 1);
    }
    console.log("result:", resultMatch);
    setResult(resultMatch);
    setTextResult(resultMatch);
  };

  function winChecking(playerChoice, comChoice) {
    console.log("player:", playerChoice);
    console.log("com:", comChoice);
    if (playerChoice === comChoice) return "result-draw";
    if (playerChoice === "Rock" && comChoice === "Paper") {
      return "result-com-win";
    }
    if (playerChoice === "Rock" && comChoice === "Scissor") {
      return "result-player-win";
    }
    if (playerChoice === "Paper" && comChoice === "Rock") {
      return "result-player-win";
    }
    if (playerChoice === "Paper" && comChoice === "Scissor") {
      return "result-player-win";
    }
    if (playerChoice === "Scissor" && comChoice === "Rock") {
      return "result-player-win";
    }
    if (playerChoice === "Scissor" && comChoice === "Paper") {
      return "result-player-win";
    }
  }

  const disableClik = () => {
    return "";
  };

  const leaderBoard = () => {
    return (
      <div className="suwit-row suwit-border-top">
        <div className="suwit-column">
          <p className="suwit-h3 " style={{ textTransform: "capitalize" }}>
            {username}
            {"'s "}Score:
          </p>
          <div id="player_score">{winScore}</div>
        </div>
        <div className="suwit-column-mid">
          <p className="suwit-h3">Draw:</p>
          <div id="draw_score">{drawFinalScore}</div>
        </div>
        <div className="suwit-column">
          <p className="suwit-h3">Computer{"'"}s Score:</p>
          <div id="com_score">{loseScore}</div>
        </div>
      </div>
    );
  };

  const handleStatus = (hasil) => {
    switch (hasil) {
      case "hint1":
        return (
          <p className="suwit-h3 text-secondary">
            <i>Choose your weapon!</i>
          </p>
        );
        break;
      case "hint2":
        return (
          <p className="suwit-h3 text-secondary">
            <i>Already sure? SUWIT now!</i>
          </p>
        );
        break;
      case "result-com-win":
        return (
          <p className="suwit-h3 text-danger">
            <i>
              Oh no! you{"'"}re lose in match {match}
            </i>
          </p>
        );
        break;
      case "result-draw":
        return (
          <p className="suwit-h3 text-secondary">
            <i>Greaat! you get draw in match {match}</i>
          </p>
        );
        break;
      case "result-player-win":
        return (
          <p className="suwit-h3 text-success">
            <i>Excelent! you won in match {match}</i>
          </p>
        );
        break;

      default:
    }
  };

  const handleTextFinal = (hasil) => {
    switch (hasil) {
      case "win":
        return (
          <p className="suwit-h3 text-success">
            Congratulation, Winner! &#128526;
          </p>
        );
        break;
      case "lose":
        return (
          <p className="suwit-h3 text-danger">Uppsss! you lose &#128546;</p>
        );
        break;
      case "draw":
        return (
          <p className="suwit-h3 text-secondary">
            Not bad, maybe next time &#128556;
          </p>
        );
        break;
      default:
        return (
          <div className="suwit-h3 text-abu" style={{ fontSize: 14 }}>
            You are given 3 chance to choose between rock, paper, or scissor.
            Player with the highest score are the winner. Good luck!
          </div>
        );
    }
  };
  const handleSuwit = () => {
    setNextButton(true);
    suit(textChoose);
    setClick(false);
  };

  const handleResult = (hasil) => {
    switch (hasil) {
      case "suwit":
        return (
          <div onClick={handleSuwit} className="result-suwit">
            <h3>SUWIT!</h3>
          </div>
        );
        break;
      case "result-player-win":
        return (
          <div className="result-suwit win">
            <h3>You Win! &#128513;</h3>
          </div>
        );
        break;
      case "result-com-win":
        return (
          <div className="result-suwit lose">
            <h3>You Lose! &#128557;</h3>
          </div>
        );
        break;
      case "result-draw":
        return (
          <div className="result-suwit draw">
            <h3>Draw! &#128556;</h3>
          </div>
        );
        break;
      default:
        return (
          <>
            <div className="result-begin"></div>
          </>
        );
    }
  };

  const initialGame = () => {
    return (
      <>
        <div className="suwit-game suwit-border">
          <div className="suwit-row">
            <div className="suwit-column"></div>
            <div className="suwit-column-mid">
              <b>
                <h1 className="text-abu2"> Suwit Game</h1>
              </b>
            </div>
            <div className="suwit-column"></div>
          </div>
          <div className="suwit-row">
            <div className="suwit-column">
              <p className="suwit-h1" style={{ textTransform: "capitalize" }}>
                <u>{username}</u>
              </p>
            </div>
            <div className="suwit-column-mid">{handleTextFinal(textFinal)}</div>
            <div className="suwit-column">
              <p className="suwit-h1">
                <u>Computer</u>
              </p>
            </div>
          </div>

          <div className="suwit-row">
            <div className="suwit-column">
              <img
                id="batu"
                src={gambarbatu}
                alt=""
                className="tangan-disable"
              />
            </div>
            <div className="suwit-column-mid"></div>
            <div className="suwit-column">
              <img
                id="batu-comp"
                src={gambarbatu}
                alt=""
                className="tangan-disable"
              />
            </div>
          </div>
          <div className="suwit-row">
            <div className="suwit-column">
              <img
                id="kertas"
                src={gambarkertas}
                alt=""
                className="tangan-disable"
              />
            </div>
            <div className="suwit-column-mid">
              <div id="versus-h1" className={winBord}></div>
            </div>

            <div className="suwit-column">
              <img
                id="kertas-comp"
                src={gambarkertas}
                alt=""
                className="tangan-disable"
              />
            </div>
          </div>
          <div className="suwit-row">
            <div className="suwit-column">
              <img
                id="gunting"
                src={gambargunting}
                alt=""
                className="tangan-disable"
              />
            </div>
            <div className="suwit-column-mid">
              {play ? (
                <div className="btn-arrow-2">
                  <h3 style={{ fontSize: 18 }} className>
                    Start Game
                  </h3>
                  <a className="fas fa-chevron-down"></a>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="suwit-column">
              <img
                id="gunting-comp"
                src={gambargunting}
                alt=""
                className="tangan-disable"
              />
            </div>
          </div>
          <div className="suwit-row-2">
            <Button className="btn-play" onClick={handleMulai}>
              {playAgain}
            </Button>
          </div>
          {leaderBoard()}
        </div>
      </>
    );
  };

  const playGame = () => {
    return (
      <>
        <div className="suwit-game suwit-border">
          <div className="suwit-row">
            <div className="suwit-column"></div>
            <div className="suwit-column-mid">{handleStatus(textResult)}</div>
            <div className="suwit-column"></div>
          </div>
          <div className="suwit-row">
            <div className="suwit-column">
              <p className="suwit-h1" style={{ textTransform: "capitalize" }}>
                <u>{username}</u> ({playerScore})
              </p>
            </div>
            <div className="suwit-column-mid">
              <p className="suwit-h1">
                Round: {round} | Match: {match}/3
              </p>
            </div>
            <div className="suwit-column">
              <p className="suwit-h1">
                <u>Computer</u> ({comScore})
              </p>
            </div>
          </div>

          <div className="suwit-row">
            <div className="suwit-column">
              <img
                id="batu"
                src={gambarbatu}
                alt=""
                className={batu ? "tangan active-pulse" : "tangan"}
                onClick={click ? handleBatu : disableClik}
              />
            </div>
            <div className="suwit-column-mid"></div>
            <div className="suwit-column">
              <img
                id="batu-comp"
                src={gambarbatu}
                alt=""
                className={
                  batuComp
                    ? "tangan active-pulse not-allow"
                    : "tangan not-allow"
                }
              />
            </div>
          </div>
          <div className="suwit-row">
            <div className="suwit-column">
              <img
                id="kertas"
                src={gambarkertas}
                alt=""
                className={kertas ? "tangan active-pulse" : "tangan"}
                onClick={click ? handleKertas : disableClik}
              />
            </div>
            <div className="suwit-column-mid">{handleResult(result)}</div>

            <div className="suwit-column">
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
            <div className="suwit-column">
              <img
                id="gunting"
                src={gambargunting}
                alt=""
                className={gunting ? "tangan active-pulse" : "tangan"}
                onClick={click ? handleGunting : disableClik}
              />
            </div>
            <div className="suwit-column-mid">
              {nextButton ? (
                <div className="btn-arrow-2">
                  <h3 style={{ fontSize: 18 }}>{nextMatch}</h3>
                  <a className="fas fa-chevron-down"></a>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="suwit-column">
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

          <div className="suwit-row mb-2">
            <div className="suwit-column">
              <p className="suwit-h3 text-primary">
                <i>
                  You choose {'"'}
                  {textChoose}
                  {'"'}
                </i>
              </p>
            </div>
            <div className="suwit-column-mid">
              {nextButton ? (
                <img
                  id="reset"
                  src={refresh}
                  alt=""
                  className="suwit-refresh"
                  onClick={handleReset}
                />
              ) : (
                <Button color="danger" onClick={handleExit}>
                  Exit
                </Button>
              )}
            </div>
            <div className="suwit-column">
              <p className="suwit-h3 text-danger">
                <i>
                  Enemy choose {'"'}
                  {textComChoose}
                  {'"'}
                </i>
              </p>
            </div>
          </div>
          {leaderBoard()}
        </div>
      </>
    );
  };

  return (
    <section id="suwit">
      <div className="body-suwit">{mulai ? playGame() : initialGame()}</div>
    </section>
  );
};

export default Suwit;
