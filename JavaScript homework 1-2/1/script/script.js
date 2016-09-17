function pow() {
  var number = +prompt('Введите число');
  if (isNaN(number)) {
    alert('Неверный ввод');
    return;
  }

  var exp = +prompt('Введите степень');
  if (isNaN(exp)) {
    alert('Неверный ввод');
    return;
  }

  var result;

  if (exp === 0) {
    result = 1;
  } else if (exp === 1) {
    result = number;
  } else {
    result = number;
    for (var i = 2; i <= Math.abs(exp); i++) {
      result *= number;
    }
  }

  if (exp < 0) {
    result = 1 / result;
  }

  console.log(number + '^' + exp + ' =', result);
}

pow();
