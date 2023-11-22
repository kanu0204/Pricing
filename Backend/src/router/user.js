const express = require('express');
const router = express.Router();

const { UserModel } = require("../Models/userModel.js");


router.post('/api/pricing', async (req, res) => {
  try {
    const { name, email, plan } = req.body;
    const newUser = new UserModel({ name, email, plan });
    await newUser.save();
    res.json({ success: true, message: 'Name and Email saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

router.get('/api/pricing', async (req, res) => {
  try {
    const userData = await UserModel.find();
    res.json({ success: true, data: userData }).status(200);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export { router as usersRoutes };
