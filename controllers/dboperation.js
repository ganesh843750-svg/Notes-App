 import noteModel from "../model/model.js"
 
 export const notedata = async ()=> {
    const data = await noteModel.find();
    console.log(data)
    return data
 }
 export const createnote = async ( title , content) =>{
       const resp = await noteModel.create({ title, content})
       if(resp){
         return "Note Created Successfully"
       }
       else{
         return "Error while creating note"
       }

 }

 export const deletenote = async (id) =>{
   const resp = await noteModel.findByIdAndDelete(id);
   if(resp){
      return 'Note Deleted Successfully'
   }
   else{
      return 'Error while deleting note'
   }
 }

 export const getNote = async  (id)=>{
  try{
      const note = await noteModel.findById(id)
  return note
  }
  catch(e){
    return `Error while fetching the note ${e}`
  }

 }


 export const  updateNote = async (id, title, content)=>{
  try{
    const note = await noteModel.findByIdAndUpdate(id, { title, content})
    return 'Note Updated Sucessfully'
  }
  catch(e){
    console.log(e)
    return `Error while updating the note ${e}`
  }
 }
