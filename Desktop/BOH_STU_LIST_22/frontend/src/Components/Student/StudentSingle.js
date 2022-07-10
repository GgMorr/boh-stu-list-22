import React from 'react';

const StudentSingle = (props) => {
    return (
        <div className="row">
            <div className="col s12 m11 z-depth-5">
        
                <div className="card">
                    <div className="card-image">
                        <img src="hebrewWritings.jpg" alt='Scroll with Hebrew words' />
                        <span className="card-title">{props.student.firstName} {props.student.lastName}</span>
                    </div>
                    
                    <div className="card-content">
                        <p>Phone: {props.student.phone} - Email: {props.student.email}</p>
                        <p>Hebrew Name: {props.student.hebrewName}</p>
                        <p>"The Basics": {props.student.theBasicsCompleted}</p>
                        <p>"In The Beginning": {props.student.inTheBeginningCompleted}</p>
                        <p>"First and Last": {props.student.firstAndLastCompleted}</p>
                        <p>"Hidden Truths": {props.student.hiddenTruthsCompleted}</p>
                        <p>"Elohim": {props.student.elohimCompleted}</p>
                        <p>"The Twins": {props.student.theTwinsCompleted}</p>
                        <p>"Fearfully and Wonderfully Made": {props.student.fearfullyAndWonderfullyCompleted}</p>
                        <p>"Numbers of Creation": {props.student.numbersOfCreationCompleted}</p>
                        <p>"The Lamb of God": {props.student.theLambCompleted}</p>

                    </div>
                    <div className="card-action">
                        Series completed: {props.student.seriesCompleted}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentSingle;