import mongoose from 'mongoose';

// Connect to MongoDB
const uri = 'mongodb+srv://trainingcoehhrtf:training25%40@hydroponicscluster.zxduism.mongodb.net/contactus?retryWrites=true&w=majority&appName=hydroponicscluster';

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
  departmentName: String,
  createdAt: { type: Date, default: Date.now }
});

// Use existing model or create new one
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Connect to MongoDB if not connected
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.error('MongoDB connection error:', error);
      return res.status(500).json({ error: 'Database connection failed' });
    }
  }

  // Handle POST request
  if (req.method === 'POST') {
    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(201).json({ message: 'Contact saved!' });
    } catch (err) {
      console.error('Error saving contact:', err);
      res.status(500).json({ error: err.message });
    }
  }
  // Handle GET request
  else if (req.method === 'GET') {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.json(contacts);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      res.status(500).json({ error: err.message });
    }
  }
  // Handle unsupported methods
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 
