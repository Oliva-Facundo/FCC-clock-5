$(document).ready(function () {
  let countdown;
  let sessionLength = 25;
  let breakLength = 5;
  let seconds = sessionLength * 60;
  let isRunning = false;
  const audio = $('#beep')[0]

  function formatTime(timeInSeconds) {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = timeInSeconds % 60;
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? "0" + secs : secs}`;
  }

  function timeLeft() {
    $('#time-left').text(formatTime(seconds))
  }

  // Sessions controls
  $("#session-decrement").click(() => {
    if (sessionLength > 1) {
      sessionLength--;
      seconds = sessionLength * 60;
      $("#session-length").text(sessionLength);
      timeLeft();
    }
  });
  $("#session-increment").click(() => {
    if (sessionLength < 60) {
      sessionLength++;
      seconds = sessionLength * 60;
      $("#session-length").text(sessionLength);
      timeLeft();
    }
  });

  // Breaks controls
  $("#break-decrement").click(() => {
    if (breakLength > 1) {
      breakLength--;
      $("#break-length").text(breakLength);
      timeLeft();
    }
  });
  $("#break-increment").click(() => {
    if (breakLength < 60) {
      breakLength++;
      $("#break-length").text(breakLength);
      timeLeft();
    }
  });

  function startBreak() {
    $("#timer-label").text("Break");
    seconds = breakLength * 60;
    countdown = setInterval(tempo, 1000);
    isRunning = true;
    timeLeft();
  }

  function startSession() {
    $("#timer-label").text("Session");
    seconds = sessionLength * 60;
    isRunning = true;
    countdown = setInterval(tempo, 1000)
    timeLeft();
  }

  function tempo() {
    seconds--;
    if (seconds < 0) {
      audio.play()
      clearInterval(countdown);
      if ($("#timer-label").text() === "Session") {
        startBreak()
      } else {
        startSession()
      }
      return;
    }
    timeLeft();
  }

  // Start, Stop and Reset
  function startTimer() {
    if (isRunning) {
      clearInterval(countdown);
      isRunning = false;
      $("#start_stop").text("Play");
    } else {
      countdown = setInterval(tempo, 1000);
      isRunning = true;
      $("#start_stop").text("Pause");
    }
    timeLeft();
  }

  function reset() {
    clearInterval(countdown);
    isRunning = false;
    sessionLength = 25;
    breakLength = 5;
    seconds = sessionLength * 60;
    audio.pause()
    audio.currentTime = 0
    $("#session-length").text(sessionLength);
    $("#break-length").text(breakLength);
    $('#time-left').text(formatTime(seconds));
    $('#timer-label').text('Session')
    $('#start_stop').text('Play')
  }

  $("#start_stop").click(startTimer);
  $("#reset").click(reset);
});
