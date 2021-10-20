const UrlSwitch = () => {
  const link = "server";

  switch (link) {
    case "server":
      return "https://suit-game.herokuapp.com";
    case "local":
      return "http://localhost:8000";
    default:
      return "http://localhost:8000";
  }
};

export default UrlSwitch;
