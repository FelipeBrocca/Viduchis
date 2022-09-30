import bcryptjs from 'bcryptjs';

import Users from "../database/models/Users.js";


export const usersController =  {
    getUsers: async (req, res) => {
        try{
           const allUsers = await Users.find();

           res.status(200).json(allUsers)
        } catch (error){
           res.status(404).json ({ message: error.message })
        }
    },
    register: async (req, res) => {

        const {
          name,
          lastname,
          email,
          password,
          getOffers
        } = req.body;

        const newRegister = new Users({
          name,
          lastname,
          email,
          password: bcryptjs.hashSync(password, 10),
          getOffers,
          createdAt: Date.now()
        });

        try{
          await newRegister.save();

          res.status(201).json(newRegister)
        } catch (error){
          res.status(409).json({ message: error.message })
        }
    },
    profile: async (req, res) => {
      try{
        const oneUser = await Users.findById(req.params.id);

        res.status(200).json(oneUser)
     } catch (error){
        res.status(404).json ({ message: error.message })
     }
    },
    updateProfile: async (req, res) => { 
      try {
        const userUpdated = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true})

        res.status(201).json(userUpdated)
      } catch (error) {
        res.status(409).json({ message: error.message }) 
      }   
    },
    deleteUser:async (req, res) => { 
         try {
          await Users.findByIdAndDelete(req.params.id)

          res.status(204).json({message: 'Usuario eliminado'})
         } catch (error) {
          res.status(304).json({message: error.message})
         }
    } 
}