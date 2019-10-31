update users 
set favorite_foods = $1
where users.id = $2;
returning favorite_foods;