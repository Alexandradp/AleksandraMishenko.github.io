function StopWatch() {
  var self = this;
  self.hours = 0;
  self.minutes = 0;
  self.seconds = 0;
  self.milliseconds = 0;
  self.timer = {};
  self.working = false;

  self.hoursNode = document.querySelector('.stopwatch__hours');
  self.minutesNode = document.querySelector('.stopwatch__minutes');
  self.secondsNode = document.querySelector('.stopwatch__seconds');
  self.millisecondsNode = document.querySelector('.stopwatch__milliseconds');
  self.startButton = document.querySelector('button[name="Start"]');
  self.resetButton = document.querySelector('button[name="Reset"]');

  self.updateNode = function(node, value) {
    if (node.innerHTML.length === 3) {
      if (value.toString().length === 3) {
        node.innerHTML = value;
      } else if (value.toString().length === 2) {
        node.innerHTML = '0' + value;
      } else {
        node.innerHTML = '00' + value;
      }
    } else {
      if (value.toString().length === 2) {
        node.innerHTML = value;
      } else {
        node.innerHTML = '0' + value;
      }
    }
  };

  self.run = function() {
    self.milliseconds += 5;
    if (self.milliseconds === 1000) {
      self.milliseconds = 0;
      self.seconds++;
      if (self.seconds === 60) {
        self.minutes++;
        self.seconds = 0;
        if (self.minutes === 60) {
          self.hours++;
          self.minutes = 0;
          self.updateNode(self.hoursNode, self.hours);
        }
        self.updateNode(self.minutesNode, self.minutes);
      }
      self.updateNode(self.secondsNode, self.seconds);
    }
    self.updateNode(self.millisecondsNode, self.milliseconds);
  };

  self.start = function() {
    if (self.working) {
      clearInterval(self.timer);
      self.startButton.innerHTML = 'Resume';
      self.startButton.classList.remove('btn-warning');
      self.startButton.classList.add('btn-success');
    } else {
      self.timer = setInterval(self.run, 5); // браузер не может выполнять функцию с интервалом 1 мс, поэтому 5
      self.startButton.innerHTML = 'Pause';
      self.startButton.classList.remove('btn-success');
      self.startButton.classList.add('btn-warning');
    }
    self.working = !self.working;
    self.resetButton.removeAttribute('disabled');
  };

  self.reset = function() {
    self.hours = 0;
    self.minutes = 0;
    self.seconds = 0;
    self.milliseconds = 0;
    self.updateNode(self.hoursNode, self.hours);
    self.updateNode(self.minutesNode, self.minutes);
    self.updateNode(self.secondsNode, self.seconds);
    self.updateNode(self.millisecondsNode, self.milliseconds);
    if (self.working) {
      clearInterval(self.timer);
      self.working = false;
    }
    self.startButton.innerHTML = 'Start';
    self.startButton.classList.remove('btn-warning');
    self.startButton.classList.add('btn-success');
    self.resetButton.setAttribute('disabled', 'disabled');
  };

  self.startButton.addEventListener('click', self.start);
  self.resetButton.addEventListener('click', self.reset);
}

var stopwatch = new StopWatch();
