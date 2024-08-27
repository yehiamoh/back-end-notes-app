import Note from '../../models/notes';

export async function getNotes (req:any,res:any,next:any){
  try{
  const result = await Note.find().lean().exec();
  res.status(200).json({message:"customer retrived",notes:result})
  }
  catch(error:any){
   console.log(error);
   res.status(500).json({message:error.toString()})
  }
}
