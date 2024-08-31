import User from "../../models/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

export  async function login(req: any, res: any) {
   try {
      const { username, password } = req.body;
      if (!username) {
         return res.status(422).json({ message: "Please Enter a User Name " })
      }
      if (!password) {
         return res.status(422).json({ message: "Please Enter a password " })
      }

      const user = await User.findOne({ userName: username });

      if (!user) {
         return res.status(422).json({ message: "Invalid credintial" })
      }

      const comparingPassword = await bcrypt.compare(password, user.password)

      if (!comparingPassword) {
         return res.status(422).json({ message: "Invalid credintial" })
      }

      const accessToken = jwt.sign({ userID: user._id, userName: user.userName }, process.env.SECRET_ACCESS_TOKEN as string, { expiresIn: '2h' })

      res.status(200).json({
         message:"successful login",
         id:user._id,
         username:user.userName,
         token:accessToken,
      })


   } catch (error: any) {
      res.status(500).json({ message: error.toString() })
   }
}