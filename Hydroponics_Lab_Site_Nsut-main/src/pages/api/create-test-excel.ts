import * as XLSX from 'xlsx';
import path from 'path';

// Create sample data for each form type
const sampleData = [
  {
    'Timestamp': new Date().toISOString(),
    'Regarding': 'General Inquiries',
    'First Name': 'John',
    'Last Name': 'Doe',
    'Email': 'john.doe@example.com',
    'Message': 'I would like to know more about hydroponics.',
    'Event Name': '',
    'Attendees': '',
    'Program Name': '',
    'Project Name': '',
    'Idea': '',
    'Department': '',
    'Resume File': 'No',
    'SOP File': 'No'
  },
  {
    'Timestamp': new Date().toISOString(),
    'Regarding': 'Event Bookings',
    'First Name': 'Jane',
    'Last Name': 'Smith',
    'Email': 'jane.smith@example.com',
    'Message': 'Interested in booking a workshop.',
    'Event Name': 'Hydroponics Workshop',
    'Attendees': '25',
    'Program Name': '',
    'Project Name': '',
    'Idea': '',
    'Department': '',
    'Resume File': 'No',
    'SOP File': 'No'
  },
  {
    'Timestamp': new Date().toISOString(),
    'Regarding': 'Training Programs',
    'First Name': 'Mike',
    'Last Name': 'Johnson',
    'Email': 'mike.j@example.com',
    'Message': 'Interested in advanced training.',
    'Event Name': '',
    'Attendees': '',
    'Program Name': 'Advanced Hydroponics',
    'Project Name': '',
    'Idea': '',
    'Department': '',
    'Resume File': 'No',
    'SOP File': 'No'
  },
  {
    'Timestamp': new Date().toISOString(),
    'Regarding': 'Project Collaborations',
    'First Name': 'Sarah',
    'Last Name': 'Wilson',
    'Email': 'sarah.w@example.com',
    'Message': 'Proposing a research collaboration.',
    'Event Name': '',
    'Attendees': '',
    'Program Name': '',
    'Project Name': 'Vertical Farming Research',
    'Idea': '',
    'Department': '',
    'Resume File': 'No',
    'SOP File': 'No'
  },
  {
    'Timestamp': new Date().toISOString(),
    'Regarding': 'Innovation Hub',
    'First Name': 'Alex',
    'Last Name': 'Brown',
    'Email': 'alex.b@example.com',
    'Message': 'Have an innovative idea to share.',
    'Event Name': '',
    'Attendees': '',
    'Program Name': '',
    'Project Name': '',
    'Idea': 'Automated Nutrient Monitoring System',
    'Department': '',
    'Resume File': 'No',
    'SOP File': 'No'
  },
  {
    'Timestamp': new Date().toISOString(),
    'Regarding': 'Volunteer Opportunities',
    'First Name': 'Emma',
    'Last Name': 'Davis',
    'Email': 'emma.d@example.com',
    'Message': 'Interested in volunteering.',
    'Event Name': '',
    'Attendees': '',
    'Program Name': '',
    'Project Name': '',
    'Idea': '',
    'Department': 'Technical',
    'Resume File': 'Yes',
    'SOP File': 'Yes'
  }
];

// Create workbook and worksheet
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(sampleData);

// Add worksheet to workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Responses');

// Write to file
const excelFilePath = path.join(process.cwd(), 'public', 'contact_responses.xlsx');
XLSX.writeFile(workbook, excelFilePath);

console.log('Test Excel file created successfully at:', excelFilePath); 