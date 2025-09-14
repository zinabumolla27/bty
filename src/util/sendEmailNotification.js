// utils/sendEmailNotification.js
import nodemailer from "nodemailer";
import crypto from "crypto";

// Function to send email notification
export const sendEmailNotification = async (email) => {
  try {
    // Generate a 6-digit verification code
    const verificationCode = crypto.randomInt(100000, 999999).toString();

    // Set expiration time (e.g., 10 minutes from now)
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Setup mail transporter (use your email service)
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g. Gmail, Outlook, or custom SMTP
      auth: {
        user: "zinabumolla27@gmail.com",
        pass: "jtxfstiklgpgqhbu",
      },
    });

    // Email message
    const mailOptions = {
      from: `"My App" < BTY Trading PLC>`,
      to: email,
      subject: "Password Reset Verification Code",
      text: `Your verification code is: ${verificationCode}. It will expire at ${expiresAt.toLocaleTimeString()}.`,
      html: `
        <p>Hello,</p>
        <p>Your verification code is:</p>
        <h2 style="color:#2e86de;">${verificationCode}</h2>
        <p>This code will expire at <b>${expiresAt.toLocaleTimeString()}</b>.</p>
        <p>If you didn’t request this, please ignore the email.</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, verificationCode, expiresAt };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
