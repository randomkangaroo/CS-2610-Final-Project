# Final Project

## Description
This web application will show the end user pre-configured card decks of the game Magic: The Gathering that they may purchase. The application is intended to fulfill the needs of one of my friends who intends to start a business selling these decks of cards. The user should be able to view all of the decks that the business sells, view details about each deck individually, and go through the process of buying a deck.

## Installation
First, set up a PostgreSQL database with a name, user, and password. Add this information following the example `.env` file in `./.env.example`

Install all node modules with the command
```bash
npm install
```

Run the migrations on the database next with the command
```bash
npm run migrate
```

## Usage
Run both the client and server at the same time in two terminal windows by running the commands
```bash
npm run server-dev
```
and in the other window,
```bash
npm run client-dev
```

Navigate to the specified URL in a browser of your choice from the window running the `server-dev` script to run the application.

## Roadmap
See the [Final Project Proposal](./Proposal_Thomas_Moulton.md)

### Planed To-Do Items
- [ ] Add integration with payment service, such as Stripe
  - Note that I started doing this, but it will take a lot of time to fully implement it
- [ ] Add pages for Terms of Service and Privacy policies
- [ ] Add some sort of admin portal to edit or add deck information instead of editing the database directly
- [ ] Add reviews from customers

## Author
This project is made by Thomas Moulton

