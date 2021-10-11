import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.ACCOUNT,
    pass: process.env.KEY,
  },
});
const CORS_OPTIONS = {
  origin: ["http://localhost:5500", "https://jolly-nobel-de0476.netlify.app"],
};

const sendmail = async (req, res) => {
  const body = req.body;
  const option = {
    from: process.env.ACCOUNT,
    to: "tim31422@gmail.com",
    subject: `${body.name}寄了一封email給你`,
    text: `${body.content} (${body.email})`,
  };

  try {
    await transporter.sendMail(option);
    res.json({ message: "成功" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

app.listen(PORT, () => {
  console.log("server is starting");
});

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors(CORS_OPTIONS));

app.post("/sendmail", sendmail);
