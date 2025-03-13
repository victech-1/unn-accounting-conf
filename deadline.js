let targetDate = new Date('2025-03-15T00:00:00').getTime();

// Update the countdown every 1 second
let countdownInterval = setInterval(function() {
  // Get the current time
  let now = new Date().getTime();

  // Calculate the time difference between the target date and current time
  let timeRemaining = targetDate - now;

  // Calculate the number of days, hours, minutes, and seconds remaining
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time in the corresponding fields
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  
  }, 1000);
