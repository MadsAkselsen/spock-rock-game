export const agentElements = {
  player: {
    icons: {
      rock: document.getElementById('playerRock'),
      paper: document.getElementById('playerPaper'),
      scissors: document.getElementById('playerScissors'),
      lizard: document.getElementById('playerLizard'),
      spock: document.getElementById('playerSpock'),
    },
    choiceEl: document.getElementById('playerChoice'),
    playerScoreEl: document.getElementById('playerScore'),
  },
  computer: {
    icons: {
      rock: document.getElementById('computerRock'),
      paper: document.getElementById('computerPaper'),
      scissors: document.getElementById('computerScissors'),
      lizard: document.getElementById('computerLizard'),
      spock: document.getElementById('computerSpock'),
    },
    choiceEl: document.getElementById('computerChoice'),
    computerScoreEl: document.getElementById('computerScore'),
  },
};
