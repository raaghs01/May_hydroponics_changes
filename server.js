const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'public/uploads/' });

app.use(cors());
app.use(express.json());

const excelFilePath = path.join(__dirname, 'public', 'contact_responses.xlsx');

// Ensure uploads directory exists
if (!fs.existsSync(path.join(__dirname, 'public', 'uploads'))) {
  fs.mkdirSync(path.join(__dirname, 'public', 'uploads'), { recursive: true });
}

app.post('/api/contact-form', upload.fields([
  { name: 'resumeFile', maxCount: 1 },
  { name: 'sopFile', maxCount: 1 }
]), (req, res) => {
  try {
    // Read or create workbook
    let workbook, worksheet;
    if (fs.existsSync(excelFilePath)) {
      workbook = XLSX.readFile(excelFilePath);
      worksheet = workbook.Sheets['Responses'];
    } else {
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.aoa_to_sheet([[
        'Timestamp', 'Regarding', 'First Name', 'Last Name', 'Email', 'Message',
        'Event Name', 'Attendees', 'Program Name', 'Project Name', 'Idea', 'Department',
        'Resume File', 'SOP File'
      ]]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Responses');
    }

    // Convert worksheet to JSON
    const data = XLSX.utils.sheet_to_json(worksheet);

    // Add new row
    const body = req.body;
    const newRow = {
      'Timestamp': new Date().toISOString(),
      'Regarding': body.regarding,
      'First Name': body.firstName,
      'Last Name': body.lastName,
      'Email': body.email,
      'Message': body.message,
      'Event Name': body.eventName,
      'Attendees': body.attendees,
      'Program Name': body.programName,
      'Project Name': body.projectName,
      'Idea': body.idea,
      'Department': body.department,
      'Resume File': req.files['resumeFile'] ? 'Yes' : 'No',
      'SOP File': req.files['sopFile'] ? 'Yes' : 'No'
    };
    data.push(newRow);

    // Write back to Excel
    const newWorksheet = XLSX.utils.json_to_sheet(data);
    workbook.Sheets['Responses'] = newWorksheet;
    XLSX.writeFile(workbook, excelFilePath);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing form submission' });
  }
});

app.listen(3001, () => {
  console.log('Backend server running on http://localhost:3001');
});
