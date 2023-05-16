// our service will call the rest api with the help of axios
import axios from "axios";

//define rest endpoint base url
const CUSTOMER_API_BASE_URL="http://localhost:8080/api/v1/customers";

class CustomerService{
    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }
}

// we export obj of this class so that we can directly use it inside a component
export default new CustomerService();