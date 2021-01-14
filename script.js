import { agentElements } from './agentElements.js';

const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultText = document.getElementById('result');

const allGameIcons = document.querySelectorAll('.far');
const playerContainer = document.querySelectorAll('.player');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let state = { player: '', computer: '' };

// Reset all 'selected' icons
function resetSelectedIcons() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// set player and computer choice
function setChoice(agent, choice) {
  agentElements[agent].icons[choice].classList.add('selected');
  agentElements[agent].choiceEl.textContent = ` --- ${choice}'`;
  state[agent] = choice;
}

// Random compuer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    setChoice('computer', 'rock');
  } else if (computerChoiceNumber <= 0.4) {
    setChoice('computer', 'paper');
  } else if (computerChoiceNumber <= 0.6) {
    setChoice('computer', 'scissors');
  } else if (computerChoiceNumber <= 0.8) {
    setChoice('computer', 'lizard');
  } else {
    setChoice('computer', 'spock');
  }
}

// Call functions to process turn
function checkResult() {
  resetSelectedIcons();
  computerRandomChoice();
}

// Passing player selection value and styling our icons
function select(e) {
  // only pick an icon if the clicked element is an icon tag
  if (e.target.tagName === 'I') {
    checkResult();
    const playerChoiceIcon = e.target.id;

    //Add 'selected' styling & playerchoice
    switch (playerChoiceIcon) {
      case 'playerRock':
        setChoice('player', 'rock');
        break;
      case 'playerPaper':
        setChoice('player', 'paper');
        break;
      case 'playerScissors':
        setChoice('player', 'scissors');
        break;
      case 'playerLizard':
        setChoice('player', 'lizard');
        break;
      case 'playerSpock':
        setChoice('player', 'spock');
        break;
      default:
        break;
    }
    console.log('Player: ', state.player);
    console.log('Computer: ', state.computer);
  }
}

player.addEventListener('click', select);
