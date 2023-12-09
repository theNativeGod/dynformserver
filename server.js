const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Endpoint to fetch form fields
app.get('/api/form', (req, res) => {
    const formFields = {
        "instructional_video": "http://www.youtube.com/watch?v=Uszj_k0DGsg",
        "step_name": "Test Step",
        "step_description": "This is test description",
        "stepfields": [
            {
                "fldtype": "1",
                "fldlabel": "Name",
                "fldreqd": "1"
            },
            {
                "fldtype": "1",
                "fldlabel": "Name2",
                "fldreqd": "1"
            },
            {
                "fldtype": "2",
                "fldlabel": "Message",
                "fldreqd": "1"
            },
            {
                "fldtype": "3",
                "fldlabel": "Need Email?",
                "fldreqd": "1",
                "fldoptions": [
                    {
                        "optname": "Yes",
                        "optval": "1"
                    },
                    {
                        "optname": "No",
                        "optval": "0"
                    }
                ]
            },
            {
                "fldtype": "4",
                "fldlabel": "Gender?",
                "fldreqd": "1",
                "fldoptions": [
                    {
                        "optname": "Male",
                        "optval": "1"
                    },
                    {
                        "optname": "Female",
                        "optval": "2"
                    }
                ]
            },
            {
                "fldtype": "5",
                "fldlabel": "Select Box",
                "fldreqd": "1",
                "fldoptions": [
                    {
                        "optname": "opt 1",
                        "optval": "1"
                    },
                    {
                        "optname": "0pt 2",
                        "optval": "2"
                    }
                ]
            },
            {
                "fldtype": "5",
                "fldlabel": "Select Box2",
                "fldreqd": "1",
                "fldoptions": [
                    {
                        "optname": "opt 3",
                        "optval": "3"
                    },
                    {
                        "optname": "0pt 4",
                        "optval": "4"
                    }
                ]
            },
            {
                "fldtype": "6",
                "fldlabel": "File Upload",
                "fldreqd": "1"
            },
            {
                "fldtype": "6",
                "fldlabel": "File Upload2",
                "fldreqd": "1"
            },
            {
                "fldtype": "7",
                "fldlabel": "Delivery Date",
                "fldreqd": "0"
            },
            {
                "fldtype": "8",
                "fldlabel": "Quantity",
                "fldreqd": "0"
            }
        ]
    };

    res.json(formFields);
});

// Endpoint to receive form submission
app.post('/api/submit', (req, res) => {
    const formData = req.body;
    // Store the formData to a database or perform required actions
    console.log('Received form data:', formData);
    res.status(200).send('Form data received successfully.');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
