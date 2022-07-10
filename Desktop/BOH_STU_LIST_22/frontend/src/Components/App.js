import React from 'react';
import axios from 'axios';
import './App.css';
import StudentList from './Student/StudentList'
import StudentSingle from './Student/StudentSingle'
import StudentForm from './Student/StudentForm'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      currentStudent: {},
    }

    this.updateCurrentStudent = this.updateCurrentStudent.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/students';

    axios.get(url)
      .then((Response) => {
        this.setState({
          students: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //FUNCTION to update current student
  updateCurrentStudent(item) {
    this.setState({
      currentStudent: item,
    })
  }
  render() {
    return (
      <div className="container-fluid">

        <div className='row'>

          <nav>
            <div className="nav-wrapper amber darken-3">
              <a href="/" className="brand-logo">Beauty of Hebrew - Student Portal</a>
            </div>
          </nav>

        </div>

        <div className='row'>
          <div className='col s3'><StudentList students={this.state.students}
            updateCurrentStudent={this.updateCurrentStudent} />
          </div>
          <div className='col s9'><StudentSingle student={this.state.currentStudent} /></div>
        </div>

        <div className='row'>
          <div className='col s12'><StudentForm /></div>

        </div>

      </div>
    );
  }
}

export default App;
