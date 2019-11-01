update users 
set favorite_foods = $1
where users.id = $1;
