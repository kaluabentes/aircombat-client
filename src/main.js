import Game from "./core/Game";

function main() {
  try {
    new Game();
  } catch (error) {
    console.log(`[error] ${error.message}`);
  }
}

document.addEventListener("DOMContentLoaded", main);
