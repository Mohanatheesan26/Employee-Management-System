import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class AddEmployee extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             firstname:'',
             lastname:'',
             emailid:'',
        }

        this.changefirstnameHandler=this.changefirstnameHandler.bind(this);
        this.changelastnameHandler=this.changelastnameHandler.bind(this);
        this.changeemailidHandler=this.changeemailidHandler.bind(this);
        this.saveEmployee=this.saveEmployee.bind(this);
    }
    
    changefirstnameHandler=(event)=>{
        this.setState({firstname: event.target.value});
    }

    changelastnameHandler=(event)=>{
        this.setState({lastname: event.target.value});
    }

    changeemailidHandler=(event)=>{
        this.setState({emailid: event.target.value});
    }

    saveEmployee = (e) =>{
        e.preventDefault();
        let employee = {firstname: this.state.firstname, lastname:this.state.lastname, emailid: this.state.emailid};
        console.log('employee =>' + JSON.stringify(employee));
        
        EmployeeService.AddEmployee(employee)
        // .then(Response =>{
        //     this.probs.history.push('/employees');
        // })
        // .catch(error => {
        //     console.log(error.response)
        //   });
    }

    cancel(){
        this.props.history.push('/employees');
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mt-4">
                                        <label className="form-label">First Name : </label>
                                        <input placeholder="First Name" name="firstname" className="form-control" 
                                        value={this.state.firstname} onChange={this.changefirstnameHandler}/>
                                    </div>
                                    <div className="form-group mt-4">
                                        <label className="form-label">Last Name : </label>
                                        <input placeholder="Last Name" name="lastname" className="form-control" 
                                        value={this.state.lastname} onChange={this.changelastnameHandler}/>
                                    </div>
                                    <div className="form-group mt-4">
                                        <label className="form-label">Email ID :</label>
                                        <input placeholder="Email ID" name="emailid" className="form-control" 
                                        value={this.state.emailid} onChange={this.changeemailidHandler}/>
                                    </div>
                                    <div className="col-self-center my-4">
                                        <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}} >Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
