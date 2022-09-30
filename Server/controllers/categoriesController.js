import Categories from "../database/models/Categories.js"


export const categoriesController =  {
  getCategories: async (req, res) => {
    try {
        const categories = await Categories.find();

        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json ({ message: error.message })
    }
  },
  categorie: async (req, res) => {
    try {
        const categorie = await Categories.findById(req.params.id);

        res.status(200).json(categorie)
    } catch (error) {
         res.status(404).json ({ message: error.message })
    }
  },
  newCategorie: async (req, res) => {
    
    const { name } = req.body; 

    const newCategorie = new Categories ({ name })
 
    try {
      await newCategorie.save()

        res.status(201).json(newCategorie)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
  },
  updateCategorie: async (req, res) => {

   try {
    const updatedCategorie = await Categories.findByIdAndUpdate(req.params.id, req.body, {new: true})
   
    res.status(201).json(updatedCategorie)
   } catch (error) {
    res.status(409).json({ message: error.message }) 
   }

  },
  deleteCategorie: async (req, res) => {
    try {
        await Categories.findByIdAndDelete(req.params.id)

        res.status(204).json({message: 'Categoria eliminada'})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
  }
}