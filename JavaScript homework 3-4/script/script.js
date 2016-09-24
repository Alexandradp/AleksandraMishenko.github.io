var testBuilder = {
  addForm: function(titleText, submitText) {
    var form = document.createElement('form');
    form.setAttribute('action', '/');
    form.setAttribute('id', 'testform');

    var title = document.createElement('h1');
    title.innerHTML = titleText;

    var list = document.createElement('ol');
    list.classList.add('testform__questions');

    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', submitText);

    form.appendChild(title);
    form.appendChild(list);
    form.appendChild(submit);

    document.body.appendChild(form);
  },

  addQuestion: function(questionText) {
    var wrapper = document.createElement('li');
    wrapper.classList.add('testform__question');

    var question = document.createElement('h3');
    question.innerHTML = questionText;

    var answers = document.createElement('ul');
    answers.classList.add('testform__answers');

    wrapper.appendChild(question);
    wrapper.appendChild(answers);

    var list = document.getElementsByClassName('testform__questions')[0];
    list.appendChild(wrapper);
  },

  addAnswer: function(questionIndex, answerText) {
    var questions = document.getElementsByClassName('testform__questions')[0];
    var currentQuestion = questions.children[questionIndex - 1];
    var answersCount = currentQuestion.getElementsByClassName('testform__answers')[0].children.length;

    var wrapper = document.createElement('li');
    wrapper.classList.add('testform__answer');

    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', 'q' + questionIndex + 'a' + (answersCount + 1));

    var label = document.createElement('label');
    label.setAttribute('for', check.getAttribute('id'));
    label.innerHTML = answerText;

    wrapper.appendChild(check);
    wrapper.appendChild(label);
    currentQuestion.getElementsByClassName('testform__answers')[0].appendChild(wrapper);
  }
}

testBuilder.addForm('Тест по программированию', 'Проверить мои результаты');

for (var i = 0; i < 3; i++) {
  testBuilder.addQuestion('Вопрос №' + (i + 1));
  for (var j = 0; j < 3; j++) {
    testBuilder.addAnswer(i + 1, 'Вариант ответа №' + (j + 1))
  }
}
