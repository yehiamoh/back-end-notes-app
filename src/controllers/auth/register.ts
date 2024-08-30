import user from "../../models/user";
const bcrypt = require('bcrypt');


export async function register(req: any, res: any) {
   try {
      const { username, password } = req.body;

      if (!username) {
         res.status(422).json({ message: "Please Enter a User Name " })
      }
      if (!password) {
         res.status(422).json({ message: "Please Enter a password " })
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await user.create({
         userName: username,
         password: hashedPassword
      });
      if (result) {
        return res.status(201).json({ message: "User created" });
      } else {
        return res.status(422).json({ message: "Error in creating user" })

      }
   }
   catch (error: any) {
      res.status(500).json({ message: error.toString() });
   }

}

export default register;