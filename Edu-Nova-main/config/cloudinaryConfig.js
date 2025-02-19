const cloudinary = require('cloudinary');
const { resolve } = require('path');

cloudinary.config({

    cloud_name:'dz4ujk3p1',
    api_key:'689298225939669',
    api_secret:'Q2t9e8T2BrLzpD0EdAPqvO_EDuk'
})

exports.uploads = (file)=>{
    return new Promise(resolve =>{
        cloudinary.uploader.upload(file, (result)=>{
            resolve({url: result.url , id:result.public_id})
        }, {resource_type :"auto"})
    })
}