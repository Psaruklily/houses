import axios from "axios";

export default class HousesService {
    
    async getHouses(param1, param2) {
        return await axios.get(`http://localhost:5000/houses`, {params: {beds: param1, baths: param2}})
            .then(value => value.data);
    }  

    getHouseDetails(id) {
        return axios(`http://localhost:5000/houses/${id}`)
            .then(value => value.data);
    }  
}