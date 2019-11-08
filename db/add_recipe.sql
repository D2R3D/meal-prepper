insert into recipes(name, author, category, ingredients, instructions, recipe_img)
values($1,$2,$3,$4,$5,$6)
returning id;