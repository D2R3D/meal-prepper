 const favFoods = (req, res) => {
    const id = req.session.userid
    const db = req.app.get('db')
    const {favorite_foods} = req.body
    db.add_favs([favorite_foods, id]).then(() => {
        res.status(200).send('Favorite Foods Updated')
    }).catch(err => console.log(err))


 }

const addRecipe = (req,res)=> {
    const id = req.session.userid
    const {name, author, category, ingredients, instructions} = req.body
    const db = req.app.get('db')
    db.add_recipe([name, author, category, ingredients, instructions, id]).then(() => {
        res.status(200).send('recipe added')
    }).catch(err => console.log(err))
    


}

module.exports ={
    favFoods,
    addRecipe
}