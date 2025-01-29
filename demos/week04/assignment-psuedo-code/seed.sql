CREATE TABLE messages (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author TEXT,
    message TEXT
);

INSERT INTO messages (author, message) VALUES
('Frankie', 'Woah cool carpets!'),
('Sam', 'The bulbs were very load'),
('Angelica', 'My room has TWO mini fridges but both were empty :('),
('Jez', 'I really enjoyed the stairwell');