DROP TABLE IF EXISTS list_items CASCADE;

CREATE TABLE list_items (
  id SERIAL PRIMARY KEY NOT NULL,
  entry VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);