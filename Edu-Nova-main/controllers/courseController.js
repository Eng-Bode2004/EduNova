// controllers/courseController.js
const CourseService = require('../services/courseService');

class CourseController {
    async createCourse(req, res) {
        try {
            const course = await CourseService.createCourse(req.body);
            res.status(201).json({ message: 'Course created successfully', course });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllCourses(req, res) {
        try {
            const courses = await CourseService.getAllCourses();
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getCourseById(req, res) {
        try {
            const course = await CourseService.getCourseById(req.params.id);
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateCourse(req, res) {
        try {
            const course = await CourseService.updateCourse(req.params.id, req.body);
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json({ message: 'Course updated successfully', course });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteCourse(req, res) {
        try {
            const course = await CourseService.deleteCourse(req.params.id);
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json({ message: 'Course deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get courses by User ID (Instructor or Student)
    async getCoursesByUserId(req, res) {
        try {
            const userId = req.params.userId;
            const courses = await CourseService.getCoursesByUserId(userId);
            if (!courses.length) {
                return res.status(404).json({ message: 'No courses found for this user' });
            }
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get courses by Category ID
    async getCoursesByCategory(req, res) {
        try {
            const categoryId = req.params.categoryId;
            const courses = await CourseService.getCoursesByCategory(categoryId);
            if (!courses.length) {
                return res.status(404).json({ message: 'No courses found for this category' });
            }
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new CourseController();
