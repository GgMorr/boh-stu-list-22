import React from 'react';
import axios from 'axios';

class StudentForm extends React.Component {
   submitStudent(event) {
    event.preventDefault();

    axios.post('http://localhost:4000/students', {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
    })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
   }
    
    render() {
        return (
            <div className="row">
                <h3 className='center'>Add a new student</h3>
               
               <div className='container'>
                <form className="form-align col s12" onSubmit={this.submitStudent.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref="firstName" type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref="lastName" type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone" ref="phone" type="text" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref="email" type="text" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="hebrewName" ref="hebrewName" type="text" />
                            <label htmlFor="hebrewName">Hebrew Name</label>
                        </div>
                        
                    </div>
                    <button className='btn waves-effect waves-light' type='submit'
                    name='action'>Add student</button>
                    
                </form>
                </div>
                
            </div>

        );

    }
}

export default StudentForm; 