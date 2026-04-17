CREATE TABLE IF NOT EXISTS decks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    description TEXT NOT NULL,
    card_list TEXT NOT NULL,
    price MONEY NOT NULL,
    competitor_price MONEY
);
