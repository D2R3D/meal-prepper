 const favFoods = (req, res) => {
    const id = req.session.user.id
    const db = req.app.get('db')
    const {favorite_foods} = req.body
    db.add_favs([favorite_foods, id]).then(() => {
        res.status(200).send('Favorite Foods Updated')
    }).catch(err => console.log(err))


 }

const submitRecipe = (req,res)=> {
    const {name, author, category, ingredients, instructions, recipe_img} = req.body
    const db = req.app.get('db')
    db.add_recipe([name, author, category, ingredients, instructions, recipe_img]).then((response) => { 
        const [{id}] = response
        const userid = req.session.user.id
        db.recipe_list.insert([{user_id: userid, recipe_id: id}])
        res.status(200).send('recipe added')
    }).catch(err => console.log(err))
    


}

const allRecipes = (req, res) => {
    const db = req.app.get('db')
    db.get_all_recipes().then(recipes => {
        res.status(200).send(recipes)
    })
}

// const dashboardRecipes = (req, res) => {
//     const {id} = req.session.user
//     const db = req.app.get('db')
//     db.get_dashboard(id).then(recipes => {
//         res.status(200).send(recipes)
//     })
// }

const userRecipes =(req, res) => {
    const {id} = req.session.user
    const db = req.app.get('db')
    db.user_recipes(id).then(recipes => {
        res.status(200).send(recipes)
    })
}

const removeRecipe = (req, res) => {
    const db = req.app.get('db')
    const {id} =req.params
    db.remove_recipe([id])
    db.remove_recipe2([id]).then(() => {res.status(200).send('Deleted')})
    .catch((err) => {console.log(err)})
}

const editRecipe = (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {name, author, category, instructions, ingredients, recipe_img} = req.body
    db.edit_recipe([name, author, category, instructions, ingredients, recipe_img, id]).then(() =>{
        res.status(200).send('recipe updated')
    })
}

module.exports ={
    favFoods,
    submitRecipe,
    allRecipes,
    // dashboardRecipes,
    userRecipes,
    removeRecipe,
    editRecipe
}