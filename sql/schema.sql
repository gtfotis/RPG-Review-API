CREATE TABLE games (
    id serial PRIMARY KEY,
    name text NOT NULL,
    slug text,
    genre text,
    release_date, date,
    cover_art text,
    screenshot_1 text,
    screenshot_2 text,
    screenshot_3 text,
    game_description varchar (5000)
);

CREATE TABLE review (
    id serial PRIMARY KEY,
    text_review varchar (10000),
    number_review integer,
    game_id int FOREIGN KEY REFERENCES games(id)
);