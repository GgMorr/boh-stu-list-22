import { addNewStudent, 
    getStudents, 
    getStudentWithID, 
    UpdateStudent, 
    deleteStudent } 
    from '../controllers/studentControllers';

const routes = (app) => {
    app.route('/students')
    
    //GET endpoint
    .get(getStudents)

    //POST endpoint
    .post(addNewStudent);

    app.route('/student/:StudentId')
        //GET specific player
        .get(getStudentWithID)
        
        //UPDATE specific player 
        .put(UpdateStudent)

        //DELETE specific player 
        .delete(deleteStudent)
}


export default routes;