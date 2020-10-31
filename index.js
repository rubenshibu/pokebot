const TelegramBot = require("node-telegram-bot-api");
let request = require("request");

const port = process.env.PORT || 443,
  host = "0.0.0.0", // probably this change is not required
  externalUrl = "https://hakkuna.herokuapp.com",
  token = process.env.TOKEN || "644513397:AAFMIsWyGB4QeQre_SVQBwXyoi6NQHJAnzI",
  bot = new TelegramBot(token, {
    webHook: {
      port: port,
      host: host,
    },
  });
bot.setWebHook(externalUrl + ":443/bot" + token);

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  console.log(msg.text);
  if (msg.text == "hi" || msg.text == "Hi") bot.sendMessage(chatId, "hi");
  else if (msg.text == "how are you" || msg.text == "How are you")
    bot.sendMessage(chatId, "fine,what about you");
  else if (
    msg.text == "JOKES" ||
    msg.text == "Jokes" ||
    msg.text == "any jokes" ||
    msg.text == "Any jokes" ||
    msg.text == "Jokes of anyone"
  )
    bot.sendMessage(
      chatId,
      "https://pothi.com/pothi/book/natarajan-s-jokes-unlimited"
    );

});
