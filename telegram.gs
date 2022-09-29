const TELEGRAM_URL = "https://api.telegram.org/bot";

class Telegram {
  constructor(botToken) {
    this.botToken = botToken;
  }

  getTelegramGroupsAndChannels() {
    const TELEGRAM_API = `https://api.telegram.org/bot${this.botToken}/getUpdates`;

    const response = UrlFetchApp.fetch(TELEGRAM_API);

    const { ok, result = [] } = JSON.parse(response);

    if (!ok) {
      throw new Error('Please check your API token again!');
    }

    if (result.length === 0) {
      throw new Error('Please add this bot to a Telegram group or channel!');
    }

    const telegramBotList = {};

    result.forEach((e) => {
      const { message, my_chat_member, channel_post } = e;
      const { chat } = { ...message, ...my_chat_member, ...channel_post };
      const { title, id, username } = chat;
      telegramBotList[id] = { chat_id: `${id}`, title: title || username };
    });

    return Object.values(telegramBotList);
  }

  getMe() {
    const url = `${TELEGRAM_URL}${this.botToken}/getMe`;
    const response = UrlFetchApp.fetch(url);

    return response.getContentText();
  }

  sendMessageToTelegram(chatId, message) {
    const TELEGRAM_API = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

    const text = encodeURIComponent(message);

    const url = `${TELEGRAM_API}?chat_id=${chatId}&text=${text}`;

    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });

    const { ok, description } = JSON.parse(response);

    if (ok !== true) {
      Logger.log(`Error: ${description}`);
    }
  }

  sendRichHTMLToTelegram(chatId, message) {
    const TELEGRAM_API = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

    // Escape the input text
    const text = encodeURIComponent(message);

    const url = `${TELEGRAM_API}?chat_id=${chatId}&text=${text}&parse_mode=HTML`;

    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });

    const { ok, description } = JSON.parse(response);

    if (ok !== true) {
      Logger.log(`Error: ${description}`);
    }
  }
}
