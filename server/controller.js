
const getHouses = (req, res) => {
    console.log('hit get all houses')
    
    const db = req.app.get('db')
    db.get_houses().then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        console.log(error)
    })
}

const addHouse = (req, res) => {

    console.log('hit add house')
    const { name, address, city, state, zip, img, mortgage, rent } = req.body
    
    const db = req.app.get('db')
    db.add_house([name, address, city, state, zip, img, mortgage, rent]).then( () => {
        res.status(200).send('all good')
    })
    .catch( error => {
        console.log(error)
    })

}

const deleteHouse = (req, res) => {

    console.log('hit delete house')
    const { id } = req.params

    const db = req.app.get('db')
    db.delete_house([id]).then( response => {
        res.status(200).send('All good')
    })
}

module.exports = {
    getHouses,
    addHouse,
    deleteHouse
}