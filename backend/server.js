// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post("/send-email", async (req, res) => {
//   const { name, organisation, email, subject, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL, // Your Gmail
//       pass: process.env.PASSWORD, // App Password (not Gmail password)
//     },
//   });

//   const mailOptions = {
//     from: `${email}`,
//     to: "verma.aman1008@gmail.com", // Change to your target email
//     subject: `New Contact Form Submission - ${subject}`,
//     text: `Name: ${name}\nOrganisation: ${organisation}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to send email." });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,  // Use your email for authentication
    pass: process.env.PASSWORD,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, organisation, email, subject, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL}>`, // Authenticated email (must match SMTP)
    replyTo: `${email}`, // User's actual email (so you can reply to them)
    to: process.env.EMAIL, // Your business email where you receive messages
    subject: subject,
    text: `Name: ${name}\nOrganisation: ${organisation}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
