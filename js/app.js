// Array of actors data
const actors = [
  {
    name: "Leonardo DiCaprio",
    image:
      "https://woman.ua/media/cache/14/13/141366cdf6d39c6a9149fdde54f53aca.jpg",
    options: ["Leonardo DiCaprio", "Heath Ledger", "Brad Pitt"],
    correct: "Leonardo DiCaprio",
  },
  {
    name: "Big Brother",
    image:
      "https://cdn.forbes.ru/forbes-static/c/998x924/new/2022/04/445-6269016c556dc.webp",
    options: ["Big Brother", "Hasbulla", "Strawberry Bomb Honestly"],
    correct: "Big Brother",
  },
  {
    name: "Scarlett Johansson",
    image:
      "https://kinoreporter.ru/wp-content/uploads/2019/10/black-widow-scarlett-johansson-marvel-the-avengers-1200x752.jpg",
    options: ["Angelina Jolie", "Scarlett Johansson", "Emma Watson"],
    correct: "Scarlett Johansson",
  },
  {
    name: "David Beckham",
    image:
      "https://sportsheroes.ru/wp-content/uploads/2019/04/Devid-Bekhem-kapitan-i-mnogoletnij-lider-sbornoj-Anglii.jpg",
    options: ["Dustin Gage", "Brad Pitt", "David Beckham"],
    correct: "David Beckham",
  },
  {
    name: "Martin Lawrence",
    image:
      "https://ca-times.brightspotcdn.com/dims4/default/ce8dabc/2147483647/strip/true/crop/3795x2530+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4b%2F1f%2F9cbfae7e446b89ef3a6a501ea206%2Fmartin-lawrence-etv6176-3-2.jpg",
    options: ["Martin Lawrence", "2Pac", "Will Smith"],
    correct: "Martin Lawrence",
  },
  {
    name: "Tupac Shakur",
    image:
      "https://media.pitchfork.com/photos/662968165da473cafeee6644/2:3/w_867,h_1300,c_limit/2Pac-Drake.jpg",
    options: ["Notorious B.I.G", "Tupac Shakur", "Eazy E"],
    correct: "Tupac Shakur",
  },
  {
    name: "Ryan Gosling",
    image:
      "https://starnote.ru/media/starnote/v2/uploads/2015/01/29/foto-rajan-gosling-na-semkah-trillera-slavnye-parni/ryan-gosling-3_blog.jpg",
    options: ["Ryan Gosserv", "Ryan Gosling", "Deadpool"],
    correct: "Ryan Gosling",
  },
  {
    name: "Alan",
    image: "https://b1.filmpro.ru/c/143690.700xp.jpg",
    options: ["Tony", "Alan", "George Clooney"],
    correct: "Alan",
  },
  {
    name: "Christopher Mintz-Plasse",
    image:
      "https://steamuserimages-a.akamaihd.net/ugc/2476495466522613326/13A264827AD7E9EA5BE7D1619EF6E445E1B7296C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    options: ["Matrang", "Christopher Mintz-Plasse", "Mactr"],
    correct: "Christopher Mintz-Plasse",
  },
];

let currentActorIndex = 0;

function loadNextActor() {
  if (currentActorIndex >= actors.length) {
    document.getElementById("result").innerHTML =
      "Congratulations, you completed the quiz!";
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
    resultDiv.innerHTML = `Correct! It's ${actor.name} &#10004;`;
    currentActorIndex++;
    setTimeout(loadNextActor, 2000); // Delay before next question
  } else {
    resultDiv.innerHTML = "Wrong, try again!";
    resultDiv.classList.add("wrong");
  }
}

// Load the first actor
loadNextActor();
