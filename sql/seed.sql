INSERT INTO games (name, slug, genre, release_date, cover_art)
    VALUES ('Bravely Default II', 'bravely_default_2', 'RPG', '2021-02-26', './images/bravely_default_2.jpg', './images/bravely_default_2_screenshot_1.jpg', './images/bravely_default_2_screenshot_2.jpg', './images/bravely_default_2_screenshot_3.jpg'),
    ('Persona 5', 'persona_5', 'RPG', '2016-09-15', './images/persona_5.jpg', './images/persona_5_screenshot_1.jpg', './images/persona_5_screenshot_2.jpg', './images/persona_5_screenshot_3.jpg'),
    ('Final Fantasy VII Remake', 'final_fantasy_7r', 'Action RPG', '2020-04-10', './images/final_fantasy_7r.jpg', './images/final_fantasy_7r_screenshot_1.jpg', './images/final_fantasy_7r_screenshot_2.jpg', './images/final_fantasy_7r_screenshot_3.jpg');

INSERT INTO review (text_review, number_review, game_id)
    VALUES ('This will be replaced with a review on Bravely Default II', 9, 1),
    ('This will be replaced with a review on Persona 5', 10, 2),
    ('This will be replaced with a review on Final Fantasy VII Remake', 9, 3)