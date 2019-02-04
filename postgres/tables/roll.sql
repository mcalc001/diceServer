BEGIN TRANSACTION;


CREATE TABLE roll (
    roll_id serial PRIMARY KEY,
    post_id INTEGER, 
    rolldata text ,
    rolldate TIMESTAMP NOT NULL
    );


 

COMMIT; 

