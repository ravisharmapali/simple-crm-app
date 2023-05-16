import React, { Component } from 'react';
import CustomerService from '../services/CustomerService';

class ListCustomerComponent extends Component {
    
    constructor(props){
        super(props)
        this.state={
            // creating customers array in state
            // we will make a rest api call and store the response into customers array

            customers:[]

        }

        
        this.addCustomer=this.addCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomers().then((res)=>{
            this.setState({customers:res.data});
            // this will store the res data into customers array
        });
    }

    //addCustomer() method 
    //whenever we click on Add Customer button we should navigate to CreateCustomerComponent
//react router maintan a history obj which is having all the mapping of the routings
    // react router passes histry obj to each route as a props
    
    addCustomer(){
        this.props.history.push('/add-customer');
    }
    


    render() {
        return (
            <div>
                <h2 className='text-center'>Customers List</h2>

                <div className=''>
                    <button className='btn btn-primary' onClick={this.addCustomer}>Add Customer</button>
                </div>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Customer First Name</th>
                                <th>Customer Last Name</th>
                                <th>Customer Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* code to dynamically display table rows */}
                            {
                                //map is a ES6 feature
                                this.state.customers.map(
                                    customer=>
                                    <tr key={customer.id}>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.lastName}</td>
                                        <td>{customer.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCustomerComponent;