BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values('a', 'a@a.com', 5, '2018-01-01');
INSERT into login (hash, email) values ('a', 'a@a.com');
INSERT into roll (rollData, rollDate, post_id ) values ('Bloody hell i hope this works that be cool', '2018-01-01', 1);
INSERT into roll (rollData, rollDate, post_id ) values ('Bloodhell i hope this works that be cool', '2018-01-02', 1);

 
COMMIT;