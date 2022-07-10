import mongoose from "mongoose";
import { StudentSchema } from '../models/studentModel';

const Student = mongoose.model('Student', StudentSchema);

//functions that interact with DB when request to API is made
export const addNewStudent = (req, res) => {
    let newStudent = new Student(req.body);

    newStudent.save((err, Student) => {
        if (err) {
            res.send(err);
        }
        res.json(Student);
    });
};


export const getStudents = (req, res) => {

    Student.find({},(err, Student) => {
        if (err) {
            res.send(err);
        }
        res.json(Student);
    });
};


export const getStudentWithID = (req, res) => {

    Student.findById(req.params.StudentId,(err, Student) => {
        if (err) {
            res.send(err);
        }
        res.json(Student);
    });
};

export const UpdateStudent = (req, res) => {

    Student.findOneAndUpdate({ _id: req.params.StudentId}, 
        req.body, {new: true},  
        (err, Student) => {

        if (err) {
            res.send(err);
        }
        res.json(Student);
    });
};


export const deleteStudent = (req, res) => {

    Student.remove({ _id: req.params.StudentId},(err, Student) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Student successfully removed.'});
    });
};