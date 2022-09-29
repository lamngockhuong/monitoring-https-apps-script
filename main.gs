// Demo sites get from https://badssl.com/
const websites = [
  'https://expired.badssl.com/',
  'https://sha256.badssl.com/',
  'https://upgrade.badssl.com/',
  'https://self-signed.badssl.com/',
  'https://client.badssl.com/',
  'https://null.badssl.com/',
];

const receiver = PropertiesService.getScriptProperties().getProperty('RECEIVER_TELE_USER_ID');
const botToken = PropertiesService.getScriptProperties().getProperty('BOT_TOKEN');

const checkSSL = (telegram, site) => {
  const valid = isValidSSL(site);
  Logger.log(`[${new Date()}] Check SSL for ${site}: ${valid}`);
  if (!valid) {
    telegram.sendRichHTMLToTelegram(receiver, `⚠️ ${site} is invalid HTTPS`);
  }
};

const main = () => {
  const telegram = new Telegram(botToken);
  websites.forEach(site => {
    checkSSL(telegram, site);
  });
};

