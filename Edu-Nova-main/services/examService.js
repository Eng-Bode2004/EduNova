const ExamModel = require('../models/exam');

class ExamService {
  // Create a new exam
  async createExam(examData) {
    const exam = new ExamModel(examData);
    return await exam.save();
  }

  // Get all exams
  async getAllExams() {
    return await ExamModel.find()
      .populate('course')
      .populate('classroom')
      .populate('questions')
      .populate('students.student');
  }

  // Get exam by ID
  async getExamById(id) {
    return await ExamModel.findById(id)
      .populate('course')
      .populate('classroom')
      .populate('questions')
      .populate('students.student');
  }

  // Get exams by course ID
  async getExamsByCourse(courseId) {
    return await ExamModel.find({ course: courseId })
      .populate('course')
      .populate('classroom')
      .populate('questions')
      .populate('students.student');
  }

  // Update an exam
  async updateExam(id, examData) {
    return await ExamModel.findByIdAndUpdate(id, examData, { new: true });
  }

  // Delete an exam
  async deleteExam(id) {
    return await ExamModel.findByIdAndDelete(id);
  }

  // Add student response to the exam
  async addStudentResponse(examId, studentId, responseData) {
    const exam = await ExamModel.findById(examId);
    if (!exam) throw new Error('Exam not found');
    const studentIndex = exam.students.findIndex((s) => s.student.toString() === studentId);
    if (studentIndex === -1) throw new Error('Student not enrolled in this exam');

    // Add response to student
    exam.students[studentIndex].responses.push(responseData);
    await exam.save();
    return exam;
  }
}

module.exports = new ExamService();
