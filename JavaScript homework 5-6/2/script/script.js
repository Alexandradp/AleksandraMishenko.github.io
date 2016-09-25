function StopWatch() {
  var self = this;
  self.hours = 0;
  self.minutes = 0;
  self.seconds = 0;
  self.milliseconds = 0;
  self.lastHours = 0;
  self.lastMinutes = 0;
  self.lastSeconds = 0;
  self.lastMilliseconds = 0;
  self.timer = {};
  self.working = false;

  self.hoursNode = document.querySelector('.stopwatch__hours');
  self.minutesNode = document.querySelector('.stopwatch__minutes');
  self.secondsNode = document.querySelector('.stopwatch__seconds');
  self.millisecondsNode = document.querySelector('.stopwatch__milliseconds');
  self.resultsNode = document.querySelector('.stopwatch__results');
  self.startButton = document.querySelector('button[name="Start"]');
  self.resetButton = document.querySelector('button[name="Reset"]');
  self.splitButton = document.querySelector('button[name="Split"]');

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
      var milliseconds;
      if (self.milliseconds < self.lastMilliseconds) {
        milliseconds = self.milliseconds + 1000 - self.lastMilliseconds;
        self.lastSeconds++;
      } else {
        milliseconds = self.milliseconds - self.lastMilliseconds;
      }
      var seconds;
      if (self.seconds < self.lastSeconds) {
        seconds = self.seconds + 60 - self.lastSeconds;
        self.lastMinutes++;
      } else {
        seconds = self.seconds - self.lastSeconds;
      }
      var minutes;
      if (self.minutes < self.lastMinutes) {
        minutes = self.minutes + 60 - self.lastMinutes;
        self.lastHours++;
      } else {
        minutes = self.minutes - self.lastMinutes;
      }
      var hours = self.hours - self.lastHours;
      var result = document.createElement('li');
      result.innerHTML = '<b>Stop&nbsp;&nbsp;</b>' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
      result.classList.add('list-group-item');
      self.resultsNode.appendChild(result);
      self.startButton.innerHTML = 'Start';
      self.startButton.classList.remove('btn-warning');
      self.startButton.classList.add('btn-success');
      self.lastHours = self.hours;
      self.lastMinutes = self.minutes;
      self.lastSeconds = self.seconds;
      self.lastMilliseconds = self.milliseconds;
      self.splitButton.setAttribute('disabled', 'disabled');
    } else {
      self.timer = setInterval(self.run, 5); // браузер не может выполнять функцию с интервалом 1 мс, поэтому 5
      self.startButton.innerHTML = 'Stop';
      self.startButton.classList.remove('btn-success');
      self.startButton.classList.add('btn-warning');
      self.splitButton.removeAttribute('disabled');
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
    self.splitButton.setAttribute('disabled', 'disabled');
    self.resultsNode.innerHTML = '';
    self.lastHours = 0;
    self.lastMinutes = 0;
    self.lastSeconds = 0;
    self.lastMilliseconds = 0;
  };

  self.split = function() {
    var lastSeconds = self.lastSeconds; //чтобы не изменять последние значения инкрементом
    var lastMinutes = self.lastMinutes;
    var lastHours = self.lastHours;
    var milliseconds;
    if (self.milliseconds < self.lastMilliseconds) {
      milliseconds = self.milliseconds + 1000 - self.lastMilliseconds;
      lastSeconds++;
    } else {
      milliseconds = self.milliseconds - self.lastMilliseconds;
    }
    var seconds;
    if (self.seconds < self.lastSeconds) {
      seconds = self.seconds + 60 - lastSeconds;
      lastMinutes++;
    } else {
      seconds = self.seconds - lastSeconds;
    }
    var minutes;
    if (self.minutes < self.lastMinutes) {
      minutes = self.minutes + 60 - lastMinutes;
      lastHours++;
    } else {
      minutes = self.minutes - lastMinutes;
    }
    var hours = self.hours - lastHours;
    var result = document.createElement('li');
    result.innerHTML = '<b>Split&nbsp;</b>' + hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
    result.classList.add('list-group-item');
    self.resultsNode.appendChild(result);
  }

  self.startButton.addEventListener('click', self.start);
  self.resetButton.addEventListener('click', self.reset);
  self.splitButton.addEventListener('click', self.split);
}

var stopwatch = new StopWatch();
