import dotenv from 'dotenv'
import User from "../models/user.model.js";
import crypto from 'crypto';
import nodemailer from 'nodemailer';

dotenv.config()


export const getuserData = async (req, res) =>{
    const {email} = req.body;
    console.log(email);
    
    try {
        
                // Assuming email is passed as a query parameter
            const user = await User.findOne({ email: email }).select('-password'); // Exclude password
            if (user) {
                console.log(user);
                
                res.status(200).json(user); // Send user details without password
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        
    
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error: error.message });

        
    }
}



export const requestPasswordReset = async (req, res) => {
    const { email } = req.body;
    console.log(process.env.OWNER_EMAIL, process.env.OWNER_EMAIL_PASS);
    
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Generate reset token
      const resetToken = crypto.randomBytes(32).toString('hex');
      user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiry
      await user.save();
  
      // Send email
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Or your email service
        auth: {
          user: process.env.OWNER_EMAIL,
          pass: process.env.OWNER_EMAIL_PASS,
        },
      });
  
      const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
      const message = `
        <p>You requested a password reset</p>
        <p>Click this <a href="${resetUrl}">link</a> to reset your password.</p>
      `;
  
      await transporter.sendMail({
        to: user.email,
        subject: 'Password Reset Request',
        html: message,
      });
  
      res.status(200).json({ message: 'Password reset email sent.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };



  export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
  
    try {
      const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
      const user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { $gt: Date.now() }, // Ensure token hasn't expired
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      // Update password
      user.password = await bcrypt.hash(newPassword, 10);
      user.resetPasswordToken = undefined; // Clear token
      user.resetPasswordExpires = undefined; // Clear expiry
      await user.save();
  
      res.status(200).json({ message: 'Password has been reset.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  