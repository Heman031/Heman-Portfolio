const express = require('express')
const router = express.Router()
const Message = require('../models/Message')

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' })
    }

    const msg = new Message({ name, email, subject, message })
    await msg.save()

    res.status(200).json({ success: true, message: 'Message received!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: 'Server error.' })
  }
})

module.exports = router