insert into users (username, email, password, favorite_foods, profile_pic)
values ($1,$2,$3,$4,$5)
returning username, profile_pic;