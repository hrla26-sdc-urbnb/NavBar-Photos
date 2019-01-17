--for postgres
DROP DATABASE IF EXISTS urbnb;
CREATE DATABASE urbnb;
-- use urbnb;
-- \c urbnb;
-- CREATE TABLE photos (
--     id SERIAL,
--     listing_id INT, 
--     img_url text
-- );

-- LOAD DATA LOCAL INFILE './data.csv' INTO TABLE photos FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n'  ignore 1 lines;
\COPY photos(listing_id, img_url) FROM '/Users/jingjing/Desktop/data.csv' DELIMITER ',' CSV HEADER;
-- \COPY photos(listing_id, img_url) FROM '/home/ubuntu/data.csv' DELIMITER ',' CSV HEADER;
CREATE INDEX listing_id_index
ON photos (listing_id);

-- ALTER TABLE photos DROP COLUMN id;
ALTER TABLE photos ADD COLUMN id SERIAL;
ALTER TABLE photos ADD PRIMARY KEY (id);



--for mongo db
-- mongo (get in to the shell);
--use urbnb;
--mongoimport -d urbnb -c photos --type csv --file /Users/jingjing/Desktop/NavBar-Photos/db/data.csv --headerline;
-- db.photos.find({listing_id:2000000}).explain("executionStats");
-- db.photos.createIndex({listing_id:1});
