let disableClick = false;

function disableMultipleClick() {
  disableClick = true;
}

function enableMultipleClick() {
  disableClick = false;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { disableClick, sleep, disableMultipleClick, enableMultipleClick };
