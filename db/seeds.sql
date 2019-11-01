create table users (
id serial primary key,
username varchar(20),
email text,
password text,
profile_pic text,
favorite_foods text
)

create table recipes(
id serial primary key,
name text,
author text,
category text,
ingredients text,
instructions text
)