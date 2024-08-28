# Messenger app

https://messenger-app-alpha-rosy.vercel.app

This is a simple realtime messenger app.

## Run Locally

git clone https://github.com/PetarJovanovic/messenger-app.

Go to the project directory open it and enter messenger-app.

Before you can run app locally you will have to create .env file and put the following variables there:

`CONVEX_DEPLOYMENT=dev:calculating-weasel-930`\
`NEXT_PUBLIC_CONVEX_URL=https://calculating-weasel-930.convex.cloud`\
`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_d29ya2luZy10b3VjYW4tMjAuY2xlcmsuYWNjb3VudHMuZGV2JA`\
`CLERK_SECRET_KEY=sk_test_EKPQBQehTCSEHrykZZIJXdIalYk8q70k5ym7fhSJlI`\
`CLERK_WEBHOOK_SECRET=whsec_Y6ZBvU55Cj0RNm+Iw53Y/FgHbQ9v/wh0`

After you setup .env file you will need to run:

`npm i` and after that\
`npx convex dev` to connect to database (keep it open and running in separate terminal), and than\
`npm run dev` for app to run locally

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Live app

To be able to use app. You will need to login with your gmail account.
To start chat with friends, you will need to send a friend request to existing user in a database.

## Features

- Sending a friend request
- Accepting/Denying friend request
- Removing a friend from friends list
- Starting individual or group chat
- Leaving and/or deleting chat groups and individual chats
- Markers for unread messages and friend requests
- See if your message has been seen/read and time of when message was sent
