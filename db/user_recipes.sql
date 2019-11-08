select * from recipe_list 
join recipes on recipe_list.recipe_id = recipes.id
where user_id =$1
