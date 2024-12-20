import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate, } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees,setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
       
        
    },[])

    function getAllEmployees(){
        listEmployees().then((Response) => {
            setEmployees(Response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }
   

    return (
        <div className='container-fluid mt-4'>

            <h2 className='text-center mb-4'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <div className='row justify-content-center'>
                <div className='col-10'>
                    <div className='table-responsive'>


                        <table className='table table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th style={{ width: "10%" }}>Employee ID</th>
                                    <th style={{ width: "10%" }}>Employee First Name</th>
                                    <th style={{ width: "10%" }}>Employee Last Name</th>
                                    <th style={{ width: "10%" }}>Employee Email Id</th>
                                    <th style={{ width: "10%" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
