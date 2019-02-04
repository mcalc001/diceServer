-- deploy fresh datatype tables
\i '/docker-entrypoint-initdb.d/tables/users.sql'

\i '/docker-entrypoint-initdb.d/tables/login.sql'

\i '/docker-entrypoint-initdb.d/tables/roll.sql'

\i '/docker-entrypoint-initdb.d/seed/seed.sql'

