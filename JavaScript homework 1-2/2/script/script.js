var names = [];
var user;
var isInNames = false;

for (var i = 0; i < 5; i++) {
  names[i] = prompt('Введите имя #' + (i + 1))
}
user = prompt('Введите своё имя');

for (var j = 0; j < names.length; j++) {
  if (names[j] == user) {
    isInNames = true;
  }
}
if (isInNames) {
  alert(user + ', вы успешно вошли.');
} else {
  alert('Ошибка входа!');
}
