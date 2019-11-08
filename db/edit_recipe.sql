update recipes
set name = $1, author =$2, category =$3, instructions =$4, ingredients =$5, recipe_img = $6
where recipes.id = $7
