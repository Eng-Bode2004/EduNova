const Category = require('../models/category');

class CategoryService {
  async createCategory(data) {
    const category = new Category(data);
    await category.save();
    return category;
  }

  async getAllCategories() {
    return await Category.find();
  }

  async getCategoryById(id) {
    return await Category.findById(id);
  }

  async updateCategory(id, data) {
    return await Category.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteCategory(id) {
    return await Category.findByIdAndDelete(id);
  }

  async incrementCourseCount(id) {
    const category = await Category.findById(id);
    if (!category) throw new Error('Category not found');
    category.courseCount++;
    await category.save();
    return category;
  }

  async decrementCourseCount(id) {
    const category = await Category.findById(id);
    if (!category) throw new Error('Category not found');
    if (category.courseCount > 0) {
      category.courseCount--;
      await category.save();
    }
    return category;
  }
}

module.exports = new CategoryService();
