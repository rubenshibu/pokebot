const TelegramBot = require('node-telegram-bot-api');
let request = require('request');


const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = 'https://hakkuna.herokuapp.com',
    token = process.env.TOKEN || '644513397:AAFMIsWyGB4QeQre_SVQBwXyoi6NQHJAnzI',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text)
    if (msg.text == 'hi' || msg.text =='Hi')
    bot.sendMessage(chatId, 'hi');    
      else if(msg.text =='how are you'||msg.text=='How are you')
        bot.sendMessage(chatId,'fine,what about you')
    else if(msg.text == 'JOKES' || msg.text == 'Jokes' || msg.text =='any jokes' || msg.text=='Any jokes' ||msg.text == 'Jokes of anyone')
        bot.sendMessage(chatId,'https://pothi.com/pothi/book/natarajan-s-jokes-unlimited')
    else if(msg.text == 'Porn' || msg.text == 'porn')
        bot.sendMessage(chatId,'sorry you are mistaken, nothing regarded to porn is available here,pls leave')
    else if(msg.text == 'play game' || msg.text=='Play Game'|| msg.text == 'PLAY GAME' || msg.text == 'Play game')
        bot.sendMessage(chatId,'select any 1. ONLINE 2. PLAY NOW')
    
    
    if(msg.text == '1'){
                
                
                
                             let score = 0;
let lives = 2;


// Define your ghosts here

// replace this comment with your four ghosts setup as objects
// Draw the screen functionality
function drawScreen() {
  clearScreen();
  setTimeout(() => {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log(`Score: ${score}     Lives: ${lives}`);
}

function displayMenu() {
  console.log('\n\nSelect Option:\n');  // each \n creates a new line
  console.log('(d) Eat Dot');
  console.log('(q) Quit');
}

function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\nWaka Waka :v '); // :v is the Pac-Man emoji.
}


// Menu Options
function eatDot() {
  console.log('\nChomp!');
  score += 10;
}
// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case 'd':
      eatDot();
      break;
    default:
      console.log('\nInvalid Command!');
  }
}


//
// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', (key) => {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 300); // The command prompt will flash a message for 300 milliseoncds before it re-draws the screen. You can adjust the 300 number to increase this.
});

// Player Quits
process.on('exit', () => {
  console.log('\n\nGame Over!\n');
});          
                
                
                }
    
    
    
    else if(msg.text == 'Thank you' || msg.text == 'THANK YOU' || msg.text == 'Thank You')
        bot.sendMessage(chatId,'YOU ARE ALWAYS WELCOME')
    else
        bot.sendMessage(chatId,'something went wrong, spelling mistake or type correctly')
  });
