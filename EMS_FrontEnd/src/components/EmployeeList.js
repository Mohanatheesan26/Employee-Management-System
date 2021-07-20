import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class EmployeeList extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
        this.addEmployee=this.addEmployee.bind(this);
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div>
                    <button className="btn btn-secondary" onClick={this.addEmployee}> Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Activity</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.state.employees.map(
                                    employees =>
                                    <tr key= {employees.id}>
                                        <td>{employees.first_name}</td>
                                        <td>{employees.last_name}</td>
                                        <td>{employees.email_Id}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default EmployeeList
