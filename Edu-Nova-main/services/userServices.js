const UserModel = require('../models/user');
const RoleModel = require('../models/Role');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

class UserService{

    async registerUser(userData) {
        const { firstName, lastName, username, email, password, confirmPassword, role, profilePicture } = userData;

        // Validate required fields
        if (!firstName || !lastName || !username || !email || !password || !confirmPassword || !role ) {
            throw new Error('All fields are Required');
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }

        // Check if user already exists (by email or username)
        const existingUser = await UserModel.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            throw new Error('Email or username already registered');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 5);


        // Hash the password
        const hashedConfirmedPassword = await bcrypt.hash(confirmPassword, 5);

        // Prepare new user object
        const newUser = new UserModel({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword, // Save only the hashed password
            confirmPassword:hashedConfirmedPassword,
            role,
            profilePicture: profilePicture || null, // Save the profile picture if provided
        });

        // Save user to the database
        return await newUser.save();
    }


    async loginUser(email,password){
        

        // Validate required fields
        if (!email || !password) {
            throw new Error('Email and password are required');
        }


        // Find user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }


        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }


       // Generate JWT token
       const token = jwt.sign(
        {
             id: user._id,
             role: user.role 
            },process.env.JWT_SECRET, // Secret key loaded from .env
            
        { expiresIn: process.env.JWT_EXPIRES_IN || '1h' } // Expiry time
    );return { token, user };


    }





    async getUserById(id){

        const user = await UserModel.findById(id).populate(['role']);
        if (!user) {
            throw new Error('User not found');
        }
        return user;

    }


    async getAllUsers(){
        return await UserModel.find().populate(['role']);








    }


    async updateUser(id, updateData){
        const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;


    }


    async deleteUser(id){
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return deletedUser;










    }


    async getMyProfile(userId){

        const user = await UserModel.findById(userId).populate(['role']);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    


    async updateMyProfile(userId, updateData) {
        const { firstName, lastName, username, password, confirmPassword } = updateData;
        const updateFields = {};
    
        // Handle password update
        if (password || confirmPassword) {
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match');
            }
            updateFields.password = await bcrypt.hash(password, 10);
        }
    
        // Add other fields to update only if provided
        if (firstName) updateFields.firstName = firstName;
        if (lastName) updateFields.lastName = lastName;
        if (username) updateFields.username = username;
    
        // Update the user's profile
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { $set: updateFields }, // Use $set to update only specified fields
            { new: true } // Return the updated document
        );
    
        if (!updatedUser) {
            throw new Error('User not found');
        }
    
        return updatedUser;
    }

    // Get users by role
    async getUsersByRole(role) {
        return await UserModel.find({ role }).populate(['role']);


    }

    async assignRole(userId, roleId) {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error('Invalid user ID');
        }
        if (!mongoose.Types.ObjectId.isValid(roleId)) {
            throw new Error('Invalid role ID');
        }
    
        const user = await UserModel.findByIdAndUpdate(userId, { role: roleId }, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    



}

module.exports = new UserService();
