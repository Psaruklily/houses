export default class HousesService {

    async getHouses() {
        return await fetch('http://localhost:5000/houses')
            .then(value => value.json())
    }

    async getHouseDetails(id) {
        return await fetch(`http://localhost:5000/houses/${id}`)
            .then(value => value.json())
    }
}