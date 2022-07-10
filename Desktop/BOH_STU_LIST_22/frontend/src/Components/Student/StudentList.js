import React from 'react';

const StudentList = (props) => {
    return (
        <div>
            <ul className='collection with-header'>
                <li className='collection-header'><h4 className='list-header'>Students</h4></li>
                {props.students.map((item) => (
                    <a href='#!' className='collection-item' key={item._id}
                        onClick={props.updateCurrentStudent.bind(this, item)}>{item.firstName} {item.lastName}</a>
                ))}
            </ul>
            <button className='btn remove waves-effect waves-light' type='submit'
                name='action'>Remove student</button>

        </div>

    );
}

export default StudentList;