CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    author TEXT,
    url TEXT NOT NULL,
    title TEXT,
	likes INTEGER DEFAULT 0
);


INSERT INTO blogs (author, url, title ) VALUES ('First Author', 'abc.com', 'Hello');
INSERT INTO blogs (author, url, title ) VALUES ('Second Author', 'xyz.net', 'Hello Again');
