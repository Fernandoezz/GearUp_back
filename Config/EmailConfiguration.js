import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: parseInt(process.env.EMAILPORT, 10), // Convert port to number
  secure: true, // Use SSL/TLS
  auth: {
    user: process.env.SENDeMAIL,
    pass: process.env.SENDMAILPASSWORD,
  },
});

const verifyalert = async (senderEmail, name, cart_topic) => {
  try {
    await transporter.sendMail({
      from: process.env.SENDeMAIL,
      to: senderEmail,
      subject: "Order Confirmation",
      html: `Your <strong>${cart_topic}</strong> order placed by <strong>${name}</strong> has been confirmed.`,
    });

    return false; 
  } catch (e) {
    console.error("Email sending failed:", e);
    return true; 
  }
};

export default verifyalert;
