// services/courseService.js
const CourseModel = require('../models/course');

class CourseService {
    async createCourse(courseData) {
        const course = new CourseModel(courseData);
        return await course.save();
    }

    async getAllCourses() {
        return await CourseModel.find()
            .populate('category')
            .populate('instructor')
            .populate('students');
    }

    async getCourseById(id) {
        return await CourseModel.findById(id)
            .populate('category')
            .populate('instructor')
            .populate('students');
    }

    async updateCourse(id, courseData) {
        return await CourseModel.findByIdAndUpdate(id, courseData, { new: true });
    }

    async deleteCourse(id) {
        return await CourseModel.findByIdAndDelete(id);
    }

    // Get courses by User ID (Instructor or Students)
    async getCoursesByUserId(userId) {
        const courses = await CourseModel.find({
            $or: [
                { instructor: userId }, // If user is the instructor
                { students: userId }     // If user is enrolled as a student
            ]
        })
        .populate('category')
        .populate('instructor')
        .populate('students');

        return courses;
    }

    // Get courses by Category ID
    async getCoursesByCategory(categoryId) {
        const courses = await CourseModel.find({ category: categoryId })
            .populate('category')
            .populate('instructor')
            .populate('students');
        
        return courses;
    }
}

module.exports = new CourseService();
