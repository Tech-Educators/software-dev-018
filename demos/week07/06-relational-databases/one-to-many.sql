-- ONE TO ONE

CREATE TABLE users_app (
  id INT PRIMARY KEY GENERATED ALWAYS AS identity,
  name TEXT
);

CREATE TABLE user_profiles (
  id  INT PRIMARY KEY GENERATED ALWAYS AS identity,
  -- we cannot insert into this table unless the ID we give here is a record in the users_app table.
  -- the user_id colum in this table has to have a mtching value to the id column in the users_app table
  user_id INT references users_app(id),
  bio TEXT
);

-- each user can only have one profile, and each profile only works with one user.

INSERT INTO users_app (name) VALUES ('SAM'), ('Angelica')

INSERT INTO user_profiles (user_id, bio) VALUES (1, 'hello world'), (2, 'hello class')

-- selecting just the name from one table: 
SELECT id, name FROM  users_app WHERE id = 1;
SELECT * FROM users_app WHERE id = 2;

-- I want to make a select from mutlple tables

SELECT users_app.name, user_profiles.bio
FROM users_app
INNER JOIN user_profiles ON users_app.id = user_profiles.user_id

-- lets make a user that doesn't have a user_profiles

INSERT INTO users_app (name) VALUES ('Aishah')

-- Aishah doesn't show up because she doesn't have a profile, and an innner join only shows the matching sections
-- doing a left join says 'give me everything from users_app and the matching records from user_profiles'
SELECT users_app.name, user_profiles.bio
FROM users_app
LEFT JOIN user_profiles ON users_app.id = user_profiles.user_id