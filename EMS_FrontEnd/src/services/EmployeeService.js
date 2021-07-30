import axios from "axios";

const Employee_API_Base_URL = "http://localhost:8080/api/v1/employee";

class EmployeeService {
    getEmployees(){
        return axios.get(Employee_API_Base_URL);
    }

    AddEmployee(emlployee){
        return axios.post(Employee_API_Base_URL,emlployee,{headers:{"Content-Type" : "application/json"}});
    }

    getEmployeeById(employeeId){
        return axios.get(Employee_API_Base_URL + '/' + employeeId);
    }
}

export default new EmployeeService()