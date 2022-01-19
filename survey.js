const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output});

const objQuestions = {
  name: "What's  your name? Nicknames are also acceptable:) ",
  favoriteActivity: "What's an activity you like doing? ",
  favoritePodcast: "Do you have a favorite podcast? ",
  favoriteMeal: "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  favoriteFood: "What's your favourite thing to eat for that meal? ",
  favoriteSport: "Which sport is your absolute favourite? ",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at! "
};
const arrQuestions = Object.keys(objQuestions);

const objUser = {
  name: "",
  favoriteActivity: "",
  favoritePodcast: "",
  favoriteSport: "",
  favoriteFood: "",
  favoriteMeal: "",
  superpower: ""
};

const askQuestion = qIndex => {
  if (qIndex < arrQuestions.length) {
    rl.question(objQuestions[arrQuestions[qIndex]], (answer) => {
      objUser[arrQuestions[qIndex]] = answer;
      console.log(`Noted.`)
      askQuestion(qIndex + 1);
    });
  } else {
    console.log(`Thanks again ${objUser.name}`);
    rl.close();
    console.log(`${objUser.name} really enjoys ${objUser.favoriteActivity} almost as much as he enjoys eating ${objUser.favoriteFood} at ${objUser.favoriteMeal}.  You can probalby find him playing ${objUser.favoriteSport} when he isn't eating!`);
  }
};

askQuestion(0);

