import User from "../../../models/userModel";
import connectMongo from "../../../utils/connectMongo";
import { generateToken } from "../../../utils/generateToken"
const bcrypt = require('bcrypt');

  export default async function login(req, res) {
    try {
      await connectMongo();
      console.log('CONNECTED TO MONGO');
  
      const { email, password } = req.body
  
        // Check for user email
        const user = await User.findOne({ email })
    
        if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            token: generateToken(user._id),
        })
        } else {
        res.status(400)
        throw new Error('Invalid credentials')
        }
        
        res.json({ user });
        } catch (error) {
        console.log(error);
        res.json({ error });
    }
  }