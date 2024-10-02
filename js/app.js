// Массив данных с актерами
const actors = [
  {
    name: "Леонардо ДиКаприо",
    image:
      "https://woman.ua/media/cache/14/13/141366cdf6d39c6a9149fdde54f53aca.jpg",
    options: ["Леонардо ДиКаприо", "Хит Леджер", "Брэд Питт"],
    correct: "Леонардо ДиКаприо",
  },
  {
    name: "Большой брат",
    image:
      "https://cdn.forbes.ru/forbes-static/c/998x924/new/2022/04/445-6269016c556dc.webp",
    options: ["Большой брат", "Хасбулла", "Клубника бомба честно говоря"],
    correct: "Большой брат",
  },
  {
    name: "Скарлетт Йоханссон",
    image:
      "https://kinoreporter.ru/wp-content/uploads/2019/10/black-widow-scarlett-johansson-marvel-the-avengers-1200x752.jpg",
    options: ["Анжелина Джоли", "Скарлетт Йоханссон", "Эмма Уотсон"],
    correct: "Скарлетт Йоханссон",
  },
  {
    name: "Дэвид Бэкхем",
    image:
      "https://sportsheroes.ru/wp-content/uploads/2019/04/Devid-Bekhem-kapitan-i-mnogoletnij-lider-sbornoj-Anglii.jpg",
    options: ["Дастин Гэйджи", "Брэд Питт", "Дэвид Бэкхем"],
    correct: "Дэвид Бэкхем",
  },
  {
    name: "Мартин Лоуренс",
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/ce8dabc/2147483647/strip/true/crop/3795x2530+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4b%2F1f%2F9cbfae7e446b89ef3a6a501ea206%2Fmartin-lawrence-etv6176-3-2.jpg",
    options: ["Мартин Лоуренс", "2Pac", "Уилл Смитт"],
    correct: "Мартин Лоуренс",
  },
  {
    name: "Тупак Омару Шакур",
    image:
      "https://media.pitchfork.com/photos/662968165da473cafeee6644/2:3/w_867,h_1300,c_limit/2Pac-Drake.jpg",
    options: ["Notorius B.I.G", "Тупак Омару Шакур", "Eazy E"],
    correct: "Тупак Омару Шакур",
  },
  {
    name: "Раян Гослинг",
    image:
      "https://starnote.ru/media/starnote/v2/uploads/2015/01/29/foto-rajan-gosling-na-semkah-trillera-slavnye-parni/ryan-gosling-3_blog.jpg",
    options: ["Раян Госуслуг", "Раян Гослинг", "Дэдпул"],
    correct: "Раян Гослинг",
  },
  {
    name: "Алан",
    image: "https://b1.filmpro.ru/c/143690.700xp.jpg",
    options: ["Тони", "Алан", "Джордж Клуни"],
    correct: "Алан",
  },
  {
    name: "Кристофер Минц-Пласс",
    image:
      "https://steamuserimages-a.akamaihd.net/ugc/2476495466522613326/13A264827AD7E9EA5BE7D1619EF6E445E1B7296C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    options: ["Матранг", "Кристофер Минц-Пласс", "Мактр"],
    correct: "Кристофер Минц-Пласс",
  },
];

let currentActorIndex = 0;

function loadNextActor() {
  if (currentActorIndex >= actors.length) {
    document.getElementById("result").innerHTML =
      "Поздравляем, вы завершили квиз!";
    document.getElementById("quiz-form").style.display = "none";
    return;
  }

  const actor = actors[currentActorIndex];
  document.getElementById("actor-image").src = actor.image;
  document.getElementById("option1").textContent = actor.options[0];
  document.getElementById("option2").textContent = actor.options[1];
  document.getElementById("option3").textContent = actor.options[2];
  document.getElementById("result").innerHTML = "";
}

function checkAnswer() {
  const form = document.getElementById("quiz-form");
  const selectedOption = form.elements["actor"].value;
  const resultDiv = document.getElementById("result");

  const actor = actors[currentActorIndex];
  const selectedText = document.querySelector(`input[name="actor"]:checked`)
    .nextElementSibling.textContent;

  if (selectedText === actor.correct) {
    resultDiv.innerHTML = `Верно! Это ${actor.name} &#10004;`;
    currentActorIndex++;
    setTimeout(loadNextActor, 2000); // Задержка перед следующим вопросом
  } else {
    resultDiv.innerHTML = "Неправильно, попробуйте еще раз!";
    resultDiv.classList.add("wrong");
  }
}

// Загрузка первого актера
loadNextActor();
