 const favFoods = async (req, res) => {
    const db = req.app.get('db')
    const {favorite_foods} = req.body
    const userFood = await db.add_favs(favorite_foods)
    const user = userFood[0].favorite_foods
    req.session.user = {user}

    res.status(200).send({message:'Updated Foods', user: req.session.user, loggedIn: true})
}

module.exports ={
    favFoods
}