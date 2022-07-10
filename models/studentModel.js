import mongoose from "mongoose";


const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number
    },

    hebrewName: {
        type: String
    },

    theBasicsCompleted: {
        type: Boolean,
        default: false
    },

    inTheBeginningCompleted: {
        type: Boolean,
        default: false
    },

    firstAndLastCompleted: {
        type: Boolean,
        default: false
    },

    
    hiddenTruthsCompleted: {
        type: Boolean,
        default: false
    },

    elohimCompleted: {
        type: Boolean,
        default: false
    },

    theTwinsCompleted: {
        type: Boolean,
        default: false
    },

    fearfullyAndWonderfullyCompleted: {
        type: Boolean,
        default: false
    },

    numbersOfCreationCompleted: {
        type: Boolean,
        default: false
    },

    theLambCompleted: {
        type: Boolean,
        default: false
    },

    seriesCompleted: {
        type: Boolean,
        default: false,       
    },

    create_date: {
        type: Date,
        default: Date.now
    }

});