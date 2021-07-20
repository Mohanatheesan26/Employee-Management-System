import axios from "axios";

const Employee_API_Base_URL = "http://localhost:8080/api/v1/employee";

class EmployeeService {
    getEmployees(){
        return axios.get(Employee_API_Base_URL);
    }
}

export default new EmployeeService()