# Monitoring SSL/TLS (https) by Google Apps Script

## Setup

1. Create a new script at https://script.google.com/ and copy paste the content of files: `main.gs`, `ssl.gs`, `telegram.gs` to that

2. Set script properties:
![image](https://user-images.githubusercontent.com/16838267/193069013-49fcf526-395f-4f89-ad6c-496d0f063abb.png)
- BOT_TOKEN: Create a telegram bot by BotFather and generate the token
- RECEIVER_TELE_USER_ID: Telegram user id, group id or channel id

## Usage

- Run main function directly (in main.gs)
- Or create trigger

![image](https://user-images.githubusercontent.com/16838267/193070230-d5d37e4c-2edb-4c5c-bd95-fe9874824fac.png)