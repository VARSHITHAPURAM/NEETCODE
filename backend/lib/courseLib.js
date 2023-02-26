const courseModel = require('../models/courseModel');

module.exports.getAllCourses = async function(){
    return await courseModel.find({});
}

module.exports.createFirstCourse = async function(){
    const courses = await courseModel.find({});
    if(courses && courses.length == 0){
        const firstCourseInput = {
         "title" : "BZ DSA",
         "level" : "EASY"
        };
    
        const course = new courseModel(firstCourseInput);
        await course.save();
    }
}