# Proposal for Final Project
### Thomas Moulton

## 1. Project Overview
This web application will show the end user pre-configured card decks of the game Magic: The Gathering that they may purchase. The application is intended to fulfill the needs of one of my friends who intends to start a business selling these decks of cards. The user should be able to view all of the decks that the business sells, view details about each deck individually, and go through the process of buying a deck.

The intended user of this application is someone who wants to start getting into the game Magic: The Gathering, so the descriptions should not use a lot of jargon from the game to be accessible to new players. The application itself should look like a polished storefront.

Other pages such as an "About Us" page will also be included in the application, but will likely be very simple.

Even though my friend has not started this business yet, I will refer to him and his colleagues as "the business" or "the client" for simplicity.

## 2. Planned Features and Tasks
### Main Goals
1. The end-user should be able to see multiple decks of cards on one page with a small description of the deck or the name and the price with a picture.
  - The deck information will be stored in a database on the server, which will be fetched by the client through an endpoint of the Express server.
  - The images will be fetched through a static files middleware of the Express server.
2. The end-user should be able to click on one of those decks and see details about the deck, such as what cards the deck includes, the theme of the deck (what color cards, etc.), images of the deck in an image carousel, and the price of the deck. Each page should have a button to add this deck to the cart.
  - This information (besides the pictures) will be stored in a database that will have to be fetched by the client from the Express server.
  - The images will be fetched through a static files middleware of the Express server.
3. The application should have a "Add to Cart" feature that maintains state while the user is on the same single-page application
  - Part of this is that no user accounts are needed. If the user navigates away, then the state of their cart is lost. I think this is the easiest and expected system for a digital storefront.
  - The contents of the cart will just be stored on the client's end. I will have to learn more about how to store state between pages (see section four about new knowledge and open questions)
4. Each page should have an image carousel of images of cards in the deck and pictures of the entire deck that the business has taken
  - I have found some libraries that will do most of this for me, but I will have to read their documentation on how to implement them in my project.
5. The end-user should also be able to sign up for a newsletter by providing their email address and name
  - This data will be stored in a database, so the client will have to make a request to the server to store the information in the database.
6. The web application should also include an "About Us" page that describes the company and founder's details
  - This page will not need to connect to the server (unless I put the newsletter sign-up part here), so it should be simple.
7. The web application should look polished enough to be used in production
  - This will probably take a significant portion of time, since I will need to bugfix and iterate on designs until I find one that the business wants.

### Stretch Goals
1. Since I am unsure how exactly I would implement a payment service such as Stripe or something similar, adding the actual payment is a stretch goal. I don't know if I would have to get an account through one of those services or provide an API key in my assignment that would be potentially problematic to share to the graders for grading this project. That is something I'll have to research.
2. One request of my client is to provide comparable prices on different web storefronts for Magic cards. The client first requested this information to be hardcoded, but if I have time and an api is available, one stretch goal is to have this price update dynamically from competitor's websites.
 
## 3. Scope and Complexity
This is appropriately sized for a final project mainly because of the polish I will need to put into it. The scope of the project itself is comparable to the last assignment, since the main focus of that one was to use React and only make a few pages. For this project, I intend to have that general scope but with enough polish to have the business use this as their official storefront. That level of polish will require me to spend more time bugfixing and making sure the website looks more pleasing. If the main goals listed above do not take enough time, I have stretch goals that would take more time to implement.

## 4. New Knowledge and Open Questions
- I have looked briefly into libraries that may help me with this project, such as libraries that simplify adding an image carousel component that shows multiple images for decks and cards. I would need to read the documentation for the service I choose.
- I'm unsure right now how to keep the cart contents on separate pages of the single-page application. I will need to research how to do that.
- If I get to my stretch goals, I would need to research the apis for competitor's websites and figure out how to implement the payment processor.
