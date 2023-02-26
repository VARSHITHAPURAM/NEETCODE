const courseModel = require('../models/courseModel');

module.exports.getAllCourses = async function(){
    return await courseModel.find({});
}

module.exports.createCourse = async function(courseInput){
        const course = new courseModel(courseInput);
        await course.save();
}

module.exports.updateCourse = async function(courseId, courseInput){
    await courseModel.findOneAndUpdate({_id : courseId}, updatedInput);
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