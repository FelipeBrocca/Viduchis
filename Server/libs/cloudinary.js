import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: "du2iouufy",
    api_key: "994598213935759",
    api_secret: "5lAw0i6l2qnOpZXi-mE0nr86k1k"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Viduchis products'
    })
}

export const deleteImage = async id => { 
   await cloudinary.uploader.destroy(id)
}