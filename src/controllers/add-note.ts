import Note from "../models/notes";

export async function postNote(req:any,res:any,next:any) {
   try{
      const{title,content}=req.body;

      if(!title){
         return res.status(404).json({message:"title is required"})
      }
      if(!content){
         return res.status(404).json({message:"content is required"})
      }   
      const result=  Note.create({
         title:title,
         content:content
      })

      res.status(200).json({message:"note created"})
   }
   catch(error:any){
      console.log(error);
      res.status(404).json({message:error.toString()});
   }
}