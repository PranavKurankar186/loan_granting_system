
import axios from 'axios'


const URL="http://localhost:8080/admin"

class ApiAdmin
{

    fetchProductsByName(searchName) {
        return axios.get(URL + '/searchbyname/' + searchName);
    }
}

export default new ApiAdmin();
