export const messageAction = (pesan) => {
  return {
    type: "PESANBARU",
    payload: pesan,
  };
};

export const userAction = (newUser) => {
  return {
    type: "NEWUSER",
    payload: newUser,
  };
};

export const winAction = (score) => {
  return {
    type: "WIN",
    payload: score,
  };
};

export const loseAction = (score) => {
  return {
    type: "LOSE",
    payload: score,
  };
};

export const drawAction = (score) => {
  return {
    type: "DRAW",
    payload: score,
  };
};
