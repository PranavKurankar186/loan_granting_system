import axios from 'axios'


const URL="http://localhost:8080/user"

class UserFunctions
{

    login(UserEmailPass) 
    {
       return axios.post(URL+'/signin',UserEmailPass)
    }   

    registerParent(User)
    {
        return axios.post(URL+'/signup',User)
    }

    registerAdmin(User)
    {
        return axios.post(URL+'/adminregister',User)
    }

    changePassword(UserEmailPass)
    {
        return axios.post(URL+'/changepassword',UserEmailPass)
    }

    updateprofile(UserEmailPass)
    {
        return axios.put(URL+'/2',UserEmailPass)
    }
}

export default new UserFunctions();
