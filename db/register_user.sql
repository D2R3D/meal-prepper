insert into users (username, email, password, profile_pic)
values ($1,$2,$3,$4)
returning username, profile_pic;