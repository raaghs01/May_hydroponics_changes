import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // your frontend's URL
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://trainingcoehhrtf:training25%40@hydroponicscluster.zxduism.mongodb.net/contactus?retryWrites=true&w=majority&appName=hydroponicscluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
  regarding: String,
  eventName: String,
  attendees: String,
  programName: String,
  projectName: String,
  idea: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// API endpoint to receive form data
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact saved!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API endpoint to get all contacts
app.get('/api/contact', async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
// fetch('http://localhost:3000/api/contact', ...);

export default app; 